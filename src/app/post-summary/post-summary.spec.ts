import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSummary } from './post-summary';

describe('PostSummary', () => {
  let component: PostSummary;
  let fixture: ComponentFixture<PostSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
