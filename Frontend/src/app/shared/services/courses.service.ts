import { Injectable } from '@angular/core';

// Data
import { Courses } from '../data/courses-data';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getAllCourses(): any[] {
    return Courses;
  }
}
