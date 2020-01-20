import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { items } from 'src/app/mocks/courses';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getAll(): Observable<Course[]> {
    return of(items);
  }
}
