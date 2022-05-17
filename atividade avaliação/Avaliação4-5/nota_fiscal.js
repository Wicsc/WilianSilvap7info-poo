"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotaFiscal = void 0;
class NotaFiscal {
    /* Métodos */
    /* Método Construtor */
    constructor(id, codigo, cliente) {
        this.id = id;
        this.codigo = codigo;
        this.data = new Date();
        this.cliente = cliente;
        this.valorNota = 0.0;
        this.items = new Array();
    }
    /* Métodos Acessores */
    getid() {
        return this.id;
    }
    getcodigo() {
        return this.codigo;
    }
    getdata() {
        return this.data;
    }
    /* Métodos Modificadores */
    setcodigo(codigo) {
        this.codigo = codigo;
    }
    setdata(data) {
        this.data = data;
    }
    adicionarItem(item) {
        this.items.push(item);
        this.valorNota += item.valor;
    }
    // Percorrer o array items e calcular o valor total da NotaFiscal
    calcularValorNotaFiscal() {
        let valorCalculado = 0;
        return valorCalculado;
    }
    // Imprimir a NotaFiscal conforme o Layout definido
    MostrarNotaFiscal() {
        let soma = 0;
        for (let count = 0; count < this.items.length; count++) {
            let quantia = this.items[count].getquantidade() * this.items[count].getvalor();
            soma += quantia;
        }
        console.log("O valor total de suas compras é de: R$ " + soma);
    }
}
exports.NotaFiscal = NotaFiscal;
