/*******************************************************************************************************************************************
* Objetivo: Arquivo responsável por realizar as tratativas de erros e validações para números pares e ímpares
* Data: 04/03/2026
* Autor: Jean Costa
* Versão 1.0
********************************************************************************************************************************************/

//Função para validar entrada e saída de dados
const validarEntrada = function(numeroInicial, numeroFinal){
    let status = true

    if(numeroInicial == '' || numeroFinal == ''){
      return 'ERRO: É necessário informar os dois números para realizar o cálculo.'
    }

    nInicial = Number(numeroInicial)
    nFinal = Number(numeroFinal)

    if(isNaN(nInicial) || isNaN(nFinal)){
        return 'ERRO: É necessário informar apenas números para realizar o cálculo.'
    }else if(nInicial < 0 || nFinal < 0){
        return 'ERRO: É necessário informar apenas números positivos para realizar o cálculo.'
    }else if(nInicial > 500 || nFinal < 100 || nFinal > 1000 ){
        return 'ERRO: O número inicial deve ser entre 0 e 500, e o número final deve ser entre 100 e 1000.'
    }else if(nInicial > nFinal){
        return 'ERRO: O número inicial não pode ser maior do que o número final.'
    }else if(nInicial == nFinal){
        return 'ERRO: O número inicial e o número final não podem ser iguais.'
    }

    return status
}

module.exports = {
    validarEntrada
}