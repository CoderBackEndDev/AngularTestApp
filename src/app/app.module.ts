import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {StatusInterceptor} from './status.interceptor';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component'
@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    FeedbackComponent,
    HomeComponent,
    ProjectsComponent
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
