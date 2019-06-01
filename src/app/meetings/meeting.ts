import { User } from '../user/user';

export interface Meeting {
    id: number;
    name: string;
    date: string;
    meetWith: User;
}
