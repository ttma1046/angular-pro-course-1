import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <div>
      <button (click)="addProp()">Add property</button>
      <button (click)="changeUser()">Change user object</button>
      <button (click)="changeName()">Change name property</button>
      <div class="users">
        <example-one [user]="user"></example-one>
        <example-two [user]="user"></example-two>
      </div>
    </div>
    <credit-card></credit-card>
    <label
      tooltip="3 digits, back of your card"
      #myTooltip="tooltip">
      Enter your security code
      <span
        (mouseover)="myTooltip.show()"
        (mouseout)="myTooltip.hide()"  
        >
      (?)
      </span>
      <input type="text">
    </label>
  `
})
export class AppComponent {
  user: any = {
    name: 'Mark Hoppus',
    age: 44,
    location: 'California'
  }

  addProp() {
    this.user.email = 'blink@blink-182.net';
  }

  changeName() {
    this.user.name = 'Travos Barker';
  }

  changeUser() {
    this.user = {
      name: 'Tom Delonge',
      age: 41,
      location: 'California'
    }
  }
}
