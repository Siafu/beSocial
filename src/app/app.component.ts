import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild,
    AfterViewInit,
    ChangeDetectorRef
} from "@angular/core";
import { UiService } from "./shared/ui/ui.service";
import { Subscription } from "rxjs";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { ViewContainerRef } from '@angular/core';
import { EditTimeService } from './meetup/edit-time.service';
import { EditDateService } from './meetup/edit-date.service';
import { CardView } from 'nativescript-cardview';
import { registerElement } from 'nativescript-angular';
import { UserService } from './user/user.service';
import { InterestEditService } from './profile-edit/interest-edit.service';
import { AuthService } from './auth/auth.service';
import { MeetingsService } from './meetings/meetings.service';

registerElement('CardView', () => CardView as any);


@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild(RadSideDrawerComponent) drawerComponent: RadSideDrawerComponent;
    private drawerSub: Subscription;
    private drawer: RadSideDrawer;
    constructor(
        private uiService: UiService,
        private changeDetectionRef: ChangeDetectorRef,
        private vcRef: ViewContainerRef,
        private editTimeService: EditTimeService,
        private editDateService: EditDateService,
        private userService: UserService,
        private interestEditService: InterestEditService,
        private authService: AuthService,
        private meetingsService: MeetingsService
    ) {}

    ngOnInit() {
        this.drawerSub = this.uiService.drawerState.subscribe(() => {
            if (this.drawer) {
                this.drawer.toggleDrawerState();
            }
        });
        this.uiService.setRootVCRef(this.vcRef);
        this.editTimeService.setInitialTime();
        this.editDateService.setInitialDate();
        this.interestEditService.setInitialInterestOptionsList();
        this.interestEditService.setInitialInterests();
        this.meetingsService.setInitialMeetings();
    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this.changeDetectionRef.detectChanges();
    }

    onLogout() {
        this.uiService.toggleDrawer();
    }

    ngOnDestroy() {
        if (this.drawerSub) {
            this.drawerSub.unsubscribe();
        }
    }
}
