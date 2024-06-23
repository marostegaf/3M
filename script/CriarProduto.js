import { conectaAPI } from "./ConectaAPI.js";

const formulario = document.querySelector(".formulario");

async function criarProduto(evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const preco = document.querySelector("[data-preco]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    try {
        await conectaAPI.criarProduto(nome, preco, imagem);
        window.location.href = "index.html"
    } catch (e) {
        alert(e);
    }
}

formulario.addEventListener("submit", evento => criarProduto(evento));