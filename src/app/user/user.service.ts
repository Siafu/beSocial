import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = new Array<User>(
    { id: 1, name: "Ter Stegen", title: "Goalkeeper", interests:[] },
    { id: 3, name: "Piqué", title: "Defender", interests:[] },
    { id: 4, name: "I. Rakitic", title: "Midfielder", interests:[] },
    { id: 5, name: "Sergio", title: "Midfielder", interests:[] },
    { id: 6, name: "Denis Suárez", title: "Midfielder", interests:[] },
    { id: 7, name: "Arda", title: "Midfielder", interests:[] },
    { id: 8, name: "A. Iniesta", title: "Midfielder", interests:[] },
    { id: 9, name: "Suárez", title: "Forward", interests:[] },
    { id: 10, name: "Messi", title: "Forward", interests:[] },
    { id: 11, name: "Neymar", title: "Forward", interests:[] },
    { id: 12, name: "Rafinha", title: "Midfielder", interests:[] },
    { id: 13, name: "Cillessen", title: "Goalkeeper", interests:[] },
    { id: 14, name: "Mascherano", title: "Defender", interests:[] },
    { id: 17, name: "Paco Alcácer", title: "Forward", interests:[] },
    { id: 18, name: "Jordi Alba", title: "Defender", interests:[] },
    { id: 19, name: "Digne", title: "Defender", interests:[] },
    { id: 20, name: "Sergi Roberto", title: "Midfielder", interests:[] },
    { id: 21, name: "André Gomes", title: "Midfielder", interests:[] },
    { id: 22, name: "Aleix Vidal", title: "Midfielder", interests:[] },
    { id: 23, name: "Umtiti", title: "Defender", interests:[] },
    { id: 24, name: "Mathieu", title: "Defender", interests:[] },
    { id: 25, name: "Masip", title: "Goalkeeper", interests:[] }
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
