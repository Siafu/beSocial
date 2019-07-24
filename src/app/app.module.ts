import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthComponent } from './auth/auth.component';
import { ActionBarComponent } from './shared/ui/action-bar/action-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { TabsComponent } from './tabs/tabs.component';
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { InterestEditComponent } from './profile-edit/interest-edit/interest-edit.component';
import { MatchConfirmationComponent } from './meetup/match-confirmation/match-confirmation.component';
import { EditTimeComponent } from './meetup/edit-time/edit-time.component';
import { EditDateComponent } from './meetup/edit-date/edit-date.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail.component';
import { MeetingsComponent } from './meetings/meetings.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        ReactiveFormsModule,
        FormsModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent,
        AuthComponent,
        ActionBarComponent,
        ProfileComponent,
        HomeComponent,
        TabsComponent,
        ProfileEditComponent,
        InterestEditComponent,
        MatchConfirmationComponent,
        EditTimeComponent,
        EditDateComponent,
        UserComponent,
        UserDetailComponent,
        MeetingsComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
