import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterContentInit, ComponentRef, ViewChildren, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div #entry></div>
      <ng-container [ngTemplateOutlet]="tmpl">
        <span>Test</span>
      </ng-container>
      <template #tmpl>
        Todd Motto: England, UK
      </template>
    </div>
  `
})
export class AppComponent {

}
