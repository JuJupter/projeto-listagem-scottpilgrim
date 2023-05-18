const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagembotaoTrocadeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        imagembotaoTrocadeTema.setAttribute("src", "./src/images/light.png")
    } else {
        imagembotaoTrocadeTema.setAttribute("src", "./src/images/dark.png")
    }
});
