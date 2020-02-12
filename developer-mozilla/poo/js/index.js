function Person(first, last, age, gender, interests) {
    this.name = {
        'first': first,
        'last': last
    }
    this.age = age
    this.gender = gender
    this.interests = interests
    this.bio = function() {
        let pronome = ''

        if(this.gender === 'masculino'){
            pronome = 'Ele'
        } else {
            pronome = 'Ela'
        }

        alert(`${this.name.first} ${this.name.last} tem ${this.age} anos de idade. ${pronome} gosta de ${this.interests}.`)
    }
    this.greeting = function() {
        alert(`Olá eu sou ${this.name.first}.`)
    }
}

let person1 = new Person('José', 'Guilherme', 22, 'masculino', ['games', ' computador'])
let person2 = new Person('Ana', 'Banana', 22, 'feminino', ['arte', ' maquiagem', ' teste2', ' teste3 '])

// console.log(person1.bio())
// console.log(person2.bio())

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Outras maneiras de criar instâncias de objeto

// construtor Object()

let person3 = new Object()  //armazena um objeto vazio em person1

person3.name = 'Antonio'
person3['age'] = 22
person3.greeting = function (){
    alert(`Teste nome ${this.name}`)
}

// Passar objeto para o construtor

let person4 = new Object({
    name: 'José',
    age: 22,
    greeting: function(){
        alert(`Teste nome ${this.name}`)
    }
})

// console.log(person4.greeting());

// Método create (Criar instâncias em objetos sem criar construtor deles)

person2 = Object.create(person1)  //criada a partir de pessoa1

// console.log(person2.name)
console.log(person2.greeting())
