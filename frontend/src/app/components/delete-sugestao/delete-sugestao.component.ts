import { Sugestao } from './../create-sugestao/sugestao.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SugestaoService } from './../sugestao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-sugestao',
  templateUrl: './delete-sugestao.component.html',
  styleUrls: ['./delete-sugestao.component.css']
})
export class DeleteSugestaoComponent implements OnInit {

  sugestao:Sugestao

  constructor(private sugestaoService: SugestaoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.sugestaoService.readById(id).subscribe(sugestao => {
      this.sugestao=sugestao
    });
  }

  deleteSugestao(): void {
    this.sugestaoService.delete(this.sugestao.id).subscribe(() => {
      this.sugestaoService.showMessage('Sugestão excluída com sucesso!')
      this.router.navigate(['ideia-solucao'])
    });
  }

  cancel(): void {
    this.router.navigate(['ideia-solucao']);
  }

}
