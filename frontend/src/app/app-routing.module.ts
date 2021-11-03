import { CreateSugestaoComponent } from './components/create-sugestao/create-sugestao.component';
import { IdeiaSolucaoComponent } from './components/ideia-solucao/ideia-solucao.component';
import { ContextoComponent } from './components/contexto/contexto.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contexto', component: ContextoComponent},
  {path: 'ideia-solucao', component: IdeiaSolucaoComponent},
  {path: 'sugestao/create', component: CreateSugestaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
