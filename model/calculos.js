/*******************************************************************************************************************************************
* Objetivo: Arquivo responsável por realizar os cálculos de números pares e ímpares
* Data: 04/03/2026
* Autor: Jean Costa
* Versão 1.0
********************************************************************************************************************************************/

//Função para calcular os números pares
const calcularPares = function(numeroInicial, numeroFinal) {
    let numerosPares = []

    for( let i = numeroInicial; i <= numeroFinal; i++){

        //O operador de módulo (%) é utilizado para verificar se o número é divisível por 2. Se o resultado for igual a zero, significa que o número é par.
        if(i % 2 == 0){
            numerosPares.push(i)
        }
    }

    let resultadoPares = `\n--- Números Pares entre ${numeroInicial} e ${numeroFinal} --- \n${numerosPares.join('\n')} \n\nQuantidade de números encontrados: ${numerosPares.length}`
    return resultadoPares
}

//Função para calcular os números ímpares
const calcularImpares = function(numeroInicial, numeroFinal){
    let numerosImpares = []

    //Percorrer o intervalo de números e verificar quais são ímpares
    //O operador de módulo (%) é utilizado para verificar se o número é divisível por 2. Se o resultado for diferente de zero, significa que o número é ímpar.
    for( let i = numeroInicial; i <= numeroFinal; i++){
        if(i % 2 != 0){
            numerosImpares.push(i)
        }
    }
    
    let resultadoImpares = `\n--- Números Ímpares entre ${numeroInicial} e ${numeroFinal} --- \n${numerosImpares.join('\n')} \n\nQuantidade de números encontrados: ${numerosImpares.length}`
    return resultadoImpares
}

module.exports = {
    calcularPares,
    calcularImpares
}
