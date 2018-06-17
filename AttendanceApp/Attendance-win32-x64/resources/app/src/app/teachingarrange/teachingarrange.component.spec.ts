import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingarrangeComponent } from './teachingarrange.component';

describe('TeachingarrangeComponent', () => {
  let component: TeachingarrangeComponent;
  let fixture: ComponentFixture<TeachingarrangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingarrangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingarrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
