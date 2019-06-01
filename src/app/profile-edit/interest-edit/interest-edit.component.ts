import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

class Interest {
    name: string;
    isSelected: boolean;

    constructor(name: string, isSelected: boolean) {
        this.name = name;
        this.isSelected = isSelected;
    }
}

@Component({
  selector: 'ns-interest-edit',
  templateUrl: './interest-edit.component.html',
  styleUrls: ['./interest-edit.component.css'],
  moduleId: module.id,
})
export class InterestEditComponent implements OnInit {
    interestOptions: Array<Interest>;
    interestOptionsList = ["Games", "Sports", "Books", "TV", "Dinosaur Embryos",
    "Movies", "Hacking", "Computers", "Kung Fury", "Triceracop"];

    constructor(private router: RouterExtensions) {

    }

    ngOnInit() {
        this.interestOptions = [];

        for (let i = 0; i < this.interestOptionsList.length; i++) {
          this.interestOptions.push(new Interest(this.interestOptionsList[i], false));
        }
    }

    onItemTap(args) {
        console.log("Item Tapped at cell index: " + args.index);
        this.interestOptions[args.index].isSelected = !this.interestOptions[args.index].isSelected;
    }

    addInterest() {

    }
    onSaveTap() {
      console.log('Save clicked');
    }
}
