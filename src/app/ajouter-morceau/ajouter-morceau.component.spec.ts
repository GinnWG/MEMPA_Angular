import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterMorceauComponent } from './ajouter-morceau.component';

describe('AjouterMorceauComponent', () => {
  let component: AjouterMorceauComponent;
  let fixture: ComponentFixture<AjouterMorceauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterMorceauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterMorceauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
