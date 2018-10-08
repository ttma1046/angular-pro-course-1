import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <div>
      <ul>
        <template myFor [myForOf]="items" let-item let-i="index">
          <li>
            {{ i }} Member: {{ item.name }}
          </li>
        </template>
      </ul>
    </div>
  `
})
export class AppComponent {
  user: any = {
    name: 'Mark Hoppus',
    age: 44,
    location: 'California'
  }

  items = [{
    name: 'Mark Hoppus',
    age: 44,
    location: 'California'
  },
  {
    name: 'Mark Hoppus',
    age: 44,
    location: 'California'
  }, {
    name: 'Mark Hoppus',
    age: 44,
    location: 'California'
  }
  ]

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

  constructor() {
    setTimeout(() => {
      // this.items.push({ name: 'Matt Skiba', age: 40, location: 'Cali'});
       this.items = [...this.items, { name: 'Matt Skiba', age: 40, location: 'Cali'} ];
    }, 2000);
  }
}
