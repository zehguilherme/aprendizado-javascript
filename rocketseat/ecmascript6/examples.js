/* eslint-disable spaced-comment */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable space-before-function-paren */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Usando webpack

// import { soma, subtracao } from './funcoes'
import soma from './soma'

console.log(soma(1, 2))
// console.log(subtracao(6, 3))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class List {
  constructor() {
    this.data = []
  }

  add (data) {
    this.data.push(data)
    // console.log(this.data)
  }
}

class TodoList extends List {
  constructor() {
    super()

    this.usuario = 'José Guilherme'
  }

  mostraUsuario () {
    // console.log(this.usuario)
  }
}

const minhaLista = new TodoList()

document.querySelector('button#novoToDo').onclick = function () {
  minhaLista.add('Novo toDo')
}

// minhaLista.mostraUsuario()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Vetores

const arr = [1, 2, 3, 4]

// Map
const newArr = arr.map((item, index) => item + index)

// console.log(newArr)

// Reduce

const add = arr.reduce((total, proximoValor) => {
  return total + proximoValor
})

// console.log(add)

// Filter

const filter = arr.filter((item) => {
  return item % 2 === 0 //retorna apenas os itens que são pares
})

// console.log(filter)

// Find

const find = arr.find((item) => {
  return item === 4
})

// console.log(find)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Desestruturação

const usuario = {
  nome: 'José Guilherme',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
}

function mostraNome ({ nome }) {
  console.log(nome)
}

// mostraNome(usuario)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Operadores Rest/Spread

// REST

const user = {
  nome: 'José Guilherme',
  idade: '23',
  empresa: 'TEste'
}

const { nome, ...resto } = usuario

// console.log(nome)
// console.log(resto)

// SPREAD

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [...arr1, ...arr2] //copia cada informação dos 2 arrays

const usuario1 = {
  nome: 'José Guilherme',
  idade: '23'
}

const usuario2 = { ...usuario1, nome: 'Francisco' } //pega todas as propriedades do objeto1 menos a 'nome' que foi sobreposta por uma nova
// console.log(usuario2)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Object short syntax

const nam = 'José Guilherme'
const idade = 23

const u = {
  nam,
  idade,
  empresa: 'Nenhuma'
}
