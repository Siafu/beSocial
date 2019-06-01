import { Interest } from './interest';

export interface User {
    id: number;
    name: string;
    title: string;
    interests: Array<Interest>
}

