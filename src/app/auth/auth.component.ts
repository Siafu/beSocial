import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Page } from "tns-core-modules/ui/page/page";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RouterExtensions } from "nativescript-angular/router";
import { TextField } from "tns-core-modules/ui/text-field";

@Component({
  selector: 'ns-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  moduleId: module.id,
})
export class AuthComponent implements OnInit {
    form: FormGroup;
    emailControlIsValid = true;
    passwordControlIsValid = true;
    @ViewChild('passwordEl') passwordEl: ElementRef<TextField>;
    @ViewChild('emailEl') emailEl: ElementRef<TextField>;

    constructor(
      private page: Page,
      private router: RouterExtensions) {
      this.page.actionBarHidden = true;
    }

    ngOnInit() {
      this.form = new FormGroup({
        email: new FormControl(null, { updateOn: 'blur',
          validators: [Validators.required, Validators.email] }),
        password: new FormControl(null, { updateOn: 'blur',
          validators: [Validators.required, Validators.minLength(6)] })
      });


      this.form.get('email').statusChanges.subscribe(status => {
        this.emailControlIsValid = status === 'VALID'
      });

      this.form.get('password').statusChanges.subscribe(status => {
        this.passwordControlIsValid = status === 'VALID'
      });
    }

    submit() {
      this.emailEl.nativeElement.focus();
      this.passwordEl.nativeElement.focus();
      this.passwordEl.nativeElement.dismissSoftInput();

      if (!this.form.valid) {
        return;
      }

      const email = this.form.get('email').value;
      const password = this.form.get('password').value;

      this.form.reset();
      this.emailControlIsValid = true;
      this.passwordControlIsValid = true;

      this.login();
    }

    login() {
      this.router.navigate(['/tabs'], { clearHistory: true });
    }

    alert(message: string) {

    }

    toggleForgotPassword() {
      console.log('forgot password');
    }

    focusPassword() {
      this.passwordEl.nativeElement.focus();
    }
}
