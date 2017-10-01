import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BasicSkillsComponent } from './components/basic-skills/basic-skills'
import { ContactInfoComponent } from './components/contact-info/contact-info'
import { EducationComponent } from './components/education/education'
import { ExperienceComponent } from './components/experience/experience'
import { ExtraActivitiesComponent } from './components/extra-activities/extra-activities'
import { MainInfoComponent } from './components/main-info/main-info'
import { SummaryComponent } from './components/summary/summary'

@NgModule({
  declarations: [
    AppComponent,
    BasicSkillsComponent,
    ContactInfoComponent,
    EducationComponent, 
    ExperienceComponent,
    ExtraActivitiesComponent,
    MainInfoComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
