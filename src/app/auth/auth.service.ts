import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    userID: number;

    setInitialUserID(): void {
        this.userID = Math.floor(Math.random() * 25) + 1;
    }

    getUserID(): number {
        return this.userID;
    }
}
