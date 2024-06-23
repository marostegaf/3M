import { conectaAPI } from "./ConectaAPI.js";

const adicionarCards = document.querySelector(".cards-adicionar");

export default function mostrarProduto(id, nome, preco, imagem) {
    const produto = document.createElement("li");
    produto.className = "cards";
    produto.dataset.id = id;
    
    produto.innerHTML = `
                <div>
                    <img src="${imagem}" alt="">
                    <i class="fas fa-trash-alt delete-icon"></i>
                </div>
                <h2>${nome}</h2>
                <p>R$ ${preco},90</p>
    `
        return produto;
    }

async function listaDeProdutos() {
    try {
        const listaAPI = await conectaAPI.listarProdutos();
        listaAPI.forEach(produto => adicionarCards.appendChild(
                    mostrarProduto(produto.id, produto.nome, produto.preco, produto.imagem)
            ))
        } catch {
            adicionarCards.innerHTML = `<h2 class="mensagem__titulo"> Não foi possível carregar os produtos</h2>`
    }
}

listaDeProdutos();
