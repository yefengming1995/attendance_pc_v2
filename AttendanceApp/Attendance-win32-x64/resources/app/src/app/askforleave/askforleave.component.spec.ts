import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskforleaveComponent } from './askforleave.component';

describe('AskforleaveComponent', () => {
  let component: AskforleaveComponent;
  let fixture: ComponentFixture<AskforleaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskforleaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskforleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
