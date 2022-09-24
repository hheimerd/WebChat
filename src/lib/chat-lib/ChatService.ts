import type {ChatRepository} from './ChatRepository';
import type {Chat} from './models/Chat';
import type {Message} from './models/Message';


export class ChatService {
    constructor(
        private readonly chatRepository: ChatRepository,
        private readonly currentUserId: string,
    ) {

    }

    async getChats(): Promise<Chat[]> {
        return await this.chatRepository.getChats(this.currentUserId);
    }

    async  createChat(chatName: string, membersId: string[] = []): Promise<Chat> {
        return await this.chatRepository.addChat({
            name: chatName,
            membersId: [...membersId, this.currentUserId],
            ownerId: this.currentUserId,
        });
    }

    async getChatMessages(chatId: string, offset: number, limit = 30): Promise<Message[]> {
        return await this.chatRepository.getChatMessages(chatId, offset, limit);
    }

    async sendMessage(messageArgs: { message: string, chatId: string }): Promise<Message> {
        return await this.chatRepository.addMessage({
            message: messageArgs.message,
            chatId: messageArgs.chatId,
            from: this.currentUserId
        });
    }
}