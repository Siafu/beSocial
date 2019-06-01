import { Injectable } from '@angular/core';
import { Interest } from '../user/interest';

@Injectable({
  providedIn: 'root'
})
export class InterestEditService {
    interestOptionsList: Array<string>;
    userID: number;
    interests: Array<Interest>;

    setInitialInterestOptionsList(): void {
        this.interestOptionsList = ["Games", "Sports", "Books", "TV", "Dinosaur Embryos",
            "Movies", "Hacking", "Computers", "Kung Fury", "Triceracop"];
    }

    setInitialInterests(): void {
        this.interests = [];
    }

    getInterestOptionsList(): Array<string> {
        return this.interestOptionsList;
    }

    getInterests(): Array<Interest> {
        return this.interests;
    }

    insertIntoInterestOptionsList(newInterest): Array<string> {
        this.interestOptionsList.push(newInterest);
        return this.interestOptionsList;
    }

    changeInterests(interests): void {
        this.interests = interests;
    }
}
