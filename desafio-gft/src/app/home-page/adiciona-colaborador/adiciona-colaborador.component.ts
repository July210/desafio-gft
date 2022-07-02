import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adiciona-colaborador',
  templateUrl: './adiciona-colaborador.component.html',
  styleUrls: ['./adiciona-colaborador.component.scss']
})
export class AdicionaColaboradorComponent implements OnInit {

  hasvalidCPF = false;

  constructor() { }

  ngOnInit(): void {
  }

}
