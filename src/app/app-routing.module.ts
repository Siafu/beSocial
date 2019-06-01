import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { AuthComponent } from './auth/auth.component';
import { TabsComponent } from './tabs/tabs.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { InterestEditComponent } from "./profile-edit/interest-edit/interest-edit.component";
import { MatchConfirmationComponent } from "./meetup/match-confirmation/match-confirmation.component";
import { EditTimeComponent } from "./meetup/edit-time/edit-time.component";
import { EditDateComponent } from "./meetup/edit-date/edit-date.component";
import { UserComponent } from "./user/user.component";
import { UserDetailComponent } from "./user/user-detail.component";
import { MeetingsComponent } from "./meetings/meetings.component";

const routes: Routes = [
    { path: '', component: AuthComponent },
    { path: "user/:id", component: UserDetailComponent },
    { path: 'interest-edit', component: InterestEditComponent },
    { path: 'user/:id', component: UserDetailComponent },
    { path: 'edit-time', component: EditTimeComponent },
    { path: 'edit-date', component: EditDateComponent },
    { path: 'meetup/confirm/:mode', component: MatchConfirmationComponent },
    { path: 'tabs', component: TabsComponent, children:[
        { path: 'home', component: HomeComponent, outlet:'home' },
        { path: "user", component: UserComponent, outlet:'user' },
        { path: "meetings", component: MeetingsComponent, outlet: 'meetings' },
        { path: 'profile', component: ProfileComponent, outlet: 'profile'},
        { path: '', redirectTo: '/tabs', pathMatch: 'full' },
    ]}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
