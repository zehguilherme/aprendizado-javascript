/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable space-before-function-paren */

const github_username = document.querySelector('input#user') // input

// Botão adicionar
const btAdd = document
  .querySelector('button.add')
  .addEventListener('click', () => {
    const loadingElement = document.createElement('li')
    loadingElement.textContent = 'Carregando...'

    const brElement = document.createElement('br')

    document.querySelector('ul.list').appendChild(loadingElement) // coloca a linha "Carregando" na ul
    document.querySelector('ul.list').before(brElement) // coloca um br antes da ul

    axios.get(`https://api.github.com/users/${github_username.value}/repos`)

      .then(response => {
        document.querySelector('ul.list').removeChild(loadingElement) // remove "Carregando" ao entrar no response
        document.querySelector('div.form').removeChild(brElement)

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
        for (let i = 0; i < response.data.length; i++) {
          const itemElement = document.createElement('li') // criação de uma linha
          const linkElement = document.createElement('a') // link
          const linkAttribute = document.createAttribute('href') // href

          linkAttribute.value = response.data[i].html_url // atribui a URL dos repositorios a cada href
          linkElement.setAttributeNode(linkAttribute) // coloca os href dentro do link
          linkElement.textContent = response.data[i].name // Pega os nomes dos repositórios e coloca no nó de texto do link ao lado do href

          document.querySelector('ul.list').appendChild(itemElement) // coloca as linhas na ul

          itemElement.appendChild(linkElement) // coloca os links nas linhas
        }
      })

      .catch(() => {
        alert('Erro na requisição!')

        document.querySelector('ul.list').removeChild(loadingElement) // remove "Carregando" ao entrar no response
        document.querySelector('div.form').removeChild(brElement)

        clearInput()
      })
  })

// Botão limpar
const btClear = document
  .querySelector('button.clear')
  .addEventListener('click', () => {
    const lines = document.querySelector('li')

    // Se as linhas existem, são apagadas
    if (lines) {
      clearLines()
    } else {
      alert('Nenhum repositório encontrado para ser apagado')
    }

    // Verifica se o input está vazio
    if (github_username.value === '') {
      alert('Não foi encontrado nada digitado no campo')
    } else {
      clearInput()
    }
  })

// Limpa o input e coloca o foco nele
function clearInput() {
  github_username.value = ''
  github_username.focus()
}

// Limpa as linhas em que estão os repositórios
function clearLines() {
  const list = document.querySelector('ul.list')

  // Enquanto a ul tiver alguma li (filha de ul)
  while (list.firstChild) {
    list.removeChild(list.firstChild)
  }
}
