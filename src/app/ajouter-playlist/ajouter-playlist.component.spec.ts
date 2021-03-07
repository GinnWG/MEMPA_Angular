import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPlaylistComponent } from './ajouter-playlist.component';

describe('AjouterPlaylistComponent', () => {
  let component: AjouterPlaylistComponent;
  let fixture: ComponentFixture<AjouterPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterPlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
