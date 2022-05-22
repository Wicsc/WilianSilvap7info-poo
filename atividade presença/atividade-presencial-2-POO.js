"use strict";
function printDec(valor) {
    let decimal = (valor).toString(10);
    return decimal;
}
function printOct(valor) {
    let octal = (valor).toString(8);
    return octal;
}
function printHex(valor) {
    let hexadecimal = (valor).toString(16);
    return hexadecimal;
}
function printBin(valor) {
    let binario = (valor).toString(2);
    return binario;
}
function imprimirTabela() {
    console.log('Decimal Octal Hexadecimal  Binario');
    console.log('------------- --------- --------------------- -----------------');
    for (let x = 0; x <= 225; x++) {
        console.log(`${printDec(x)}  ${printOct(x)}   ${printHex(x)}   ${printBin(x)}`);
    }
}
imprimirTabela();
