import type {Chat} from '../models/Chat';

export type ChatDto = Omit<Chat, 'id'>