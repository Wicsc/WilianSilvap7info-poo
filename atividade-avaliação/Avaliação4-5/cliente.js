"use strict";
//
//
//
//
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    /* Métodos */
    /* Método Construtor */
    constructor(id, nome, codigo, cnpjcpf, tipo) {
        this.id = id;
        this.nome = nome;
        this.codigo = codigo;
        this.cnpjcpf = cnpjcpf;
        this.tipo = tipo;
    }
    /* Métodos Acessores */
    getid() {
        return this.id;
    }
    getnome() {
        return this.nome;
    }
    getcodigo() {
        return this.codigo;
    }
    getcnpjcpf() {
        return this.cnpjcpf;
    }
    gettipo() {
        return this.tipo;
    }
    /* Métodos Modificadores */
    setnome(nome) {
        this.nome = nome;
    }
    setcodigo(codigo) {
        this.codigo = codigo;
    }
    setcnpjcpf(cnpjcpf) {
        this.cnpjcpf = cnpjcpf;
    }
    settipo(tipo) {
        this.tipo = tipo;
    }
}
exports.Cliente = Cliente;
