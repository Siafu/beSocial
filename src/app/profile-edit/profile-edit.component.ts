import { Component, OnInit } from "@angular/core";
import {
    SegmentedBar,
    SegmentedBarItem
} from "tns-core-modules/ui/segmented-bar";
import { RouterExtensions, PageRoute } from "nativescript-angular/router";

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
        private pageRoute: PageRoute
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
        console.log("Edit Interests tapped");
    }

    editOffice() {
        console.log("Edit Office tapped");
    }

    onSaveTap() {
        this.router.navigate(["/tabs"], { clearHistory: true });
    }
}
