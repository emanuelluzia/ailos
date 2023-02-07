import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAdmissaoComponent } from './cadastro-admissao.component';

describe('CadastroAdmissaoComponent', () => {
  let component: CadastroAdmissaoComponent;
  let fixture: ComponentFixture<CadastroAdmissaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroAdmissaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroAdmissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
