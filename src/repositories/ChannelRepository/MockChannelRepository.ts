import type {ChannelRepository} from '../ChannelRepository';
import type {Channel} from '../../models/Channel';
import type {Category} from '../../models/Category';

export class MockChannelRepository implements ChannelRepository {
    getChannels(): Promise<Channel[]> {
        return Promise.resolve(channels);
    }
}

const categories = [
    {
        name: 'Home',
        icon: 'assets/icons/categories/Symbol.svg',
        id: 0,
    },
    {
        name: 'Music',
        icon: 'assets/icons/categories/Symbol-1.svg',
        id: 1,
    },
    {
        name: 'Gaming',
        icon: 'assets/icons/categories/Symbol-2.svg',
        id: 2,
    },
    {
        name: 'Education',
        icon: 'assets/icons/categories/Symbol-3.svg',
        id: 3,
    },
    {
        name: 'Science & Tech',
        icon: 'assets/icons/categories/Symbol-4.svg',
        id: 4,
    },
    {
        name: 'Entertainment',
        icon: 'assets/icons/categories/Symbol-5.svg',
        id: 5,
    },
    {
        name: 'Student Hubs',
        icon: 'assets/icons/categories/Symbol-6.svg',
        id: 6,
    },
] as Category[];

const channels: Channel[] = [
    {
        name: 'Science',
        id: 1,
        icon: 'assets/images/channels/Science.png',
        categories: categories.slice(1, -2),
    },
    {
        name: 'Food',
        id: 3,
        icon: 'assets/images/channels/Food.png',
        categories: categories.slice(2),
    },
    {
        name: 'Space',
        id: 2,
        icon: 'assets/images/channels/Space.png',
        categories: categories.slice(0, -2),
    },
    {
        name: 'Explore',
        id: 4,
        icon: 'assets/images/channels/Explore.png',
        categories: categories,
    },
];
