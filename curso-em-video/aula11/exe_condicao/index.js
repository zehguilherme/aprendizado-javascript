var botao = document.getElementById('bt')
var resultado = document.getElementById('resultado')

botao.addEventListener('click', verificarPais)

function verificarPais () {
    
    var nomePais = document.getElementById('nomePais')
    
    if(nomePais == 'Brasil') {
        resultado.innerHTML = `Seu país é ${nomePais} e você é nativo`
    }else {
        resultado.innerHTML = `Seu país é ${nomePais} e você é estrangeiro`
    }

}