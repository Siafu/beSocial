import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';
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
  selector: 'ns-interest-modal',
  templateUrl: './interest-modal.component.html',
  styleUrls: ['./interest-modal.component.css'],
  moduleId: module.id,
})
export class InterestModalComponent implements OnInit {
    interestOptions: Array<Interest>;
    interestOptionsList = ["Games", "Sports", "Books", "TV", "Dinosaur Embryos",
    "Movies", "Hacking", "Computers", "Kung Fury", "Triceracop"];

    constructor(private modalParams: ModalDialogParams,
        private router: RouterExtensions) {

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

    onDoneTap() {
        this.modalParams.closeCallback("return value");
    }

    addInterest() {

    }
}
