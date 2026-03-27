import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesViewer } from './favorites-viewer';

describe('FavoritesViewer', () => {
  let component: FavoritesViewer;
  let fixture: ComponentFixture<FavoritesViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritesViewer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritesViewer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
