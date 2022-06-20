"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
//
//
//
//
class Produto {
    /* Métodos */
    /* Método Construtor */
    constructor(id, codigo, descricao, valorUnitario) {
        this.id = id;
        this.codigo = codigo;
        this.descricao = descricao;
        this.valorUnitario = valorUnitario;
    }
    /* Métodos Acessores */
    getid() {
        return this.id;
    }
    getdescricao() {
        return this.descricao;
    }
    getcodigo() {
        return this.codigo;
    }
    getvalorUnitario() {
        return this.valorUnitario;
    }
    /* Métodos Modificadores */
    setdescricao(descricao) {
        this.descricao = descricao;
    }
    setcodigo(codigo) {
        this.codigo = codigo;
    }
    setvalorUnitario(valorUnitario) {
        this.valorUnitario = valorUnitario;
    }
}
exports.Produto = Produto;
