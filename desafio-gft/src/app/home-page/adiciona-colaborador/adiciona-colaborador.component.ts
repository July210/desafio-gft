import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { data, mockData } from 'src/app/mock/mock- data-cooperado';
import { ListaCooperados, mockCooperados } from 'src/app/mock/mock-cooperados';
import { ValidaCPF } from '../../validators/validaCpf';
@Component({
  selector: 'app-adiciona-colaborador',
  templateUrl: './adiciona-colaborador.component.html',
  styleUrls: ['./adiciona-colaborador.component.scss']
})
export class AdicionaColaboradorComponent implements OnInit {

  @Output()
    cpfValido = new EventEmitter();

  form!: FormGroup;
  consulta = false;
  hasvalidCPF = false;
  futuroCooperado: ListaCooperados | undefined;
  mockData: Array<data> = mockData;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      cpf: ['', Validators.compose([Validators.required, ValidaCPF.ValidaCpf])],
    });
    this.getFormChanges();
  }

  getFormChanges() {
    this.form.get('cpf')?.valueChanges.subscribe(value => {
      this.hasvalidCPF = false;
      this.consulta = false;
      this.cpfValido.emit(false);
    })
  }

  validaCPF() {
    this.consulta = true;
    if(this.cpf?.value) {
      this.checkCpfNaLista();
      if (this.futuroCooperado) {
        this.hasvalidCPF = true;
        this.cpfValido.emit(true);
      } else {
        this.hasvalidCPF = false;
        this.consulta = false;
        this.form.controls['cpf'].setErrors({'cpfInvalido': true})
      }
    }
  }

  mudaCpf() {
    this.hasvalidCPF = false;
    this.consulta = false;
  }

  checkCpfNaLista() {
    this.futuroCooperado = mockCooperados.find((el: ListaCooperados) => {
      return el.cpf === this.cpf?.value;
    });
  }

  get cpf() {
    return this.form.get('cpf');
  }

}
