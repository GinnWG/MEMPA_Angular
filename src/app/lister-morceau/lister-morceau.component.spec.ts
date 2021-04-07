import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerMorceauComponent } from './lister-morceau.component';

describe('ListerMorceauComponent', () => {
  let component: ListerMorceauComponent;
  let fixture: ComponentFixture<ListerMorceauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerMorceauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerMorceauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
