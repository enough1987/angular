import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses-pannel',
  templateUrl: './courses-pannel.component.html',
  styleUrls: ['./courses-pannel.component.scss']
})
export class CoursesPannelComponent implements OnInit {

  @Output() add = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  addCourse() {
    this.add.emit(true)
  }

}
