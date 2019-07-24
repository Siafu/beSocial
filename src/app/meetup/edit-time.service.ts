import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditTimeService {

  constructor() { }

  private time: string;

  setInitialTime(): void {
    this.time = this.getCurrentTime();
  }

  getTime(): string {
    return this.time;
  }

  changeTime(time): string {
    this.time = time;
    return this.time;
  }

  getCurrentTime() {
    let today = new Date();
    let temp = today.toString();

    let hours = temp.substring(temp.indexOf(':'), temp.indexOf(':')-2);
    let minutes = temp.substring(temp.indexOf(':')+1, temp.indexOf(':')+3);
    let amPm = '';
    if(parseInt(hours) > 12) {
      let temp = parseInt(hours);
      hours = (temp - 12).toString();
      amPm = 'PM'
    } else {
      amPm = 'AM'
    }

    this.time = `${hours}:${minutes} ${amPm}`;
    return this.time;
  }
}
