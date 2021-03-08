import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerContactComponent } from './lister-contact.component';

describe('ListerContactComponent', () => {
  let component: ListerContactComponent;
  let fixture: ComponentFixture<ListerContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
