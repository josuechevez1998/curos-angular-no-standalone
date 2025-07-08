import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SectionComponent } from './section-component/section-component';
import { ProfileComponent } from './section-component/profile-component/profile-component';
import { ListExperiencesComponent } from './section-component/list-experiences-component/list-experiences-component';
import { ListTechnologiesComponent } from './section-component/list-technologies-component/list-technologies-component';

@NgModule({
  declarations: [
    App,
    SectionComponent,
    ProfileComponent,
    ListExperiencesComponent,
    ListTechnologiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
