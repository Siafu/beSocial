<<<<<<< HEAD
import { Component, OnInit } from "@angular/core";
import {
    SegmentedBar,
    SegmentedBarItem
} from "tns-core-modules/ui/segmented-bar";
import { RouterExtensions, PageRoute } from "nativescript-angular/router";
=======
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { SegmentedBar, SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";
import { RouterExtensions } from "nativescript-angular/router";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { InterestModalComponent } from "../profile-edit/interest-modal/interest-modal.component";
import { UiService } from "../shared/ui/ui.service";
>>>>>>> 577c073ab24dfae447ca0caa880900a2af3c75a1

@Component({
    selector: "ns-profile-edit",
    templateUrl: "./profile-edit.component.html",
    styleUrls: ["./profile-edit.component.css"],
    moduleId: module.id
})
export class ProfileEditComponent implements OnInit {
    isCreating = false;
    name: string;
    office: string;
    email: string;
    interests: Array<string>;
    selectedIndex: number;
    matchOptionsList: Array<string> = [
        "Show Notifications",
        "Disable Notifications"
    ];
    matchOptions: Array<SegmentedBarItem>;

<<<<<<< HEAD
    constructor(
        private router: RouterExtensions,
        private pageRoute: PageRoute
    ) {
        this.matchOptions = [];
        for (let i = 0; i < this.matchOptionsList.length; i++) {
            const item = new SegmentedBarItem();
            item.title = this.matchOptionsList[i];
            this.matchOptions.push(item);
        }
=======
  constructor(
    private router: RouterExtensions,
    private modalDialog: ModalDialogService,
    private uiService: UiService,
    private viewRef: ViewContainerRef) {
    this.matchOptions = [];
    for (let i = 0; i < this.matchOptionsList.length; i++) {
      const item = new SegmentedBarItem();
      item.title = this.matchOptionsList[i];
      this.matchOptions.push(item);
>>>>>>> 577c073ab24dfae447ca0caa880900a2af3c75a1
    }

    ngOnInit() {
        this.selectedIndex = 0;
        this.pageRoute.activatedRoute.subscribe(activatedRoute => {
            activatedRoute.paramMap.subscribe(paramMap => {
                console.log(paramMap.get("mode"));
                if (!paramMap.has("mode")) {
                } else {
                    this.isCreating = paramMap.get("mode") !== "edit";
                }
            });
        });
    }

    onSelectedIndexChange(args) {
        let segmentedBar = <SegmentedBar>args.object;
        this.selectedIndex = segmentedBar.selectedIndex;
    }

<<<<<<< HEAD
    editInterests() {
        console.log("Edit Interests tapped");
    }

    editOffice() {
        console.log("Edit Office tapped");
    }
=======
  editInterests() {
    console.log('Edit Interests tapped');

  }

  editOffice() {
    console.log('Edit Office tapped');
    this.modalDialog.showModal(InterestModalComponent, {
      fullscreen: true,
      viewContainerRef: this.uiService.getRootVCRef() ? this.uiService.getRootVCRef() : this.viewRef
    });
  }
>>>>>>> 577c073ab24dfae447ca0caa880900a2af3c75a1

    onSaveTap() {
        this.router.navigate(["/tabs"], { clearHistory: true });
    }
}
