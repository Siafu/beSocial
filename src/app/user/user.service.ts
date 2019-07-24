import { Injectable } from "@angular/core";
import { User } from "./user";
import { Interest } from './interest';

@Injectable({
    providedIn: "root"
})
export class UserService {
    interest = new Interest(1, "Soccer")
    private users = new Array<User>(
        {
            id: 1,
            name: "Ter Stegen",
            title: "Goalie",
            email: "Ter.Stegen@soccer.com",
            interests: [],
            meetings: []
        },
        {
            id: 3,
            name: "Piqué",
            title: "Defender",
            email: "Piqué@soccer.com",
            interests: [],
            meetings: []
        },
        {
            id: 4,
            name: "I. Rakitic",
            title: "Midfielder",
            email: "Ivan.Rakitic@soccer.com",
            interests: [],
            meetings: []
        },
        {
            id: 5,
            name: "Sergio",
            title: "Midfielder",
            email: "Sergio@soccer.com",
            interests: [this.interest],
            meetings: []
        },
        {
            id: 6,
            name: "Denis Suárez",
            title: "Midfielder",
            email: "Denis.Suárez@soccer.com",
            interests: [],
            meetings: []
        },
        {
            id: 7,
            name: "Arda",
            title: "Midfielder",
            email: "arda@soccer.com",
            interests: [],
            meetings: []
        },
        {
            id: 8,
            name: "A. Iniesta",
            title: "Midfielder",
            email: "iniesta@soccer.com",
            interests: [],
            meetings: []
        },
        {
            id: 9,
            name: "Suárez",
            title: "Forward",
            email: "suarez@soccer.com",
            interests: [],
            meetings: []
        },
        {
            id: 10,
            name: "Messi",
            title: "Forward",
            email: "messi@soccer.com",
            interests: [],
            meetings: []
        },
        {
            id: 11,
            name: "Neymar",
            title: "Forward",
            email: "neymar@soccer.com",
            interests: [],
            meetings: []
        },
        {
            id: 12,
            name: "Rafinha",
            title: "Midfielder",
            email: "rafina@soccer.com",
            interests: [],
            meetings: []
        },
        {
            id: 13,
            name: "Cillessen",
            title: "Goalkeeper",
            email: "cillessen@soccer.com",
            interests: [],
            meetings: []
        },
        {
            id: 14,
            name: "Mascherano",
            title: "Defender",
            email: "mascherano@soccer.com",
            interests: [],
            meetings: []
        },
        {
            id: 17,
            name: "Paco Alcácer",
            title: "Forward",
            email: "paco.alcacer@soccer.com",
            interests: [],
            meetings: []
        },
        {
            id: 18,
            name: "Jordi Alba",
            title: "Defender",
            email: "jordi.alba@soccer.com",
            interests: [],
            meetings: []
        },
        {
            id: 19,
            name: "Digne",
            title: "Defender",
            email: "digne",
            interests: [],
            meetings: []
        },
        {
            id: 20,
            name: "Sergi Roberto",
            title: "Midfielder",
            email: "sergi.roberto@soccer.com",
            interests: [],
            meetings: []
        },
        {
            id: 21,
            name: "André Gomes",
            title: "Midfielder",
            email: "andre.gomes@soccer.com",
            interests: [],
            meetings: []
        },
        {
            id: 22,
            name: "Aleix Vidal",
            title: "Midfielder",
            email: "aleix.vidal@soccer.com",
            interests: [],
            meetings: []
        },
        {
            id: 23,
            name: "Umtiti",
            title: "Defender",
            email: "umtiti@soccer.com",
            interests: [],
            meetings: []
        },
        {
            id: 24,
            name: "Mathieu",
            title: "Defender",
            email: "mathieu@soccer.com",
            interests: [],
            meetings: []
        },
        {
            id: 25,
            name: "Masip",
            title: "Goalkeeper",
            email: "masip@soccer.com",
            interests: [],
            meetings: []
        }
    );


getUsers(): Array<User> {
    return this.users;
}

    getUser(id: number): User {
        return this.users.filter(user => user.id === id)[0];
    }

    constructor() {}

    updateUserInterests(id, interests) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].id === id) {
                this.users[i].interests = interests;
            }
        }
    }

    updateUserMeetings(id, meetings) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].id === id) {
                this.users[i].meetings = meetings;
            }
        }
    }
}
