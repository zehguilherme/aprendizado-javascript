var botao = document.querySelector('input[type = "button"]')

botao.addEventListener('click', gerarTabuada)

function gerarTabuada() {

    let numero = document.querySelector('input#numero')
    let resultado = document.querySelector('select[name = "tabuada"]')

    if(Number(numero.value == '')) {
        alert('Digite um número')
    } else {
        let n = Number(numero.value)

        resultado.innerHTML = ''

        // tabuada 0 a 10 do número digitado
        for(let i = 0; i <= 10; i++) {

            let item = document.createElement('option')  //criar o elemento option (cada linha dentro do select)

            item.text = `${i} X ${n} = ${i * n}`
            item.value = `resultado-${i}`  //gera um valor 'value' para cada option criado
            console.log(item);
            resultado.appendChild(item)
        }
    }
}