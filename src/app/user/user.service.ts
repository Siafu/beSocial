import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = new Array<User>(
    { id: 1, name: "Ter Stegen", title: "Ter.Stegen", email: "Ter.Stegen@soccer.com", interests:[] },
    { id: 3, name: "Piqué", title: "Defender", email: "Piqué@soccer.com", interests:[] },
    { id: 4, name: "I. Rakitic", title: "Midfielder", email: "Ivan.Rakitic@soccer.com", interests:[] },
    { id: 5, name: "Sergio", title: "Midfielder", email: "Sergio@soccer.com", interests:[] },
    { id: 6, name: "Denis Suárez", title: "Midfielder", email: "Denis.Suárez@soccer.com", interests:[] },
    { id: 7, name: "Arda", title: "Midfielder", email: "arda@soccer.com", interests:[] },
    { id: 8, name: "A. Iniesta", title: "Midfielder", email: "iniesta@soccer.com", interests:[] },
    { id: 9, name: "Suárez", title: "Forward", email: "suarez@soccer.com", interests:[] },
    { id: 10, name: "Messi", title: "Forward", email: "messi@soccer.com", interests:[] },
    { id: 11, name: "Neymar", title: "Forward", email: "neymar@soccer.com", interests:[] },
    { id: 12, name: "Rafinha", title: "Midfielder", email: "rafina@soccer.com", interests:[] },
    { id: 13, name: "Cillessen", title: "Goalkeeper", email: "cillessen@soccer.com", interests:[] },
    { id: 14, name: "Mascherano", title: "Defender", email: "mascherano@soccer.com", interests:[] },
    { id: 17, name: "Paco Alcácer", title: "Forward", email: "paco.alcacer@soccer.com", interests:[] },
    { id: 18, name: "Jordi Alba", title: "Defender", email: "jordi.alba@soccer.com", interests:[] },
    { id: 19, name: "Digne", title: "Defender", email: "digne", interests:[] },
    { id: 20, name: "Sergi Roberto", title: "Midfielder", email: "sergi.roberto@soccer.com", interests:[] },
    { id: 21, name: "André Gomes", title: "Midfielder", email: "andre.gomes@soccer.com", interests:[] },
    { id: 22, name: "Aleix Vidal", title: "Midfielder", email: "aleix.vidal@soccer.com", interests:[] },
    { id: 23, name: "Umtiti", title: "Defender", email: "umtiti@soccer.com", interests:[] },
    { id: 24, name: "Mathieu", title: "Defender", email: "mathieu@soccer.com", interests:[] },
    { id: 25, name: "Masip", title: "Goalkeeper", email: "masip@soccer.com", interests:[] }
);

getUsers(): Array<User> {
    return this.users;
}

getUser(id: number): User {
    return this.users.filter((user) => user.id === id)[0];
}

  constructor() { }

  updateUserInterests(id, interests) {
    for(let i = 0; i < this.users.length; i++) {
        if(this.users[i].id === id) {
            this.users[i].interests = interests;
        }
    }
}
}
