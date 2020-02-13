// Função construtora

// construtor Teacher() pega os mesmos parâmetros que o construtor Person() de onde ele está herdando, então é especificado todos eles como parâmetros na chamada call()

function Teacher(first, last, age, gender, interests, subject) {

    // call: permite chamar uma função definida em outro lugar, mas no contexto atual
    // this: valor que deseja usar ao executar a função
    Person.call(this, first, last, age, gender,interests)

    this.subject = subject
}