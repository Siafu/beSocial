export class Meeting {
    id: number;
    name: string;
    date: string;
    time: string;

    constructor(name, date, time) {
        this.name = name;
        this.date = date;
        this.time = time;
    }
}
