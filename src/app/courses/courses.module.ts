import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoursesWrapperComponent } from './components/courses-wrapper/courses-wrapper.component';
import { CoursesHeaderComponent } from './components/courses-header/courses-header.component';
import { CoursesListItemComponent } from './components/courses-list-item/courses-list-item.component';
import { CoursesListItemsComponent } from './components/courses-list-items/courses-list-items.component';
import { CoursesSearchComponent } from './components/courses-search/courses-search.component';
import { CoursesPannelComponent } from './components/courses-pannel/courses-pannel.component';

@NgModule({
  declarations: [
    CoursesWrapperComponent,
    CoursesHeaderComponent,
    CoursesListItemComponent,
    CoursesListItemsComponent,
    CoursesSearchComponent,
    CoursesPannelComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CoursesWrapperComponent
  ]
})
export class CoursesModule { }
