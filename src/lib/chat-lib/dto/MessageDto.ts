import type {Message} from '../models/Message';

export type MessageDto = Omit<Message, 'id' | 'timestamp'>