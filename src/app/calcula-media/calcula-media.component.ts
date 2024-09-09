import { Component } from '@angular/core';
import { Boletim } from './boletim';
import { Situacao } from './situacao';

@Component({
  selector: 'app-calcula-media',
  templateUrl: './calcula-media.component.html',
  styleUrl: './calcula-media.component.css'


})
export class CalculaMediaComponent {
  mp: number | undefined
  mediaFinal: number | undefined
  mostrarSituacao: string | undefined
  boletim: Boletim | undefined
  mostrarSituacaoFinal: string| undefined
  
  

  constructor() {
    this.mediaFinal = undefined
    this.mostrarSituacao = undefined
    this.boletim= undefined
  }

  calcularMediaParcial(bim1: number, 
    bim2: number, 
    bim3: number,
    bim4: number) {
    this.boletim = new Boletim(bim1,bim2,bim3,bim4)
    this.mp = this.boletim.mp
    this.boletim.SituacaoDoAluno()
    this.mostrarSituacao=this.boletim.situacao

}
  CalcularMediaFinal(notafinal:number){
    if (this.boletim){
      this.boletim.Naf(notafinal)
      this.mediaFinal = this.boletim.Provafinal()
      this.mostrarSituacaoFinal=this.boletim.situacao


    }
  }
}
