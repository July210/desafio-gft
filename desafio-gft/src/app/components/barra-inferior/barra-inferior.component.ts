import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-inferior',
  templateUrl: './barra-inferior.component.html',
  styleUrls: ['./barra-inferior.component.scss']
})
export class BarraInferiorComponent implements OnInit {

  @Input()
    admissao: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
