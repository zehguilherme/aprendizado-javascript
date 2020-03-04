axios
  .get("http://api.github.com/users/zehguilherme")

  //sucesso: resolve.then()
  .then(function(response) {
    console.log(response);
  })

  //erro: reject.catch()
  .catch(function(error) {
    console.warn(error);
  });
