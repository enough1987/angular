import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesWrapperComponent } from './courses-wrapper.component';

describe('CoursesWrapperComponent', () => {
  let component: CoursesWrapperComponent;
  let fixture: ComponentFixture<CoursesWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
