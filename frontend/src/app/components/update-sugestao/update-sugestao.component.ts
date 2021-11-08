import { Sugestao } from './../create-sugestao/sugestao.model';
import { SugestaoService } from './../sugestao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-sugestao',
  templateUrl: './update-sugestao.component.html',
  styleUrls: ['./update-sugestao.component.css']
})
export class UpdateSugestaoComponent implements OnInit {

  sugestao:Sugestao

  constructor(private router: Router, private sugestaoService: SugestaoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.sugestaoService.readById(id).subscribe(sugestao => {
      this.sugestao=sugestao
    });
  }

  updateSugestao(): void {
    this.sugestaoService.update(this.sugestao).subscribe(() => {
      this.sugestaoService.showMessage('Sugestão atualizada com sucesso!')
      this.router.navigate(['ideia-solucao'])
    });
  }

  cancel(): void {
    this.router.navigate(['ideia-solucao']);
  }

}
