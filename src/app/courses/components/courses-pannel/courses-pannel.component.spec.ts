import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPannelComponent } from './courses-pannel.component';

describe('CoursesPannelComponent', () => {
  let component: CoursesPannelComponent;
  let fixture: ComponentFixture<CoursesPannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesPannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
