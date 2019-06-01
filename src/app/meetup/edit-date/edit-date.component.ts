import { Component, OnInit } from '@angular/core';
import { DatePicker } from "tns-core-modules/ui/date-picker";
import { EditDateService } from '../edit-date.service';
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: 'ns-edit-date',
  templateUrl: './edit-date.component.html',
  styleUrls: ['./edit-date.component.css'],
  moduleId: module.id,
})
export class EditDateComponent implements OnInit {
    base: string = this.dateService.getDate();
    year: string = this.base.substring(this.base.length-4, this.base.length);
    month: string = this.base.substring(0, this.base.indexOf('/'));
    day: string = this.base.substring(this.base.indexOf('/')+1, this.base.lastIndexOf('/'));
    currYear: string;
    currMonth: string;
    currDay: string;
    currentDate: any;

    constructor(private dateService: EditDateService,
        private router: RouterExtensions) {
      this.currYear = this.dateService.getDate().substring(this.dateService.getDate().length-4, this.dateService.getDate().length);
      this.currMonth = this.dateService.getDate().substring(0, this.dateService.getDate().indexOf('/'));
      this.currDay = this.dateService.getDate().substring(this.dateService.getDate().indexOf('/')+1, this.dateService.getDate().lastIndexOf('/'));
      this.currentDate = {
        day: parseInt(this.currDay),
        month: parseInt(this.currMonth)-1,
        year: parseInt(this.currYear)
      };
     }

    ngOnInit() {
    }

    onPickerLoaded(args) {
      let datePicker = <DatePicker>args.object;

      datePicker.year = parseInt(this.year);
      datePicker.month = parseInt(this.month);
      datePicker.day = parseInt(this.day);
      datePicker.minDate = new Date(this.currentDate.year, this.currentDate.month,  this.currentDate.day);
      datePicker.maxDate = new Date(this.currentDate.year, this.currentDate.month+2,  31);
    }

    onDateChanged() {
        this.updateDateService();
    }

    onDayChanged(args) {
        this.day = args.value;
    }

    onMonthChanged(args) {
        this.month = args.value;
    }

    onYearChanged(args) {
        this.year = args.value;
    }

    updateDateService() {
      const date = this.month + '/' + this.day + '/' + this.year;
      this.dateService.changeDate(date);
    }

    onSaveTap() {
      this.onDateChanged();
      this.router.navigate(['/meetup/confirm/:mode'], { clearHistory: true });
    }
}

