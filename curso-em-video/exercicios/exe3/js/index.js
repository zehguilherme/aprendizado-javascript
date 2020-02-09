var soma = document.querySelector('input.somar')

soma.addEventListener('click', somar)

function somar() {

    let inicio = document.querySelector('input#inicio')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let resultado = document.querySelector('div#resultado')

    if(inicio.value.length == 0  || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = 'Impossível contar'
    } else {
        resultado.innerHTML = 'Contando <br><br>'

        // Passo <= 0
        if(Number(passo.value) <= 0) {
            passo.value = 1
        }

        // inicio < fim
        if(inicio.value < fim.value) {
            // Contagem crescente
            for(var i = Number(inicio.value); i <= Number(fim.value); i += Number(passo.value)) {  //contador recebe ele mesmo + passo
                resultado.innerHTML += ` ${i} \u{1F449} `
            }
        } else {  //inicio > fim
            // Contagem decrescente
            for(var i = Number(inicio.value); i >= Number(fim.value); i -= Number(passo.value)) {
                resultado.innerHTML += ` ${i} \u{1F449} `
            }
        }

        resultado.innerHTML += `\u{1F3C1}`
    }


}