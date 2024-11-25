function pesquisar() {
    // Função responsável por buscar e exibir os resultados da pesquisa.
    // Obtém a seção onde os resultados serão inseridos.
    let section = document.getElementById("resultados-pesquisa"); 

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
      section.innerHTML = "<p>Nenhum resultado foi encontrado. Digite algum valor no campo de pesquisa.</p>";
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase();
 
    // Inicializa uma string vazia para armazenar os resultados formatados em HTML.
    let resultados = "";
    let titulo = ""
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada item do array 'tecnicasDeMergulho'.
    for (let dado of tecnicasDeMergulho) {

      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();

      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      
        // Para cada item, cria um novo elemento HTML com as informações do item.
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <div class="link__youtube">
              <img src="./img/youtube_icon.svg" alt="ícone youtube" class="imagem__youtube">
              <a href=${dado.link} target="_blank">Vídeo demonstração.</a>
            </div>
          </div>`;
      }

      if (!resultados) {
        resultados = `<p> Nenhum resultado encontrado para <strong> ${campoPesquisa}</strong>.</p>`
      }
    }
  
    // Insere os resultados formatados no HTML da seção.
    section.innerHTML = resultados;
  }