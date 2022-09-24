import type {Chat} from './models/Chat';
import type {ChatDto} from './dto/ChatDto';
import type {MessageDto} from './dto/MessageDto';
import type {Message} from './models/Message';

type ChatRepositoryConfig = {
    extraHeaders: { [key: string]: string },
    url: string,
}

type ChatMember = {
    userId: string;
    chatId: string
}
type CreateChatArgs = ChatDto & { membersId: string[] };
type CreateMessageArgs = MessageDto;


export class ChatRepository {
    private _chats: Chat[] = [];
    private _chatMembers: ChatMember[] = [];
    private _chatMessages = new Map<Chat['id'], Message[]>(this._chats.map(c => ([c.id, []])));
    private _chatId = this._chats.length + 1;
    private _chatMessageId = 1000;

    constructor(config: ChatRepositoryConfig) {
    }

    async getChats(chatMemberId: ChatMember['userId']) {
        const chatGroups = this._chatMembers
            .filter(cm => cm.userId === chatMemberId)
            .map(cm => cm.chatId);
        if (chatGroups.length === 0)
            return [];

        return this._chats.filter(chat => chatGroups.includes(chat.id));
    }

    async addChat(chatArgs: CreateChatArgs) {
        const {membersId, ...chat} = chatArgs;

        const uniqueMembers = [...new Set(membersId).values()];
        this._chatMembers.push(...uniqueMembers.map(userId => ({
            chatId: this._chatId.toString(),
            userId,
        })));

        const newChat = {...chat, id: (this._chatId++).toString()};
        this._chats.push(newChat);

        return newChat;
    }

    async getChatMessages(chatId: string, offset: number, limit: number) {
        return this._chatMessages.get(chatId)?.slice(-offset, -(offset + limit)) ?? [];
    }

    async addMessage(messageArgs: CreateMessageArgs) {
        const newMessage = <Message>{
            id: (this._chatMessageId++).toString(),
            ...messageArgs,
            timestamp: Date.now(),
        };
        this._chatMessages.get(messageArgs.chatId)?.push(newMessage);
        return newMessage;
    }
}