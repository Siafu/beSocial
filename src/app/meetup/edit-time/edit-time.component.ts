import { Component, OnInit } from '@angular/core';
import { TimePicker } from "tns-core-modules/ui/time-picker";
import { RouterExtensions } from "nativescript-angular/router";
import { EditTimeService } from '../edit-time.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ns-edit-time',
  templateUrl: './edit-time.component.html',
  styleUrls: ['./edit-time.component.css'],
  moduleId: module.id,
})
export class EditTimeComponent implements OnInit {

    private time: string;

    constructor(
      private router: RouterExtensions,
      private editTimeService: EditTimeService) { }

    ngOnInit() {
    }

    onTimePickerLoaded(args) {
      let timePicker = <TimePicker>args.object;
      let currTime = this.editTimeService.getTime().toString();
      let hours = currTime.substring(currTime.indexOf(':'), currTime.indexOf(':')-2);
      let amPm = currTime.substring(currTime.indexOf(':')+3, currTime.indexOf(':')+5);
      let minutes = currTime.substring(currTime.indexOf(':')+1, currTime.indexOf(':')+3);

      if (hours.includes(':')) {
        hours = hours.replace(':', '');
      }

      if (amPm = 'PM') {
        let temp = parseInt(hours);
        hours = (temp + 12).toString();
      }

      timePicker.hour = parseInt(hours);
      timePicker.minute = parseInt(minutes);
  }

    onTimeChanged(args) {
      const changedTime = args.value;
      let temp = changedTime.toString();
      let hours = temp.substring(temp.indexOf(':'), temp.indexOf(':')-2);
      let minutes = temp.substring(temp.indexOf(':')+1, temp.indexOf(':')+3);
      let amPM = '';

      if(parseInt(hours) > 12) {
        hours = (parseInt(hours) - 12).toString();
        amPM = 'PM';
      }

      this.time = `${hours}:${minutes} ${amPM}`;
    }

    updateTimeService() {
      console.log(this.time);
      this.editTimeService.changeTime(this.time);
    }

    onSaveTap() {
      this.updateTimeService();
      this.router.navigate(['/meetup/confirm/:mode'], { clearHistory: true });
    }
}
