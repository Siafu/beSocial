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

const routes: Routes = [
    { path: '', component: AuthComponent },
    { path: 'interest-edit', component: InterestEditComponent },
    { path: 'profile/:mode', component: ProfileEditComponent },
    { path: 'edit-time', component: EditTimeComponent },
    { path: 'meetup/confirm/:mode', component: MatchConfirmationComponent },
    { path: 'tabs', component: TabsComponent, children:[
        { path: 'home', component: HomeComponent, outlet:'home' },
        { path: 'profile', component: ProfileComponent, outlet: 'profile'},
        { path: '', redirectTo: '/tabs', pathMatch: 'full' },
    ]}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
