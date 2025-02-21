import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './landing-page/components/footer/footer.component';
import { AboutComponent } from './landing-page/components/about/about.component';
import { HomeComponent } from './landing-page/components/home/home.component';
import { ServicesComponent } from './landing-page/components/services/services.component';
import { ContactComponent } from './landing-page/components/contact/contact.component';
import { LawyersComponent } from './landing-page/components/lawyers/lawyers.component';
import { FeedbackComponent } from './landing-page/components/feedback/feedback.component';
import { SpecificationsComponent } from './landing-page/components/specifications/specifications.component';
import { SupportComponent } from './landing-page/components/support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent,
    LawyersComponent,
    FeedbackComponent,
    SpecificationsComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
