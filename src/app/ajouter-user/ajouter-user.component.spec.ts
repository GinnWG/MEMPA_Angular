import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterUserComponent } from './ajouter-user.component';

describe('AjouterUserComponent', () => {
  let component: AjouterUserComponent;
  let fixture: ComponentFixture<AjouterUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
