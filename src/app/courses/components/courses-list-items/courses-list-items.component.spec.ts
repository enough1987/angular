import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListItemsComponent } from './courses-list-items.component';

describe('CoursesListItemsComponent', () => {
  let component: CoursesListItemsComponent;
  let fixture: ComponentFixture<CoursesListItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
