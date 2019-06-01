import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { InterestOption } from '../interest-list-option';
import { Interest } from '../../user/interest';
import { UserService } from '../../user/user.service';
import { InterestEditService } from '../interest-edit.service';

@Component({
  selector: 'ns-interest-edit',
  templateUrl: './interest-edit.component.html',
  styleUrls: ['./interest-edit.component.css'],
  moduleId: module.id,
})
export class InterestEditComponent implements OnInit {
    interestOptions: Array<InterestOption>;
    interestOptionsList: Array<string>;
    newInterests: Array<Interest>;

    constructor(private router: RouterExtensions, private userService: UserService,
        private interestEditService: InterestEditService) {

    }

    ngOnInit() {
        this.interestOptions = [];
        this.interestOptionsList = this.interestEditService.getInterestOptionsList();
        this.newInterests = [];
        for (let i = 0; i < this.interestOptionsList.length; i++) {
          this.interestOptions.push(new InterestOption(this.interestOptionsList[i], false));
        }
    }

    onItemTap(args) {
        console.log("Item Tapped at cell index: " + args.index);
        this.interestOptions[args.index].isSelected = !this.interestOptions[args.index].isSelected;
    }

    addInterest() {
        console.log('Add interest clicked');
    }

    onSaveTap() {
      console.log('Save clicked');

      for(let i=0; i < this.interestOptions.length; i++) {
        if (this.interestOptions[i].isSelected) {
            let newInterest = new Interest(1, this.interestOptions[i].name);
            console.log(JSON.stringify(newInterest));
            this.newInterests.push(newInterest);
        }
      }

      this.userService.updateUserInterests(this.interestEditService.getUserID(),
        this.newInterests);
      this.router.navigate(['profile/:edit'], { clearHistory: true });
    }
}
