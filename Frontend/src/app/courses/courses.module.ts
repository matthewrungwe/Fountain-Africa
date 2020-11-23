import { NgModule } from '@angular/core';
// Modules
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';

const ROUTES = [
  { path: '', component: CoursesComponent},
  { path: 'courses/:id', component: CourseComponent }
];

@NgModule({
  declarations: [
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class CoursesModule { }
