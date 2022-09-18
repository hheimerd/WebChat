import type {Chat} from './Chat';

export type Channel = {
    name: string;
    icon: string;
    id: number;
    chats: Chat[];
}