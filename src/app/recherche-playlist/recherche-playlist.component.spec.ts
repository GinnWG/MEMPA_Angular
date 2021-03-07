import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchePlaylistComponent } from './recherche-playlist.component';

describe('RecherchePlaylistComponent', () => {
  let component: RecherchePlaylistComponent;
  let fixture: ComponentFixture<RecherchePlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecherchePlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherchePlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
