function checaIdade(idade) {
  // retornar uma promisse

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (idade > 18) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}

checaIdade(15)
  .then(function() {
    console.log("Maior de 18");
  })

  .catch(function() {
    console.log("Menor de 18");
  });
