import { Component, OnInit } from '@angular/core';
import { SegmentedBar, SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";
import { Meeting } from './meeting';
import { UserService } from '../user/user.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'ns-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css'],
  moduleId: module.id,
})
export class MeetingsComponent implements OnInit {
    selectedIndex: number;
    meetingOptionsList: Array<string> = ["Upcoming Meetings", "Past Meetings"];
    meetingOptions: Array<SegmentedBarItem>;
    meetings: Array<Meeting>;

  constructor(private userService: UserService, private authService: AuthService) {
    this.meetingOptions = [];
    for (let i = 0; i < this.meetingOptionsList.length; i++) {
      const item = new SegmentedBarItem();
      item.title = this.meetingOptionsList[i];
      this.meetingOptions.push(item);
    }
  }

  ngOnInit() {
    this.selectedIndex = 0;
    this.meetings = this.userService.getUser(this.authService.getUserID()).meetings;
    console.log(`Component: ${this.meetings}`);
  }

  onSelectedIndexChange(args) {
    let segmentedBar = <SegmentedBar>args.object;
    this.selectedIndex = segmentedBar.selectedIndex;
  }
}
