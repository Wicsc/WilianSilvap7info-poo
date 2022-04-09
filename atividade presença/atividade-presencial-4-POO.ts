//Criando a classe
class Queue{
    Pessoas: string[] = []
    capacMax = 5
    fim = 0
    primItem = 0
    quantItens = 0

    
    isEmpty(): number{
        if(this.quantItens == 0){
            return 1
        }else{
            return 0
        }
    }
    
    isFull(): number{
        if(this.fim == this.capacMax){
            return 1
        }else{
            return 0
        }
    }

    
    addFila(nome: string): void{
        if(this.isFull() == 1){
            console.log('Fila está cheia!')
        }else{
            this.Pessoas[this.fim] = nome
            console.log(nome+' entrou na fila')
            this.fim++
            this.quantItens++
        }
    }
    
    removeFila():string | void {
        if(this.isEmpty() == 1){
            console.log('A fila está vazia!')
        }else{
            let temp = this.Pessoas[this.primItem]
            console.log(this.Pessoas[this.primItem]+' saiu da fila')
            this.primItem++
            this.quantItens--
            return temp
        }
    }
    // Metódo para mostrar a Fila
    verFila(): void{
        if(this.isEmpty() == 1){
            console.log('Não há elementos na fila')
        }else{
            let np = this.primItem
            for(let i=0; i < this.quantItens; i++){
                console.log(this.Pessoas[np]+' está na fila')
                np++
            }
        }
    }
}

let fila: Queue = new Queue()


fila.addFila('Wilian')
fila.addFila('Gabriel')
fila.addFila('Clara')
fila.addFila('Lourdes')
console.log('-------------------------')

fila.removeFila()
fila.removeFila()
fila.removeFila()
console.log('-------------------------')

fila.addFila('Iuri')
console.log('-------------------------')

fila.verFila()
console.log('-------------------------')

fila.removeFila()
fila.removeFila()
console.log('-------------------------')

fila.verFila()