function Person(first, last, age, gender, interests) {
    this.name = {
      'first': first,
      'last' : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
      // First define a string, and make it equal to the part of the bio that we know will always be the same.
      var string = `${this.name.first} ${this.name.last} is ${this.age} years old. `;
      
      var pronoun;  // define a variable that will contain the pronoun part of the second sentence

      // check what the value of gender is, and set pronoun to an appropriate value in each case
      if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
        pronoun = 'He likes ';
      } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
        pronoun = 'She likes ';
      } else {
        pronoun = 'They like ';
      }

      string += pronoun;  // add the pronoun string on to the end of the main string

      // use another conditional to structure the last part of the second sentence depending on whether the number of interests is 1, 2, or 3
      if(this.interests.length === 1) {
        string += `${this.interests[0]}.`;
      } else if(this.interests.length === 2) {
        string += `${this.interests[0]} and ${this.interests[1]}.`;
      } else {
        // if there are more than 2 interests, we loop through them all, adding each one to the main string followed by a comma, except for the last one, which needs an and & a full stop
        for(var i = 0; i < this.interests.length; i++) {
          if(i === this.interests.length - 1) {
            string += ` and ${this.interests[i]}.`;
          } else {
            string += `${this.interests[i]}, `;
          }
        }
      }

      alert(string);  // finally, with the string built, we alert() it
    };
    this.greeting = function() {
      alert(`Hi! I'm ${this.name.first}.`);
    };
  };

  // toda a cadeia de herança foi atualizada dinamicamente, disponibilizando automaticamente esse novo método em todas as instâncias de objeto derivadas do construtor
  Person.prototype.farewell = function() {
    alert(`${this.name.first} has left the building. Bye for now!`);
  };

  let person1 = new Person('Tammi', 'Smith', 32, 'f', ['music', 'skiing', 'kickboxing', 'baseball']);

  // Object.valueOf() - valueOf é método do objeto Object
  // console.table(person1.valueOf());

  // console.log(Object.prototype)

  let person2 = Object.create(person1)
  // console.table(person2.__proto__)  //retorna person1

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  // A propriedade do construtor
  
  // console.log(person1.constructor)
  
  // se você tiver uma instância de objeto e desejar retornar o nome do construtor do qual ela é uma instância
  // console.log(person1.constructor.name)
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  // Modificando Protótipos
  
  console.log(person1.farewell())
  
  