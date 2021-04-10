import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerPlaylistComponent } from './supprimer-playlist.component';

describe('SupprimerPlaylistComponent', () => {
  let component: SupprimerPlaylistComponent;
  let fixture: ComponentFixture<SupprimerPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerPlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
