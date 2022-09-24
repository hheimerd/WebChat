import {Subject} from 'rxjs';
import type {Message} from './models/Message';
import type {Chat} from './models/Chat';
import type {IDisposable} from '../utils/types/IDisposable';

type MessageSubscriberConfig = {
    webSocketUrl: string,
    authorizationString: string;
}

export class ChatEventSubscriber implements IDisposable {

    private _newMessage = new Subject<Message>();
    private _newChat = new Subject<Chat>();

    public newMessage = this._newMessage.asObservable();
    public newChat = this._newChat.asObservable();


    constructor(config: MessageSubscriberConfig) {

    }

    async dispose(): Promise<void> {
        this._newMessage.complete();
        this._newChat.complete();
    }
}