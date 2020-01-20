import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { items } from 'src/app/mocks/courses';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses-wrapper',
  templateUrl: './courses-wrapper.component.html',
  styleUrls: ['./courses-wrapper.component.scss']
})
export class CoursesWrapperComponent implements OnInit {

  items: Course[];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.getAll().subscribe((item) => {
      this.items = item;
    });
  }

  search(value: string) {
    console.log('SEARCH: ', value);
  }

  add(value: boolean) {
    console.log('Add: ', value);
  }

  edit(value: Course) {
    console.log('Edit: ', value);
  }

  delete(value: Course) {
    console.log('Delete: ', value);
  }

}
