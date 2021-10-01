import { CoursesService } from './courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent // this is where you add your new components //
  ],                 // it will be reflected above at line 6 //
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CoursesService // basically this is dependency injection //
  ],               // without specifying the service, the courses wont appear //
  bootstrap: [AppComponent]
})
export class AppModule { }
