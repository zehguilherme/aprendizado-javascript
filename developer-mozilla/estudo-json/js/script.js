const header = document.querySelector('header');
const section = document.querySelector('section');

// armazenar a URL do JSON que será recuperada em uma variável
var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

var request = new XMLHttpRequest();  // Criação de solicitação a partir da criação de uma nova instância de objeto de solicitação a partir do construtor XMLHttpRequest

request.open('GET', requestURL);  // Abrir uma nova solicitação

request.responseType = 'json';  //definicação do responseType e internamente deve ser convertido em objeto javascript
// request.responseType = 'text';  //pega string
request.send();                 //envio da solicitação

// requisição é executada quando o evento de carregamento é executado
request.onload = function(){
    var superHeroes = request.response;  //armazenando a resposta (string) do pedido em superheroes, essa variável vai conter o objeto javascript com base json
    populateHeader(superHeroes);         //objeto é passado para a função que preencherá o <header> com os dados corretos
    showHeroes(superHeroes);             //cria uma lista de informações para cada herói e a inserirá na <section>
}

// Preencher o cabeçalho
function populateHeader(jsonObj){
    let myH1 = document.createElement('h1');
    myH1.innerHTML = jsonObj['squadName']
    header.appendChild(myH1);

    let myPara = document.createElement('p');
    myPara.innerHTML = `Hometown: ${jsonObj['homeTown']} // Formed: ${jsonObj['formed']}`;
    header.appendChild(myPara);
}

// Cartões de informações dos heróis
function showHeroes(){
    let heroes = jsonObj['members'];

    // Percorrer cada objeto da matriz
    for(let i = 0; i < heroes.lenght; i++){
        let myArticle = document.createElement('article');
        let myH2 = document.createElement('h2');
        let myPara1 = document.createElement('p');
        let myPara2 = document.createElement('p');
        let myPara3 = document.createElement('p');
        let myList = document.createElement('ul');

        myH2.textContent = heroes[i].name;  //nome do herói atual
        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        myPara2.textContent = 'Age: ' + heroes[i].age;
        myPara3.textContent = 'Superpowers:';
            
        var superPowers = heroes[i].powers;             //matriz com os poderes do herói atual
        for (var j = 0; j < superPowers.length; j++) {  //percorre os poderes
          var listItem = document.createElement('li');  //li para cada um deles
          listItem.textContent = superPowers[j];
          myList.appendChild(listItem);                 //coloca listItem dentro de ul
        }
    
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
    
        section.appendChild(myArticle);
    }
}

// Conversão de objetos javascript em string JSON
let myJSON = {
    "name": "José Guilherme",
    "age": "23"
};

console.log(myJSON)

let myString = JSON.stringify(myJSON)

console.log(myString);