const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body")
const imagemBotaoTracaDeTema = document.querySelector(".imagem-botao");


botaoAlterarTema.addEventListener("click", () => {
    const modoEsculoEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEsculoEstaAtivo) {
        imagemBotaoTracaDeTema.setAttribute("src", "./src/imagem/sol.png");
    } else {
        imagemBotaoTracaDeTema.setAttribute("src", "./src/imagem/galaxia.png");
    }
});
