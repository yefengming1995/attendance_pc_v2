import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankinglistComponent } from './rankinglist.component';

describe('RankinglistComponent', () => {
  let component: RankinglistComponent;
  let fixture: ComponentFixture<RankinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
