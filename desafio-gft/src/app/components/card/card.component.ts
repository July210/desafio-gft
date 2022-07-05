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


}
