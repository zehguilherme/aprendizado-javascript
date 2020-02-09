let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 56,
    engordar(p = 0){
        console.log('Já era');
        this.peso += p
    }
}

amigo.engordar(10)

console.log();