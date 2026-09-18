export class ContaBancaria {

    public numeroDaConta: string;
    public titular: string;
    private saldo: number;
    private saldoCaixinha: number;

    constructor(numeroDaConta: string, titular: string, saldo: number, saldoCaixinha: number) {
        this.numeroDaConta = numeroDaConta
        this.titular = titular
    }

    // Método para depósito 
    public depositar(target: "conta-bancaria" | "caixinha", valor:number) {
        if(target === 'conta-bancaria'){
            if (valor <= 0){
                return console.log("Valor não permitido")
            }
            this.saldo += valor
            return;
        }
        if(target === 'caixinha'){
            if(valor >= this.saldo || valor <= 0) {
                return console.log('Valor não permitido')
            }
            this.saldoCaixinha += this.saldo - valor
            this.saldo -= valor
            return
        }
        throw new Error{"Target_inexistente"}
    }


    // Método para sacar
    public sacar(target: "conta-bancaria" | "caixinha", valor:number) {
        if(target === 'conta-bancaria'){
            if (valor > this.saldo){
                return console.log("Valor não permitido")
            }
            this.saldo -= valor
            return console.log("Saque no valor de R$$('")
        }
        if(target === 'caixinha'){
            if(valor < 0) {
                return console.log('Valor não permitido')
            }
            if(valor > this.saldo) {
                return console.log('Valor não permitido')
            }
           
            this.saldoCaixinha -= valor
            this.saldo += valor
            return
        }
        throw new Error{"Target_inexistente"}
    }   

    public getValorSaldoConta() {
        return this.saldo;
    }

     public getValorSaldoCaixinha() {
        return this.saldoCaixinha;
    }   

    // Método para mostrar as informações conta
    public verSaldo() {
        console.log(`-- Conta --
        \n titular: ${this.titular}   
        \n numeroDaConta: ${this.numeroDaConta} 
        \n saldo: ${this.getValorSaldoConta()} 
        \n saldoCaxinha: ${this.getValorSaldoCaixinha()};
    }

 
}

const carro1 = new Carro('Siena', 'HFC0907', 2013);
const carro2 = new Carro('Palio', 'HFC0910', 2010);

carro1.getInfoCarro();
carro2.getInfoCarro();
carro1.getLigarCarro();
carro1.getDesligarCarro();
