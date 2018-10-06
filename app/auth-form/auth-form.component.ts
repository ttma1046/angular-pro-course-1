import { 
  Component, 
  Output,
  ViewChild,
  ViewChildren,
  AfterViewInit,
  EventEmitter,
  ContentChild,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ChangeDetectorRef,
  ElementRef,
  Renderer } from '@angular/core';

import { AuthRememberComponent } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';
import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  styles: [`
    .email { border-color: #9f72e6; }
  `],
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel #email>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
        <ng-content select="auth-remember"></ng-content>
        <auth-message [style.display]="(showMessage ? 'inherit' : 'none')"></auth-message>
        <auth-message [style.display]="(showMessage ? 'inherit' : 'none')"></auth-message>
        <auth-message [style.display]="(showMessage ? 'inherit' : 'none')"></auth-message>
        <ng-content select="button"></ng-content>
      </form>
    </div>
  ` 
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  showMessage: boolean;

  @ViewChild('email') email: ElementRef;

  @ViewChildren(AuthMessageComponent) authMessageComponent: QueryList<AuthMessageComponent>
  
  @ContentChildren(AuthRememberComponent) authRememberComponent: QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(
    private cd: ChangeDetectorRef,
    private renderer: Renderer
    ) {}

  ngAfterViewInit(): void {
    this.renderer.setElementAttribute(this.email.nativeElement, 'placeholder', 'Enter your email address');
    this.renderer.setElementClass(this.email.nativeElement, 'email', true);
    this.renderer.invokeElementMethod(this.email.nativeElement, 'focus');
    console.log(this.email.nativeElement);
    // this.email.nativeElement.setAttribute('placeholder', 'Enter your email');
    // this.email.nativeElement.classList.add('email');
    // this.email.nativeElement.focus();

    if (this.authMessageComponent) {
      this.authMessageComponent.forEach((message) => {
        message.days = 30; 
      });

      this.cd.detectChanges();
    }
  }

  ngAfterContentInit() {
    // console.log(this.authRememberComponent);
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
 