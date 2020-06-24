import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrizeComponent } from './list-prize.component';

describe('ListPrizeComponent', () => {
  let component: ListPrizeComponent;
  let fixture: ComponentFixture<ListPrizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPrizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPrizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
