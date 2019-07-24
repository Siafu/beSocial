import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditDateService {

    private date: string;

    setInitialDate(): void {
        this.date = this.getCurrentDate();
        console.log(this.date);
    }

    getDate(): string {
        return this.date;
    }

    changeDate(date): string {
        this.date = date;
        return this.date;
    }

    getCurrentDate(): string {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1;
        let yyyy = today.getFullYear();
        let current: string;

        current = mm + '/' + dd + '/' + yyyy;
        return current;
    }
}
