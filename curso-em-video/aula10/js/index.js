let a = document.querySelector('div#area')

a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar () {
    a.style.background = 'red'
}

function entrar () {
    a.style.color = 'black'
}

function sair () {
    a.style.color = 'yellow'
    a.style.background = 'green'
}