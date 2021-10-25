import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppressionFilmComponent } from './suppression-film.component';

describe('SuppressionFilmComponent', () => {
  let component: SuppressionFilmComponent;
  let fixture: ComponentFixture<SuppressionFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppressionFilmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppressionFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
