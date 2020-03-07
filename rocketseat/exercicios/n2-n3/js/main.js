const github_username = document.querySelector("input#user"); //input

// Botão adicionar
const btAdd = document
  .querySelector("button.add")
  .addEventListener("click", () => {
    axios
      .get(`https://api.github.com/users/${github_username.value}/repos`)

      .then(response => {
        // Verifica se está inserindo os mesmo repositórios mais de uma vez (mesmo usuário)
        // if (
        //   linkAttribute.value == response.data[i].html_url ||
        //   linkElement.textContent == response.data[i].name
        // ) {
        //   alert(
        //     "ERRO! \nTentativa de exibição dos repositórios do mesmo usuário anterior"
        //   );
        //   clearInput();
        //   clearLines();
        // }

        // Percorre o vetor com as informações sobre os repositórios vindo do response
        for (var i = 0; i < response.data.length; i++) {
          var itemElement = document.createElement("li"); //criação de uma linha
          var linkElement = document.createElement("a"); //link
          var linkAttribute = document.createAttribute("href"); //href

          linkAttribute.value = response.data[i].html_url; //atribui a URL dos repositorios a cada href
          linkElement.setAttributeNode(linkAttribute); //coloca os href dentro do link
          linkElement.textContent = response.data[i].name; //Pega os nomes dos repositórios e coloca no nó de texto do link ao lado do href

          document.querySelector("ul.list").appendChild(itemElement); //coloca as linhas na ul

          itemElement.appendChild(linkElement); //coloca os links nas linhas
        }
      })

      .catch(error => {
        alert(
          `Erro na requisição! \nUsuário ${github_username.value} não encontrado!`
        );
        // console.log("Erro na requisição");

        clearInput();
      });
  });

// Botão limpar
const btClear = document
  .querySelector("button.clear")
  .addEventListener("click", () => {
    let lines = document.querySelector("li");

    // Se as linhas existem, são apagadas
    if (lines) {
      clearLines();
    } else {
      alert("Nenhuma linha encontrada para ser apagada");
    }

    // Verifica se o input está vazio
    if (github_username.value === "") {
      alert("Nenhum usuário a ser apagado do input");
    } else {
      clearInput();
    }
  });

// Limpa o input e coloca o foco nele
function clearInput() {
  github_username.value = "";
  github_username.focus();
}

// Limpa as linhas em que estão os repositórios
function clearLines() {
  let list = document.querySelector("ul.list");

  // Enquanto a ul tiver alguma li (filha de ul)
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}
