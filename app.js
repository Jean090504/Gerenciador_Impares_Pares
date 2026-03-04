/*******************************************************************************************************************************************
* Objetivo: Desenvolver um sistema para gerenciar números pares e ímpares 
* Data: 04/03/2026
* Autor: Jean Costa
* Versão 1.0
********************************************************************************************************************************************/

//Importação de bibliotecas
const readline = require('readline')

const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Importação de arquivos
let tratativas = require('./model/tratativas')
let calculos = require('./model/calculos')

entradaDados.question('Digite o número inicial (entre 0 e 500): ', function(numeroInicial){
    entradaDados.question('Digite o número final (entre 100 e 1000): ', function(numeroFinal){
        entradaDados.question('Digite a opção desejada: \n1 - Calcular apenas os números pares \n2 - Calcular apenas os números ímpares \n3 - Calcular ambos (pares e ímpares) \nOpção: ', function(opcao){
            let status = tratativas.validarEntrada(numeroInicial, numeroFinal)

            if(status == true){
                //Escolha do usuário 
                switch(opcao){
                    case '1':
                        console.log(calculos.calcularPares(Number(numeroInicial), Number(numeroFinal)))
                        break
                    case '2':
                        console.log(calculos.calcularImpares(Number(numeroInicial), Number(numeroFinal)))
                        break
                    case '3':
                        console.log(calculos.calcularPares(Number(numeroInicial), Number(numeroFinal)))
                        console.log(calculos.calcularImpares(Number(numeroInicial), Number(numeroFinal)))
                        break
                    default:
                        console.log('ERRO: Opção inválida. Por favor, escolha uma opção válida (1, 2 ou 3).')
                }
            }else{
                console.log(status)
            }

            entradaDados.close()
        })
    })
})