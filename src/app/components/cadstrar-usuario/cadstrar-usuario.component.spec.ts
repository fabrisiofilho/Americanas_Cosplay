import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadstrarUsuarioComponent } from './cadstrar-usuario.component';

describe('CadstrarUsuarioComponent', () => {
  let component: CadstrarUsuarioComponent;
  let fixture: ComponentFixture<CadstrarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadstrarUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadstrarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
