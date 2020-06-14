import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnChanges {
  porcentaje: number;
  comisionFija: number;
  enviar: {
    bruto: number,
    neto: number,
    comision: number
  };
  recibir: {
    bruto: number,
    neto: number,
    comision: number
  };
  step = 1;

  constructor() {
    this.step = 1;
    this.porcentaje = 5.4;
    this.comisionFija = 0.30;
    this.enviar = {
      bruto: 0,
      neto: 0,
      comision: 0
    };
    this.recibir = {
      bruto: 0,
      neto: 0,
      comision: 0
    };
  }

  clean() {

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.recibir);
  }

  calcRecibir() {
    console.log('Calculando...');
    if (this.recibir.neto !== 0 && this.recibir.neto !== null) {
      this.recibir.bruto = parseFloat((((this.recibir.neto + this.comisionFija) / (100 - this.porcentaje)) * 100).toFixed(2));
    } else {
      this.recibir.bruto = 0;
    }
  }

  calcEnviar() {
    if (this.enviar.bruto !== 0 && this.enviar.bruto !== null) {
      this.enviar.neto = parseFloat((this.enviar.bruto - (this.enviar.bruto * (this.porcentaje / 100)) - this.comisionFija).toFixed(2));
    } else {
      this.enviar.neto = 0;
    }

  }

}
