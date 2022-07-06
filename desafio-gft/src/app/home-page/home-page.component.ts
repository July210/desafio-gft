import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  botaoAdmissao = false;

  constructor() { }

  ngOnInit(): void {
  }

  cpfValido(event: any) {
    this.botaoAdmissao = event;
  }

}
