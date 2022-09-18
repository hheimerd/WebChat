import type {Channel} from '../models/Channel';


export interface ChannelRepository {
    getChannels(): Promise<Channel[]>;
}