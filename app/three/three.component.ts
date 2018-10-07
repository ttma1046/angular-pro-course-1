import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'example-three',
    encapsulation: ViewEncapsulation.None,
    styles: [
        `
        .example-one {
            border: 2px solid green;
        }
        `
    ],
    template: `
        <div class="example-one">
            Example One
        </div>
        <div class="example-two">
            Example Two
        </div>
        <div class="example-three">
            Example Three
        </div>
    `
})
export class ExampleThreeComponent {
    constructor() { }
}