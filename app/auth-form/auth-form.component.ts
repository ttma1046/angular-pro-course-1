import { Component, Output, ViewChild, AfterViewInit, EventEmitter, ContentChild, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

import { AuthRememberComponent } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';
import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
        <ng-content select="auth-remember"></ng-content>
        <auth-message [style.display]="(showMessage ? 'inherit' : 'none')"></auth-message>
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  showMessage: boolean;

  @ViewChild(AuthMessageComponent) authMessageComponent: AuthMessageComponent
  
  @ContentChildren(AuthRememberComponent) authRememberComponent: QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  ngAfterViewInit(): void {
    console.log(this.authMessageComponent);
  }

  ngAfterContentInit() {
    if (this.authMessageComponent) {
      this.authMessageComponent.days = 30;
    }
    console.log(this.authRememberComponent);
    // if (this.remeberComponent) {
    //   this.remeberComponent.checked.subscribe((checked: boolean) => {
    //     this.showMessage = checked;
    //   })
    // }
    if (this.authRememberComponent) {
      this.authRememberComponent.forEach((item) => {
        item.checked.subscribe((checked: boolean) => {
               this.showMessage = checked;
        })
      });
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
 