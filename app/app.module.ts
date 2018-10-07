import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthFormModule } from './auth-form/auth-form.module';

import { AppComponent } from './app.component';
import { ExampleOneComponent } from "./one/one.component";
import { ExampleTwoComponent } from "./two/two.component";
import { ExampleThreeComponent } from "./three/three.component";
@NgModule({
  declarations: [
    AppComponent,
    ExampleOneComponent,
    ExampleTwoComponent,
    ExampleThreeComponent
  ],
  imports: [
    BrowserModule,
    AuthFormModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
