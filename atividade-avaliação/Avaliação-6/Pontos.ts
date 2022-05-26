export class Ponto{

    private X:number = 0

    private Y:number = 0

    constructor(x: number, y:number){
        this.X = x
        this.Y = y
    }

    get getX(){
        return this.X
    }

    get getY(){
        return this.Y
    }

    set setX(x: number){
        this.X = x
    }

    set setY(y: number){
        this.Y = y
    }
}