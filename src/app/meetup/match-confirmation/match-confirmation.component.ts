import { Component, OnInit } from '@angular/core';
import { DatePicker } from "tns-core-modules/ui/date-picker";
import { TimePicker } from "tns-core-modules/ui/time-picker";
import { Page } from "tns-core-modules/ui/page/page";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RouterExtensions, PageRoute } from "nativescript-angular/router";
import { TextField } from "tns-core-modules/ui/text-field";
import { ActivatedRoute, Params } from '@angular/router';
import { EditTimeService } from '../edit-time.service';
import { EditDateService } from '../edit-date.service';

@Component({
  selector: 'ns-match-confirmation',
  templateUrl: './match-confirmation.component.html',
  styleUrls: ['./match-confirmation.component.css'],
  moduleId: module.id,
})
export class MatchConfirmationComponent implements OnInit {
  meetingInfo = {
    matchedTo: {
      name: 'Luffy',
      profilePic: 'https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/monkey-d-luffy-one-piece-53.3.jpg'
    },
    meetingDetails: {
      Date: '05/31/2019',
      Time: '3:50pm',
      Location: 'NYC',
      Comments: 'its a test'
    }
  }

  private editMode: boolean;
  private isCreating: boolean;
  private time: string;
  private date: string;

  constructor(private route: ActivatedRoute, private pageRoute: PageRoute,
    private router: RouterExtensions, private editTimeService: EditTimeService,
    private editDateService: EditDateService) { }

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
    this.time = this.editTimeService.getTime();
    this.date = this.editDateService.getDate();
  }

  changeEditMode() {
    this.editMode = !this.editMode;
  }

  updateTime() {
    this.time = this.editTimeService.getTime();
  }

  updateDate() {
    this.date = this.editDateService.getDate();
  }

  onEditTimeTap() {
    this.router.navigate(['/edit-time'], { clearHistory: false });
  }

  onEditDateTap() {
    this.router.navigate(['/edit-date'], { clearHistory: false });
  }
}
