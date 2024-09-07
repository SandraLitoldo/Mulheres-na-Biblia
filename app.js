function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
   
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    //se campoPesquisa for uma string sem nada
    if (!campoPesquisa ) {
        section.innerHTML = "<p>Nada foi encontrado.</p>"
        return
    }
    
    campoPesquisa = campoPesquisa.toLowerCase()
    
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let personagem = "";
    let historia = "";
    let tags = "";
    
    // Itera sobre cada dado na lista de dados 
    for (let dado of dados) {
        personagem = dado.personagem.toLowerCase()
        historia = dado.historia.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se personagem includes campoPesquia
        if(personagem.includes(campoPesquisa)||historia.includes(campoPesquisa) || tags.includes(campoPesquisa)){
           // cria um novo elemento
           resultados += `
          <div class="item-resultado">
              <h2>
              <a href="#" target="_blank">${dado.personagem}</a>
              </h2>
              <p class="descricao-meta">${dado.historia}</p>
              <a href=${dado.link} target="_blank">Leia a Bíblia online</a>
          </div>
          `;
        }
     
     
    }
      if (!resultados) {
          resultados = "<p>Nada foi encontrado. Digite uma entrada válida.</p>"
    }
    
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
    //console.log("clicou"); // Loga uma mensagem no console para indicar que a função foi executada
  }


