import { Component, OnInit } from '@angular/core';
import * as utils from "tns-core-modules/utils/utils";
import { SegmentedBar, SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: 'ns-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  moduleId: module.id,
})
export class ProfileComponent implements OnInit {
    isEdit: Boolean;
    name: string;
    office: string;
    email: string;
    interests: Array<string>;
    selectedIndex: number;
    matchOptionsList: Array<string> = ["Show Notifications", "Disable Notifications"];
    matchOptions: Array<SegmentedBarItem>;

	constructor(private router: RouterExtensions) {
        this.matchOptions = [];
        for (let i = 0; i < this.matchOptionsList.length; i++) {
          const item = new SegmentedBarItem();
          item.title = this.matchOptionsList[i];
          this.matchOptions.push(item);
        }
	}

	ngOnInit() {
        this.isEdit = false;
        this.name = 'Dennis Nedry';
        this.office = 'New York, NY';
        this.email = 'Dennis.Nedry@jp.com';
        this.interests = ['Hacking', 'Computers', 'Dinosaur Embryos', 'Biosyn', 'Soda'];
        this.selectedIndex = 0;
	}

    onSelectedIndexChange(args) {
        let segmentedBar = <SegmentedBar>args.object;
        this.selectedIndex = segmentedBar.selectedIndex;
    }

	openUrl(url: string) {
		utils.openUrl(url);
    }

    onEditTap() {
        this.router.navigate(['/profile-edit'], { clearHistory: false });
    }
}
