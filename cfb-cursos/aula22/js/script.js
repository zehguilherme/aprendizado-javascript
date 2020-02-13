try {
    // num tem valor máximo de 10
    var num = prompt('Digite um número')

    if(num > 10){
        // criar um novo erro manualmente
        throw new Error('Valor inválido, o valor máximo é 10')
    }
} catch (error) {
    console.log(`ERRO: ${error.message}`)
    num = 10
} finally {  //sempre é executado
    document.write(`<br>Número ${num}`)
}