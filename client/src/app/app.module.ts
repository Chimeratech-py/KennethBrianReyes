import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './_components/nav/nav.component';
import { IntroductionComponent } from './_components/introduction/introduction.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { ContactComponent } from './_components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IntroductionComponent,
    ProfileComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
