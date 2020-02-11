let pessoa = {
    nome: {
        primeiro: 'José',
        ultimo: 'André'
    },
    idade: 22,
    sexo: 'masculino',
    interesses: ['games', 'computação'],
    bio: function () {
        alert(`${this.nome.primeiro}, ${this.nome.ultimo} tem ${this.idade} anos de idade. Ele gosta de ${this.interesses[0]} e ${this.interesses[1]}.`)
    },
    saudacao: function(){
        alert(`Oi! Eu sou ${this.nome}.`)
    }
    
}

// console.log(pessoa.nome.primeiro);
// OU
// console.log(pessoa['nome']['primeiro']);

pessoa.idade = 45

pessoa.nome.ultimo = 'Francisco'

// Novo
pessoa.olhos = 'castanho'
pessoa.despedida = function() {
    alert('Adeus a todos')
}

// console.log(`${pessoa.idade} ${pessoa.nome.ultimo}`);
// console.log(pessoa.olhos);
// console.log(pessoa.despedida());

// console.log(pessoa.bio());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Exemplo: usuários armazenam tipos de valores personalizados em seus dados de 'pessoa' digitando o nome e o valor do membro em dois inputs de texto
let nameValue = '1.73'
let nameInput = 'altura'

let myDataName = nameInput.value
let myDataValue = nameValue.value

pessoa[myDataName] = myDataValue

pessoa.altura

// console.log(pessoa.altura);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// THIS

// A palavra-chave this se refere ao objeto atual em que o código está sendo escrito