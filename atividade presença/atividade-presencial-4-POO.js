"use strict";
//Criando a classe
class Queue {
    constructor() {
        this.Pessoas = [];
        this.capacMax = 5;
        this.fim = 0;
        this.primItem = 0;
        this.quantItens = 0;
    }
    isEmpty() {
        if (this.quantItens == 0) {
            return 1;
        }
        else {
            return 0;
        }
    }
    isFull() {
        if (this.fim == this.capacMax) {
            return 1;
        }
        else {
            return 0;
        }
    }
    addFila(nome) {
        if (this.isFull() == 1) {
            console.log('Fila está cheia!');
        }
        else {
            this.Pessoas[this.fim] = nome;
            console.log(nome + ' entrou na fila');
            this.fim++;
            this.quantItens++;
        }
    }
    removeFila() {
        if (this.isEmpty() == 1) {
            console.log('A fila está vazia!');
        }
        else {
            let temp = this.Pessoas[this.primItem];
            console.log(this.Pessoas[this.primItem] + ' saiu da fila');
            this.primItem++;
            this.quantItens--;
            return temp;
        }
    }
    // Metódo para mostrar a Fila
    verFila() {
        if (this.isEmpty() == 1) {
            console.log('Não há elementos na fila');
        }
        else {
            let np = this.primItem;
            for (let i = 0; i < this.quantItens; i++) {
                console.log(this.Pessoas[np] + ' está na fila');
                np++;
            }
        }
    }
}
let fila = new Queue();
fila.addFila('Wilian');
fila.addFila('Gabriel');
fila.addFila('Clara');
fila.addFila('Lourdes');
console.log('-------------------------');
fila.removeFila();
fila.removeFila();
fila.removeFila();
console.log('-------------------------');
fila.addFila('Iuri');
console.log('-------------------------');
fila.verFila();
console.log('-------------------------');
fila.removeFila();
fila.removeFila();
console.log('-------------------------');
fila.verFila();
