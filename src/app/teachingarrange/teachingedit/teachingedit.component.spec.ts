import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingeditComponent } from './teachingedit.component';

describe('TeachingeditComponent', () => {
  let component: TeachingeditComponent;
  let fixture: ComponentFixture<TeachingeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
