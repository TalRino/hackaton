import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormEggComponent } from './form-egg/form-egg.component';
import { IndexComponent } from './index/index.component';
import { FormcharacterComponent } from './formcharacter/formcharacter.component';

@NgModule({
  declarations: [
    AppComponent,
    FormEggComponent,
    IndexComponent,
    FormcharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
