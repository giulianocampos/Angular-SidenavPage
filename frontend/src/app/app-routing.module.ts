import { AuthGuard } from './components/account/shared/auth.guard';
import { CreateAccountComponent } from './components/account/create-account/create-account.component';
import { LoginComponent } from './components/account/login/login.component';
import { AuthenticationComponent } from './components/layout/authentication/authentication.component';
import { DeleteSugestaoComponent } from './components/delete-sugestao/delete-sugestao.component';
import { UpdateSugestaoComponent } from './components/update-sugestao/update-sugestao.component';
import { CreateSugestaoComponent } from './components/create-sugestao/create-sugestao.component';
import { IdeiaSolucaoComponent } from './components/ideia-solucao/ideia-solucao.component';
import { ContextoComponent } from './components/contexto/contexto.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'contexto', component: ContextoComponent, canActivate: [AuthGuard]},
  {path: 'ideia-solucao', component: IdeiaSolucaoComponent, canActivate: [AuthGuard]},
  {path: 'sugestao', canActivate: [AuthGuard],
children: [

  {path: '', redirectTo: 'create', pathMatch: 'full'},
  {path: 'create', component: CreateSugestaoComponent},
  {path: 'update/:id', component: UpdateSugestaoComponent},
  {path: 'delete/:id', component: DeleteSugestaoComponent}
]},

  {
    path: '', component: AuthenticationComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'create-account', component: CreateAccountComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
