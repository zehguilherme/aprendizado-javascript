const xhr = new XMLHttpRequest(); //da acesso ao ajax

xhr.open("GET", "https://api.github.com/users/zehguilherme"); //buscar os dados
xhr.send(null);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    //4: quando resposta retorna

    console.log(JSON.parse(xhr.responseText));
  }
};
