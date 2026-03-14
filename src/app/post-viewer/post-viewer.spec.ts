import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostViewer } from './post-viewer';

describe('PostViewer', () => {
  let component: PostViewer;
  let fixture: ComponentFixture<PostViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostViewer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostViewer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
