function pesquisar() {
    // Seleciona o elemento HTML com o ID "resultados-pesquisa" e armazena na variável section.
    let section = document.getElementById("resultados-pesquisa");
    // Exibe no console do navegador o elemento selecionado para fins de depuração.

    let campoPesquisa = document.getElementById("Campo-pesquisa").value

    console.log(campoPesquisa)
    if(campoPesquisa == ""){
        section.innerHTML = "<p>Nada foi encontrado. Digite um nome valido</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada elemento (dado) da lista de dados (dados).
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.Descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        //se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa)||descricao.includes(campoPesquisa)||tags.includes(campoPesquisa)){
      // Concatena o HTML de cada resultado à string 'resultados'.
      // Utilizamos template literals (``) para facilitar a inserção de variáveis dentro de strings.
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.Descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
        }
    }

    if(!resultados){
        resultados = "<p>Nada foi encontrado.</p>"
        return
    }
  
    // Atribui o conteúdo HTML gerado ao elemento section.
    section.innerHTML = resultados;
  }