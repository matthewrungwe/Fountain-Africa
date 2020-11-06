import { Component, OnInit } from '@angular/core';

// Services
import { CoursesService } from 'src/app/shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: any[];

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courses = this.coursesService.getAllCourses();
  }

}
