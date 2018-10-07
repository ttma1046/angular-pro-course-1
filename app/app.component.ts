import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterContentInit, ComponentRef, ViewChildren, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div #entry></div>
      <ng-container [ngTemplateOutlet]="tmpl" [ngTemplateOutletContext]="ctx">
        <span>Test</span>
      </ng-container>
      <template #tmpl let-name let-location="location">
        {{ name }} : {{ location }}
      </template>
    </div>
  `
})
export class AppComponent {
  ctx = {
    $implicit: 'Todd Motto',
    location: 'England, UK'
  }
}
