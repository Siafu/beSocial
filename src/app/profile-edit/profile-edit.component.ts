import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {
} from "tns-core-modules/ui/segmented-bar";
import { SegmentedBar, SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";
import { RouterExtensions, PageRoute } from "nativescript-angular/router";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { UiService } from "../shared/ui/ui.service";

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

    constructor(
        private router: RouterExtensions,
        private pageRoute: PageRoute,
        private modalDialog: ModalDialogService,
        private viewRef: ViewContainerRef,
        private uiService: UiService
    ) {
        this.matchOptions = [];
        for (let i = 0; i < this.matchOptionsList.length; i++) {
            const item = new SegmentedBarItem();
            item.title = this.matchOptionsList[i];
            this.matchOptions.push(item);
        }
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

  editInterests() {
    console.log('Edit Interests tapped');
    this.router.navigate(['/interest-edit'], { clearHistory: false });
  }

  editOffice() {
    console.log('Edit Office tapped');
    /*
    this.modalDialog.showModal(OfficeModalComponent, {
      fullscreen: true,
      viewContainerRef: this.uiService.getRootVCRef() ? this.uiService.getRootVCRef() : this.viewRef
    });
    */
  }

    onSaveTap() {
        this.router.navigate(["/tabs"], { clearHistory: true });
    }
}
