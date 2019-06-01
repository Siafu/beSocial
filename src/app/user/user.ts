import Interest from "./interest"

export default interface User { 
    id: number;
    name: string;
    title: string;
    interests: Array<Interest>
}

