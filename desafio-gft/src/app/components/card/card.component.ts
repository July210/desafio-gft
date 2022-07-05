import { ListaCooperados } from './../../mock/mock-cooperados';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
    cooperado: ListaCooperados | undefined;

  @Input()
    info: any;

  constructor() { }

  ngOnInit(): void {
  }

  getValor() {
    switch (this.info.tipo) {
      case 0: {
        return this.cooperado?.nome
      }
      case 1: {
        return this.cooperado?.contaAplicacao
      }
      case 2: {
        return this.cooperado?.contaCorrente
      }
      default:
        return '';
    }
  }

  duplicaConta() {
    alert('Conta Duplicada!')
  }

}
