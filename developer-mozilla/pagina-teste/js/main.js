let myImage = document.querySelector('img')

// Ao clicar no elemento imagem, será verificado se o caminho corresponde ao firefox ou superman
// Em caso do firefox, o caminho será alterado para o superman
myImage.onclick = function (){
    let mySrc = myImage.getAttribute('src')

    if(mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute('src','images/superman.png')
        
    } else {
        myImage.setAttribute('src','images/firefox-icon.png')
    }
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUsername (){
    let myName = prompt('Por favor, digite seu nome.')

    // localStorage: guarda dados no navegador para serem usados posteriormente
    localStorage.setItem('name', myName)

    myHeading.innerHTML = 'Mozilla is cool, ' + myName
}

// Caso o dado name não exista ainda (nome digitado pelo usuário)
if(!localStorage.getItem('name')){
    setUsername()  //função será chamada novamente para criá-lo (usuário figitar nome)
} else {
    let storedName = localStorage.getItem('name')  //atributo name (nome do usuário) é guardado numa variável
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName
}

myButton.onclick = function(){
    setUsername()
}