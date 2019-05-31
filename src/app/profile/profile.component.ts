import { Component, OnInit } from '@angular/core';
import * as utils from "tns-core-modules/utils/utils";



@Component({
  selector: 'ns-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  moduleId: module.id,
})
export class ProfileComponent implements OnInit {

	constructor() {

	}

	ngOnInit() {
	}

	openUrl(url: string) {
		utils.openUrl(url);
    }
}
