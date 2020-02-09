// var nome =  prompt('Qual é seu nome')

// alert('Bem vindo ' + nome) //concatenar com +

/**************************************************************************************/

// var n1 = parseFloat(prompt('Digite um número: '))    //converter string para float
// var n2 = parseFloat(prompt('Digite outro número: '))

// var n1 = Number(prompt('Digite um número: '))        //number
// var n2 = Number(prompt('Digite outro número: '))

// var soma = n1 + n2

// alert(`A soma entre ${n1} e ${n2} é ${soma}`)

/**************************************************************************************/

var nome = prompt('Qual é o seu nome?')

document.writeln(`Olá ${nome}, seu nome tem ${nome.length} letras.<br>`)       //tamanho da string

document.writeln(`Seu nome fica em maiúsculo como ${nome.toUpperCase()}<br>`)  //string em miúsculo

document.writeln(`Seu nome fica em minúsculo como ${nome.toLowerCase()}<br><br>`)      //string em minúsculo

var valor = 1500

document.writeln(`O valor ${valor} em reais é ${valor.toLocaleString('pt-BR', style: 'currency', currency: 'BRL')}`)
