import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerPlaylistComponent } from './lister-playlist.component';

describe('ListerPlaylistComponent', () => {
  let component: ListerPlaylistComponent;
  let fixture: ComponentFixture<ListerPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerPlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
