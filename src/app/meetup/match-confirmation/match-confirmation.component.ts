import { Component, OnInit } from '@angular/core';
import { Page } from "tns-core-modules/ui/page/page";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RouterExtensions } from "nativescript-angular/router";
import { TextField } from "tns-core-modules/ui/text-field";

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
    meetingDetails: 'the details',
    Date: '05/31/2019',
    Time: '3:50pm',
    Location: 'NYC',
    Comments: 'its a test'
  }

  private editMode: boolean;

  constructor() { }

  ngOnInit() {
    this.editMode = true;
  }

}
