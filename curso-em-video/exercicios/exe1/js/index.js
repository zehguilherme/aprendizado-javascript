function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var horaAtual = data.getHours()  //hora atual do sistema
    var minutosAtuais = data.getMinutes()  //minutos atuais

    msg.innerHTML = `Agora são ${horaAtual}:${minutosAtuais}`

    if(horaAtual >= 0 && horaAtual < 12) { //Entre meia noite e meio dia (manhã)
        img.src = 'img/manha.png'
        document.body.style.background = '#ebd38a'
    }else if (horaAtual >= 12 && horaAtual <= 18) { //Tarde
        img.src = 'img/tarde.png'
        document.body.style.background = '#c3a396'
    } else {  //noite
        img.src = 'img/noite.png'
        document.body.style.background = '#1f2527'
    }
}

