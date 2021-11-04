import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private router: Router, private observer: BreakpointObserver) {

  }

  ngOnInit(): void {
  }

  homePage(): void {
    this.router.navigate([''])
  }

  contextoPage(): void {
    this.router.navigate(['contexto'])
  }

  ideiaPage(): void {
    this.router.navigate(['ideia-solucao'])
  }

}
