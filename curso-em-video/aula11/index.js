var botao = document.querySelector('input[type="button"]')

if(botao) {
    botao.addEventListener('click', calcularVelocidade)
}

function calcularVelocidade() {
    var txtVel = document.querySelector('input#txtVel')
    var res = document.querySelector('div#res')

    var velocidade = Number(txtVel.value)  //pega o valor do campo digitado
    
    res.innerHTML = `<p>Sua velocidade é <strong>${velocidade}</strong> Km/h</p>`
    res.innerHTML += `<p>Dirija com cuidado</p>`
}