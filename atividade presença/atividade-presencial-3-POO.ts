class Stack{

    stack: number[] = []
    topo: number = -1
    limite = 4

    isEmpty(): number{
        if(this.topo == -1){
            return 1
        }else{
            return 0
        }
    }

    isFull(): number{
        if(this.topo == this.limite){
            return 1
        }else{
            return 0
        }
    }

    push(num: number): void{
        if(this.isFull() == 1){
            console.log('Pilha está cheia')
        }else{
            this.topo++
            this.stack[this.topo] = num
            console.log('Elemento '+num+' Adicionado!')
        }
    }
    tirar(): number | void{
        if(this.isEmpty() == 1){
            console.log('Pilha vazia')
        }else{
            let aux = this.stack[this.topo]
            console.log('Elemento '+aux+' Retirado')
            this.topo--
            return aux
        }
    }

    mostrar(): void{
        if(this.isEmpty() == 1){
            console.log('Pilha Vazia')
         }else{
            for(let x = 0; x <= this.topo; x++){
                console.log('Pilha tem o elemento '+this.stack[x])    
            }
        }
    }
}

let pilha: Stack = new Stack()

pilha.push(1)
pilha.push(2)
pilha.push(3)
pilha.push(4)
console.log('-------------------------')

pilha.mostrar()
console.log('-------------------------')

pilha.tirar()
console.log('-------------------------')

pilha.mostrar()
console.log('-------------------------')

pilha.tirar()
console.log('-------------------------')

pilha.mostrar()
console.log('-------------------------')

pilha.tirar()
console.log('-------------------------')

pilha.mostrar()
console.log('-------------------------')

pilha.tirar()
console.log('-------------------------')

pilha.mostrar()
