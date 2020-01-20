import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../models/course';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.scss']
})
export class CoursesListItemComponent implements OnInit {

  @Input() item: Course;

  @Output() edit = new EventEmitter<Course>();
  @Output() delete = new EventEmitter<Course>();

  constructor() {
  }

  ngOnInit() {
  }

  editCourse() {
    this.edit.emit(this.item)
  }

  deleteCourse() {
    this.delete.emit(this.item)
  }

}
