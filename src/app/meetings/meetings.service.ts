import { Injectable } from '@angular/core';
import { Meeting } from './meeting';

@Injectable({
  providedIn: 'root'
})
export class MeetingsService {

    meetingOptionsList: Array<string>;
    userID: number;
    meetings: Array<Meeting>;


    setInitialMeetings(): void {
        this.meetings = [];
    }

    getMeetings(): Array<Meeting> {
        return this.meetings;
    }

    insertIntoMeeting(newMeeting): Array<string> {
        this.meetingOptionsList.push(newMeeting);
        return this.meetingOptionsList;
    }

    changeMeetings(meetings): void {
        this.meetings = meetings;
    }
}
