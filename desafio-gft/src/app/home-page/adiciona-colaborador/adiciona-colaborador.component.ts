import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListaCooperados, mockCooperados } from 'src/app/mock/mock-cooperados';
import { ValidaCPF } from '../../validators/validaCpf';
@Component({
  selector: 'app-adiciona-colaborador',
  templateUrl: './adiciona-colaborador.component.html',
  styleUrls: ['./adiciona-colaborador.component.scss']
})
export class AdicionaColaboradorComponent implements OnInit {

  form!: FormGroup;
  consulta = false;
  hasvalidCPF = false;
  futuroCooperado: ListaCooperados | undefined;

  mockData = [
    {
      texto: 'Situação cadastral do CPF',
      subTexto: 'Consulta na Receita Federal',
      label1: 'Nome',
      label2: 'Situação do CPF',
      temBotao: false,
      tipo: 0,
    },
    {
      texto: 'Conta aplicação',
      subTexto: 'Cooperativa Viacredi',
      label1: 'Número da conta',
      label2: 'Duplicar conta',
      temBotao: true,
      tipo: 1
    },
    {
      texto: 'Conta corrente',
      subTexto: 'Cooperativa Viacredi',
      label1: 'Número da conta',
      label2: 'Duplicar conta',
      temBotao: true,
      tipo: 2
    },
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      cpf: ['', Validators.compose([Validators.required, ValidaCPF.ValidaCpf])],
    });
  }

  validaCPF() {
    this.consulta = true;
    this.checkSeTemCpf();
  }

  checkSeTemCpf() {
    if(this.cpf?.value) {
      this.checkCpfNaLista();
      console.log(this.futuroCooperado)
      if (this.futuroCooperado) {
        this.hasvalidCPF = true;
      } else {
        this.form.controls['cpf'].setErrors({'cpfInvalido': true})
      }
    }
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
