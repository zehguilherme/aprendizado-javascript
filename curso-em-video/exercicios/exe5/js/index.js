// Botão adicionar
let botaoAdicionar = document.querySelector('input[value="Adicionar"]')
botaoAdicionar.addEventListener('click', adicionar)

// Botão finalizar
let botaoFinalizar = document.querySelector('input[value="Finalizar"]')
botaoFinalizar.addEventListener('click', finalizar)

let numero = document.querySelector('input#inp-numero')               //input numero
let lista = document.querySelector('select#valor-selecionado')        //select (lista de itens)
let resultado = document.querySelector('div#d-resultado')             //id resultado
let numerosArray = []

// Verifica se é número
function isNumero(n) {
    if(Number(numero.value) < 1 || Number(numero.value) > 100) {  //numero está fora do intervalo (entre 1 e 100)
        return false
    } else {
        return true
    }
}

// Verifica se nº está na lista (vetor)
function isLista(numero, lista) {
    if(lista.indexOf(Number(numero)) != -1) {  //valor não foi encontrado na lista
        return true
    } else {
        return false
    }
}

// Adicionar elementos na lista
function adicionar() {

    if(isNumero(numero.value) && !isLista(numero.value, numerosArray)) {  //verifica se é um nº e se valor já não está na lista de valores
        
        numerosArray.push(Number(numero.value))  //adiciona numero do input no vetor
        let item = document.createElement('option')

        item.text = numero.value

        lista.appendChild(item)
        resultado.innerHTML = ''  //limpar resultado ao adicionar um novo número

    } else {
        alert('Número fora do intervalo e/ou já se encontra na lista')
    }
    
    numero.value = ''
    numero.focus()  //mantem o cursor nesse elemento

}

function finalizar() {
    
    if(lista.length == 0) {  //se vetor estiver vazio
        alert('Adicione números na lista antes de finalizar')
    } else {

        let totalElementos = lista.length
        let maiorNumero = numerosArray[0]  //1º valor do vetor
        let menorNumero = numerosArray[0]  //1º valor do vetor
        let soma = 0
        let media = 0

        for(let pos in numerosArray) {  //percorrer todo o vetor

            soma += numerosArray[pos]
            
            if(numerosArray[pos] > maiorNumero)  //verifica o maior valor no array
            maiorNumero = numerosArray[pos]
            
            if(numerosArray[pos] < menorNumero)  //Verifica o menor valor no array
            menorNumero = numerosArray[pos]
        }

        media = soma/totalElementos

        resultado.innerHTML = ''
        resultado.innerHTML += `<p> Ao todo temos: ${totalElementos} elemento(s)</p>`
        resultado.innerHTML += `<p> O maior elemento é ${maiorNumero}</p>`
        resultado.innerHTML += `<p> O menor elemento é ${menorNumero}</p>`
        resultado.innerHTML += `<p> A soma dos valores é ${soma}</p>`
        resultado.innerHTML += `<p> A média dos valores é ${media}</p>`

    }

}