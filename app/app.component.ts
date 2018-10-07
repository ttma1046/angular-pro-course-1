import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterContentInit, ComponentRef, ViewChildren, TemplateRef } from '@angular/core';
import { User } from './auth-form/auth-form.interface';
import { AuthFormComponent } from './auth-form/auth-form.component';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div #entry></div>
      <template #tmpl let-name let-location="location">
        {{ name }}  : {{ location }}
      </template>
    </div>
  `
})
export class AppComponent implements AfterContentInit {
  @ViewChild('entry', { read : ViewContainerRef }) entry: ViewContainerRef
  @ViewChild('tmpl') tmpl: TemplateRef<any>;

  ngAfterContentInit(): void {
    this.entry.createEmbeddedView(this.tmpl, {
      $implicit: 'Todd Motto',
      location: 'UK, England'
    });
  }
}
