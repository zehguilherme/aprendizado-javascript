// construtor Teacher() pega os mesmos parâmetros que o construtor Person() de onde ele está herdando, então é especificado todos eles como parâmetros na chamada call()

class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject, grade) {
        super(first, last, age, gender, interests);

        // subject and grade são específicos de Teacher
        this.subject = subject;
        this.grade = grade;
    }

    // Retorna o valor atual da variável
    get subject(){
        return this._subject;
    }

    // Altera o valor da variável para o qual ela define
    set subject(newSubject){
        this._subject = newSubject;
    }
}

let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Poções'], 'Artes das trevas', 5);

// console.log(snape.greeting());  //Hi! I'm Severus.

console.log(snape.subject);

snape.subject = 'Harry Potter'

console.log(snape.subject);
