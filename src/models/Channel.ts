import {Category} from './Category';

export type Channel = {
    name: string;
    icon: string;
    id: number;
    categories: Category[];
}