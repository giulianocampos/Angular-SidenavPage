import { SugestaoService } from './../sugestao.service';
import { Sugestao } from './../create-sugestao/sugestao.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-sugestao',
  templateUrl: './read-sugestao.component.html',
  styleUrls: ['./read-sugestao.component.css']
})
export class ReadSugestaoComponent implements OnInit {

  sugestoes: Sugestao[]

  constructor(private sugestaoService: SugestaoService) { }

  ngOnInit(): void {
    this.sugestaoService.read().subscribe(sugestoes => {
      this.sugestoes=sugestoes
      console.log(sugestoes)
    })
  }

}
