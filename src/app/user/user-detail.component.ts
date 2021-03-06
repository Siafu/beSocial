import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular';

@Component({
    selector: "ns-user-detail",
    templateUrl: "./user-detail.component.html",
    styleUrls: ["./user-detail.component.css"],
    moduleId: module.id
})
export class UserDetailComponent implements OnInit {
    user: User;

    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
        private router: RouterExtensions
    ) {}

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.user = this.userService.getUser(id);
    }
    onSubmit() {
         this.router.navigate(["/meetup/confirm"]);
    }
}
