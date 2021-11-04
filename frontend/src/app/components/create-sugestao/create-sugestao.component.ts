import { Router } from '@angular/router';
import { SugestaoService } from './../sugestao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-sugestao',
  templateUrl: './create-sugestao.component.html',
  styleUrls: ['./create-sugestao.component.css']
})
export class CreateSugestaoComponent implements OnInit {

  constructor(private sugestaoService: SugestaoService, private router: Router) { }

  ngOnInit(): void {
  }

  createSugestao():  void {
  this.sugestaoService.showMessage('Solução criada com sucesso!')
  }

  cancel(): void {
    this.router.navigate(['ideia-solucao'])
  }

}
