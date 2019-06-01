import { Interest } from './interest';

export interface User {
    id: number;
    name: string;
    title: string;
    email: string;
    interests: Array<Interest>
}

