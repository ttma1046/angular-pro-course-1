import { Component } from '@angular/core';

@Component({
    selector: 'credit-card',
    template: `
    <div>
        <label>
            Credit Card Number
            <input
                name="credit-card"
                type="text"
                placeholder="Enter your 16-digit card number" credit-card-directive>
        </label>
    </div>    
    `
})
export class CreditCardComponent {

}