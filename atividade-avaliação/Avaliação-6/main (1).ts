import {Ponto} from "./Pontos"

import { Quadrilatero } from "./Quadri"

let pontoA = new Ponto(0, 9)

let pontoB = new Ponto(14, 0)

let pontoC = new Ponto(5, 3)

let pontoD = new Ponto(12, 6)

let pontoE = new Ponto(16, 7)

let Quad = new Quadrilatero(pontoA,pontoB)

console.log(Quad.Area(pontoC)? "O Ponto C está no Quadrilátero": "O Ponto C não está no Quadrilátero")

console.log(Quad.Area(pontoD)? "O Ponto D está no Quadrilátero": "O Ponto D não está no Quadrilátero")

console.log(Quad.Area(pontoE)? "O Ponto E está no Quadrilátero": "O Ponto E não está no Quadrilátero")




