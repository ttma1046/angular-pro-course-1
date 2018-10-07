import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterContentInit, ComponentRef, ViewChildren, TemplateRef } from '@angular/core';
import { User } from './auth-form/auth-form.interface';
import { AuthFormComponent } from './auth-form/auth-form.component';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <button (click)="destoryComponent()">
        Destory
      </button>
      <button (click)="moveComponent()">
        Move
      </button>
      <div #entry></div>
      <ng-template #tmpl>
        Tott Motto: England UK
      </ng-template>
    </div>
  `
})
export class AppComponent implements AfterContentInit {
  @ViewChild('entry', { read : ViewContainerRef }) entry: ViewContainerRef
  @ViewChild('tmpl') tmpl: TemplateRef<any>;

  authComponent: ComponentRef<AuthFormComponent>;
  
  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngAfterContentInit(): void {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    this.entry.createComponent(authFormFactory);
    this.authComponent = this.entry.createComponent(authFormFactory, 0);
    this.authComponent.instance.title = 'Create account';
    this.authComponent.instance.submitted.subscribe(this.loginUser);

    this.entry.createEmbeddedView(this.tmpl);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

  destoryComponent() {
    this.authComponent.destroy();
  }

  moveComponent() {
    this.entry.move(this.authComponent.hostView, 1)
  }
}