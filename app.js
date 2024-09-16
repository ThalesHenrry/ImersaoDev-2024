function pesquisar() {
    console.log(anime);

    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(!campoPesquisa){
        section.innerHTML = "<p>Nenhum anime encontrado!</p>"
        return
    }
    
    let resultado = "";
    let titulo = "";
    let sinopse = "";
    let tags = "";
    
    for (let item of anime) {
        titulo = item.titulo.toLowerCase()
        sinopse = item.sinopse.toLowerCase()
        tags = item.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultado += `
        <div class="item-resultado">
            <img class="imagem-anime" src="${item.imagem}" alt="${item.titulo}">
            <div class="texto-anime">
                <h2>${item.titulo}</h2>
                <p class="descricao-meta">${item.sinopse}</p>
                <a href="https://pt.wikipedia.org/wiki/${item.titulo.replace(/\s+/g, '_')}" target="_blank">Mais informações</a>
            </div>
        </div>
        `;
        }

        if (!resultado){
            resultado = "<p>Anime não encontrado</p>"
        }
    }
    
    section.innerHTML = resultado

}




