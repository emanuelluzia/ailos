import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroAdmissaoComponent } from './cadastro/components/cadastro-admissao/cadastro-admissao.component';


const routes : Routes = [
  { path: '', component: CadastroAdmissaoComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
