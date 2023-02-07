import { IMaskModule } from 'angular-imask';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms'
import { CpfValidator } from 'src/app/shared/validator/cpf-validator';


@Component({
  selector: 'app-cadastro-admissao',
  templateUrl: './cadastro-admissao.component.html',
  styleUrls: ['./cadastro-admissao.component.css']
})
export class CadastroAdmissaoComponent implements OnInit{

  admissaoForm!: FormGroup;
  cpfValido : boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.admissaoForm = this.formBuilder.group({
      cpf: ['', [Validators.required,  CpfValidator.cpfValido]],
    })

  }

  get cpf() {
    return this.admissaoForm.get('cpf')!;
  }

  submit(){
    if (this.admissaoForm.invalid)
      return;

    this.cpfValido = true;
  }

  validaCampo() : boolean{
    if((this.admissaoForm.get('cpf')?.errors?.['required'] || this.admissaoForm.get('cpf')?.errors?.['invalido']) && this.admissaoForm.get('cpf')?.touched){
      this.cpfValido = false;
        return true;
    }
    return false
  }

}
