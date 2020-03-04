const myPromisse = function() {
  //resolve: retorna quando foi obtido sucesso
  //reject: retorna quando não foi obtido sucesso
  return new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.github.com/users/zehguilherme");
    xhr.send(null);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        // retorna o resultado da promisse

        if (xhr.status === 200) {
          // sucesso
          resolve(JSON.parse(xhr.responseText));
        } else {
          //erro
          reject("Erro na requisição");
        }
      }
    };
  });
};

//sucesso: resolve.then()
myPromisse().then(function(response) {
  console.log(response);
});

//erro: reject.catch()
myPromisse().catch(function(error) {
  console.warn(error);
});
