import { Component, OnInit, Input } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { UiService } from "../ui.service";
import { RouterExtensions } from "nativescript-angular/router";
import { isAndroid } from "tns-core-modules/platform";
declare var android: any;
@Component({
    selector: "ns-action-bar",
    templateUrl: "./action-bar.component.html",
    styleUrls: ["./action-bar.component.css"],
    moduleId: module.id
})
export class ActionBarComponent implements OnInit {
    constructor(
        private page: Page,
        private uiservice: UiService,
        private router: RouterExtensions
    ) {}

    @Input() title: string;
    @Input() hasMenu: string;

    get android() {
        return isAndroid;
    }

    onGoBack() {
        this.router.backToPreviousPage();
    }

    onLoadedActionBar() {
        if (isAndroid) {
            const andrioidToolbar = this.page.actionBar.nativeView;
            const backButton = andrioidToolbar.getNavigationIcon();

            if (backButton) {
                backButton.setColorFilter(
                    android.graphics.Color.parseColor("#171717"),
                    (<any>android.graphics).PorterDuff.Mode.SRC_ATOP
                );
            }
        }
    }
    onToggleMenu() {
        this.uiservice.toggleDrawer();
    }

    ngOnInit() {}
}
