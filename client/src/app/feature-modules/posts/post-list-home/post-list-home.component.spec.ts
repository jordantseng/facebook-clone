import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListHomeComponent } from './post-list-home.component';

describe('PostListHomeComponent', () => {
  let component: PostListHomeComponent;
  let fixture: ComponentFixture<PostListHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
