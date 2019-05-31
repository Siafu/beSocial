import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';

@Component({
  selector: 'ns-interest-modal',
  templateUrl: './interest-modal.component.html',
  styleUrls: ['./interest-modal.component.css'],
  moduleId: module.id,
})
export class InterestModalComponent implements OnInit {

    loadedDate: Date;
    constructor(private modalParams: ModalDialogParams) {}

    ngOnInit() {
        this.loadedDate = (this.modalParams.context as { date: Date }).date;
    }

    onHandleInput(action: string) {
        this.modalParams.closeCallback(action);
    }
}
