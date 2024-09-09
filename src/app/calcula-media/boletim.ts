import { Situacao } from "./situacao";


export class Boletim {
    bim1: number
    bim2: number
    bim3: number
    bim4: number
    mp: number
    naf: number
    situacao: Situacao

    constructor(bim1: number, bim2: number, bim3: number, bim4: number) {
        this.bim1 = bim1
        this.bim2 = bim2
        this.bim3 = bim3
        this.bim4 = bim4
        this.naf = 0

        
        
        this.situacao = Situacao.CURSANDO
        this.situacao = Situacao.APROVADO
        this.situacao = Situacao.AVALIACAO_FINAL
        this.situacao = Situacao.REPROVADO
        this.situacao = Situacao.TRANCADO
        this.situacao = Situacao.TRANSFERIDO

        this.mp =(bim1* 2 + bim2 * 2 + bim3 * 3 + bim4 * 3) / 10
        
        
    }
    SituacaoDoAluno() {
        if (this.mp >= 60) {
            this.situacao = Situacao.APROVADO
        }

        else if (this.mp > 10 &&this.mp < 60) {
            this.situacao = Situacao.AVALIACAO_FINAL
        }
        else {
            this.situacao = Situacao.REPROVADO
        }

    }
    Naf(naf:number){
        this.naf = naf
    }
    Provafinal(){
        let af = Number((this.mp + this.naf) / 2)
            if (af >= 60) {
                this.situacao = Situacao.APROVADO
            }

            else {
                this.situacao = Situacao.REPROVADO
            }
            return af
    }

}