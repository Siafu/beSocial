import { Injectable } from '@angular/core';
import { Meeting } from './meeting';
import { UserService } from '../user/user.service';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MeetingsService {

    meetingOptionsList: Array<string>;
    userID: number;
    meetings: Array<Meeting>;

    constructor(private userService: UserService, private authService: AuthService) {

    }

    setInitialMeetings(): void {
        this.meetings = [];
    }

    getMeetings(): Array<Meeting> {
        return this.meetings;
    }

    insertIntoMeeting(newMeeting): Array<Meeting> {
        this.meetings.push(newMeeting);
        this.userService.updateUserMeetings(this.authService.getUserID(), this.meetings);
        return this.meetings;
    }

    changeMeetings(meetings): void {
        this.meetings = meetings;
    }
}
