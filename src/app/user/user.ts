import { Interest } from './interest';
import { Meeting } from '../meetings/meeting';

export interface User {
    id: number;
    name: string;
    title: string;
    email: string;
    interests?: Array<Interest>;
    meetings?: Array<Meeting>;
}

