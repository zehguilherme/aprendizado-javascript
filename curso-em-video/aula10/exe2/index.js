var botao = document.querySelector('input[type="button"]')

if(botao) {
    botao.addEventListener('click', somar)
}

function somar() {
    var txtn1 = document.querySelector('input#txtn1')
    var txtn2 = document.querySelector('input#txtn2')
    var res = document.querySelector('div#res')

    var n1 = Number(txtn1.value)  //conversão string para número
    var n2 = Number(txtn2.value)
    
    res.innerHTML = `A soma entre ${n1} e ${n2} é ${n1 + n2}`
}
