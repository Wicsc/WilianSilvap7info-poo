"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemNotaFiscal = void 0;
class ItemNotaFiscal {
    /* Métodos */
    /* Método Construtor */
    constructor(id, sequencial, quantidade, produto) {
        this.id = id;
        this.sequencial = sequencial;
        this.quantidade = quantidade;
        this.produto = produto;
        this.valor = 0.0;
    }
    /* Métodos Acessores */
    getid() {
        return this.id;
    }
    getsequencial() {
        return this.sequencial;
    }
    getquantidade() {
        return this.quantidade;
    }
    getproduto() {
        return this.produto;
    }
    getvalor() {
        return this.valor;
    }
    /* Métodos Modificadores */
    setsequencial(sequencial) {
        this.sequencial = sequencial;
    }
    valorItemNotaFiscal() {
        this.valor = this.getproduto().getvalorUnitario();
    }
}
exports.ItemNotaFiscal = ItemNotaFiscal;
//
//
//
