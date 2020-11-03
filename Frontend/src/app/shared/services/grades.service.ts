import { Injectable } from '@angular/core';

// Data
import { Grades } from '../data/grades-data';

@Injectable({
  providedIn: 'root'
})
export class GradesService {

  constructor() { }

  getGrades(): any[] {
    return Grades;
  }
}
