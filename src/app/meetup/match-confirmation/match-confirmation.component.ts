import { Component, OnInit } from '@angular/core';
import { DatePicker } from "tns-core-modules/ui/date-picker";
import { TimePicker } from "tns-core-modules/ui/time-picker";
import { Page } from "tns-core-modules/ui/page/page";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RouterExtensions, PageRoute } from "nativescript-angular/router";
import { TextField } from "tns-core-modules/ui/text-field";
import { SegmentedBar, SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";
import { ActivatedRoute, Params } from '@angular/router';
import { EditTimeService } from '../edit-time.service';
import { EditDateService } from '../edit-date.service';
import { NgIf } from '@angular/common';
import { MeetingsService } from '../../meetings/meetings.service';
import { Meeting } from '~/app/meetings/meeting';

@Component({
  selector: 'ns-match-confirmation',
  templateUrl: './match-confirmation.component.html',
  styleUrls: ['./match-confirmation.component.css'],
  moduleId: module.id,
})
export class MatchConfirmationComponent implements OnInit {
  meetingInfo = {
    matchedTo: {
      name: 'Current meetup location:',
      mapPic: "~/images/map.png"
    },
    meetingDetails: {
      Date: '',
      Time: '',
      Location: 'NYC',
      Comments: 'its a test'
    }
  }

  private name: string;
  private editMode: boolean;
  private isCreating: boolean;
  private time: string;
  private date: string;
  private confirmOptionsList: Array<string> = ["Confirm Meeting", "Postpone Meeting"];
  private confirmOptions: Array<SegmentedBarItem>;
  private selectedIndex: number;

  constructor(private route: ActivatedRoute, private pageRoute: PageRoute,
    private router: RouterExtensions, private editTimeService: EditTimeService,
    private editDateService: EditDateService,
    private meetingService: MeetingsService) {
        this.confirmOptions = [];
        for (let i = 0; i < this.confirmOptionsList.length; i++) {
          const item = new SegmentedBarItem();
          item.title = this.confirmOptionsList[i];
          this.confirmOptions.push(item);
        }
    }

  ngOnInit() {
    this.pageRoute.activatedRoute.subscribe(
      activatedRoute => {
        activatedRoute.paramMap.subscribe(paramMap => {
          if(!paramMap.has('mode')) {

          } else {
            this.editMode = paramMap.get('mode') !== 'display';
          }
        })
      }
    );
    this.updateDate();
    this.updateTime();
    this.name = "FIX THIS";
    this.time = this.editTimeService.getTime();
    this.date = this.editDateService.getDate();
    this.selectedIndex = 0;
  }

  changeEditMode() {
    this.editMode = !this.editMode;
  }

  updateTime() {
    this.time = this.editTimeService.getTime();
    this.meetingInfo.meetingDetails.Time = this.editTimeService.getTime();
  }

  updateDate() {
    this.date = this.editDateService.getDate();
    this.meetingInfo.meetingDetails.Date = this.editDateService.getDate();
  }

  onEditTimeTap() {
    this.router.navigate(['/edit-time'], { clearHistory: false });
  }

  onEditDateTap() {
    this.router.navigate(['/edit-date'], { clearHistory: false });
  }

  onSelectedIndexChange(args) {
    let segmentedBar = <SegmentedBar>args.object;
    this.selectedIndex = segmentedBar.selectedIndex;
  }

  onSubmitBtn() {
    let meeting = new Meeting(this.name, this.date, this.time);
    this.meetingService.insertIntoMeeting(meeting);
  }
}
