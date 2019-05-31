import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { AuthComponent } from './auth/auth/auth.component';
import { TabsComponent } from './tabs/tabs.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    { path: '', component: AuthComponent },
    { path: 'tabs', component: TabsComponent, children:[
        { path: 'home', component: HomeComponent, outlet:'home' },
        { path: 'profile', component: ProfileComponent, outlet: 'profile'},
        { path: '', redirectTo: '/tabs', pathMatch: 'full' }
    ]}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
