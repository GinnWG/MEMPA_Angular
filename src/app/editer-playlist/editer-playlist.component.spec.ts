import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerPlaylistComponent } from './editer-playlist.component';

describe('EditerPlaylistComponent', () => {
  let component: EditerPlaylistComponent;
  let fixture: ComponentFixture<EditerPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditerPlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
