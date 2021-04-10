import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerUserComponent } from './lister-user.component';

describe('ListerUserComponent', () => {
  let component: ListerUserComponent;
  let fixture: ComponentFixture<ListerUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
