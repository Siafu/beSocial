import { Interest } from './interest';

export interface Meeting {
    id: number;
    name: string;
    description: string;
}
export interface User {
    id: number;
    name: string;
    title: string;
    email: string;
    interests: Array<Interest>
    meetings: Array<Meeting>
}

