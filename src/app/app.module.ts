import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
// import { CoursesComponent } from './courses/courses.component';
// import { CoursesService } from './Services/courses.service';
// import { CourseComponent } from './courses/course/course.component';
import { ExperiancesComponent } from './experiances/experiances.component';
import { AchievementsComponent } from './achievements/achievements.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Experiances', component: ExperiancesComponent},
  {path: 'Achievements', component: AchievementsComponent},
  {path: 'Contact', component: ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ExperiancesComponent,
    AchievementsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
