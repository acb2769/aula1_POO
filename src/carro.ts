export class Carro {

    public modelo: string;
    public placa: string;
    public ano: number;
    private ligado: boolean = false;

    constructor(modelo: string, placa: string, ano: number) {
        this.modelo = modelo;
        this.placa = placa;
        this.ano = ano;
    }

    // Método para verificar o status do carro
    public getStatusCarro() {
        return this.ligado;
    }

    // Método para mostrar as informações do carro
    public getInfoCarro() {
        console.log(`-- Carro --
        \n Modelo: ${this.modelo} 
        \n Placa: ${this.placa} 
        \n Ano: ${this.ano} 
        \n Status atual: ${this.getStatusCarro() ? 'Ligado' : 'Desligado'}`);
    }

    // Método para ligar o carro
    public getLigarCarro() {
        if (this.ligado) {
            return;
        }

        this.ligado = true;
    }

    // Método para desligar o carro
    public getDesligarCarro() {
        if (!this.ligado) {
            return;
        }

        this.ligado = false;
    }
}

const carro1 = new Carro('Siena', 'HFC0907', 2013);
const carro2 = new Carro('Palio', 'HFC0910', 2010);

carro1.getInfoCarro();
carro2.getInfoCarro();
carro1.getLigarCarro();
carro1.getDesligarCarro();
