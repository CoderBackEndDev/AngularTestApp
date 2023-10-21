import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {StatusInterceptor} from './status.interceptor';
import { ContactUsComponent } from './contact-us/contact-us.component'
@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: StatusInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
