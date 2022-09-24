import {BehaviorSubject} from 'rxjs';
import type {Chat} from './models/Chat';
import type {Message} from './models/Message';
import type {ChatService} from './ChatService';
import type {ChatEventSubscriber} from './ChatEventSubscriber';
import type {IDisposable} from '../utils/types/IDisposable';

export class ChatViewModel implements IDisposable {

    private _chats = new BehaviorSubject<Chat[]>([]);
    private _messages = new BehaviorSubject<Message[]>([]);
    private _selectedChat = new BehaviorSubject<Chat | null>(null);

    public chats = this._chats.asObservable();
    public messages = this._chats.asObservable();
    public selectedChat = this._selectedChat.asObservable();

    constructor(
        private readonly chatService: ChatService,
        private readonly chatEventSubscriber: ChatEventSubscriber,
    ) {
        chatEventSubscriber.newChat.subscribe((chat) => {
            this.onNewChat(chat)
        });

        chatEventSubscriber.newMessage.subscribe((message) => {
            if (message.chatId === this._selectedChat.value?.id)
                this.onNewMessage(message)
        });
    }

    async updateChatsList() {
        const chats = await this.chatService.getChats();
        this._chats.next(chats);
    }

    async createChat(chatName: string, membersId: string[] = []) {
        const newChat = await this.chatService.createChat(chatName, membersId);
        this.onNewChat(newChat);
    }

    async openChat(chat: Chat | null) {
        if (chat === null) {
            this._selectedChat.next(null)
            return;
        }

        if (!this._chats.value.includes(chat)) return;
        this._selectedChat.next(chat);

        this._messages.next([]);
        const messages = await this.chatService.getChatMessages(chat.id, 0);
        this._messages.next(messages);
    }

    onNewChat(chat: Chat) {
        this._chats.next([chat, ...this._chats.value]);
    }

    async sendMessage(messageText: string) {
        if (!this._selectedChat.value)
            return;

        const newMessage = await this.chatService.sendMessage({
            chatId: this._selectedChat.value.id,
            message: messageText
        })

        this.onNewMessage(newMessage);
    }

    onNewMessage(message: Message) {
        this._messages.next([...this._messages.value, message]);
    }

    async dispose(): Promise<void> {
        await this.chatEventSubscriber.dispose();
    }
}