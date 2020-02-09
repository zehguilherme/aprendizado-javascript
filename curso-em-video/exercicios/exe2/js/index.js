var verif = document.querySelector('input[type="button"]')

verif.addEventListener('click', verificar)

function verificar() {

    var data = new Date()

    var anoAtual = data.getFullYear() // ano atual do sistema

    var formAno = document.querySelector('input#ano')

    var resultado = document.querySelector('div#res')

    if (formAno.value.length == 0 || formAno.value > anoAtual) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sex = document.querySelector('input[name = "sexo"]')

        var idade = anoAtual - Number(formAno.value)

        var genero = ''

        var img = document.createElement('img') // criar elemento HTML
        img.setAttribute('id', 'foto') // cria o atributo id para ela

        if (sex.checked) {
            genero = 'homem'

            if (idade >= 0 && idade < 10) { // criança
                img.setAttribute('src', 'https://images.unsplash.com/photo-1494434257261-ba3f592ac43f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80')
            } else if (idade < 21) { // jovem
                img.setAttribute('src', 'https://images.unsplash.com/photo-1536548665027-b96d34a005ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')
            } else if (idade < 60) { // adulto
                img.setAttribute('src', 'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')
            } else { // idoso
                img.setAttribute('src', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')
            }
        } else {
            genero = 'mulher'

            if (idade >= 0 && idade < 10) { // criança
                img.setAttribute('src', 'https://images.unsplash.com/photo-1519308824948-e00cc00057d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')
            } else if (idade < 21) { // jovem
                img.setAttribute('src', 'https://images.unsplash.com/photo-1567777626373-fb734749506d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')
            } else if (idade < 60) { // adulto
                img.setAttribute('src', 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80')
            } else { // idoso
                img.setAttribute('src', 'https://images.unsplash.com/photo-1496672254107-b07a26403885?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')
            }
        } resultado.style.textAlign = 'center'
        resultado.style.padding = '15px 0 15px 0'
        resultado.innerHTML = `Detectamos um(a) ${genero} de ${idade} ano(s)`
        resultado.appendChild(img) // adicionar elemento
    }


}
