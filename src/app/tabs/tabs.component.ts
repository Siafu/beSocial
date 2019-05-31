import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page';

@Component({
  selector: 'ns-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  moduleId: module.id,
})
export class TabsComponent implements OnInit {

  constructor(
      private router: RouterExtensions,
      private active: ActivatedRoute,
      private page: Page
  ) { }

  ngOnInit() {
      this.router.navigate(
          [ { outlets: {
              home: ["home"],
              profile: ["profile"],
          } }],
          {relativeTo: this.active}

      );
      this.page.actionBarHidden = true
  }
}
