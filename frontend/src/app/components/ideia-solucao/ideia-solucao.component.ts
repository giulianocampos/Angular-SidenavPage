import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ideia-solucao',
  templateUrl: './ideia-solucao.component.html',
  styleUrls: ['./ideia-solucao.component.css']
})
export class IdeiaSolucaoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  SugestaoCreate(): void {
    this.router.navigate(['sugestao/create'])
  }

}
