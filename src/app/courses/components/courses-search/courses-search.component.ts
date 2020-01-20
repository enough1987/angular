import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.scss']
})
export class CoursesSearchComponent implements OnInit {

  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  searchCourse(value: string) {
    if (!value) {
      return;
    }
    this.search.emit(value);
  }

}
