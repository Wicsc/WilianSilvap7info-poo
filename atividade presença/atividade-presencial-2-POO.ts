
function printDec(valor: number): string{
    let decimal = (valor).toString(10)
    return decimal
}
function printOct(valor: number): string{
    let octal = (valor).toString(8)
    return octal
}
function printHex(valor: number): string{
    let hexadecimal = (valor).toString(16)
    return hexadecimal
}
function printBin(valor: number): string{
    let binario = (valor).toString(2)
    return binario
}

function imprimirTabela(): void{
    console.log('Decimal Octal Hexadecimal  Binario')
    console.log('------------- --------- --------------------- -----------------')
    for( let x = 0; x <=225; x++){
        console.log(`${printDec(x)}  ${printOct(x)}   ${printHex(x)}   ${printBin(x)}`)
    }
}

imprimirTabela()