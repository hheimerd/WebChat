import type {ChannelRepository} from '../ChannelRepository';
import type {Channel} from '../../models/Channel';
import type {Chat} from '../../models/Chat';

export class MockChannelRepository implements ChannelRepository {
    getChannels(): Promise<Channel[]> {
        return Promise.resolve(channels);
    }
}

const chats = [
    {
        name: 'Home',
        id: '0',
    },
    {
        name: 'Music',
        id: '1',
    },
    {
        name: 'Gaming',
        id: '2',
    },
    {
        name: 'Education',
        id: '3',
    },
    {
        name: 'Science & Tech',
        id: '4',
    },
    {
        name: 'Entertainment',
        id: '5',
    },
    {
        name: 'Student Hubs',
        id: '6',
    },
] as Chat[];

const channels: Channel[] = [
    {
        name: 'Science',
        id: 1,
        icon: 'assets/images/channels/Science.png',
        chats: chats.slice(1, -2),
    },
    {
        name: 'Food',
        id: 3,
        icon: 'assets/images/channels/Food.png',
        chats: chats.slice(2),
    },
    {
        name: 'Space',
        id: 2,
        icon: 'assets/images/channels/Space.png',
        chats: chats.slice(0, -2),
    },
    {
        name: 'Explore',
        id: 4,
        icon: 'assets/images/channels/Explore.png',
        chats: chats,
    },
];
