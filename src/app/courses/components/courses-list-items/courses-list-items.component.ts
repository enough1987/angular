import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../models/course';

@Component({
  selector: 'app-courses-list-items',
  templateUrl: './courses-list-items.component.html',
  styleUrls: ['./courses-list-items.component.scss']
})
export class CoursesListItemsComponent implements OnInit {

  @Input() items: Course[];

  @Output() edit = new EventEmitter<Course>();
  @Output() delete = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
    console.log(this.items);
  }

  editCourse(item: Course) {
    this.edit.emit(item)
  }

  deleteCourse(item: Course) {
    this.delete.emit(item)
  }


}
