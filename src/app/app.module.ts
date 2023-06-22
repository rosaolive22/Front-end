import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ComponentsComponent } from './components/components.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeadComponent } from './components/head/head.component';
import { Body2Component } from './components/body2/body2.component';
import { Body3Component } from './components/body3/body3.component';
import { Body4Component } from './components/body4/body4.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComponentsComponent,
    BodyComponent,
    FooterComponent,
    HeadComponent,
    Body2Component,
    Body3Component,
    Body4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
