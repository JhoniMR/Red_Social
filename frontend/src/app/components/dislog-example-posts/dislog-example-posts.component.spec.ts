import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DislogExamplePostsComponent } from './dislog-example-posts.component';

describe('DislogExamplePostsComponent', () => {
  let component: DislogExamplePostsComponent;
  let fixture: ComponentFixture<DislogExamplePostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DislogExamplePostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DislogExamplePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
