import { conectaAPI } from "./ConectaAPI.js";

const cards = document.querySelector(".cards-container");

cards.addEventListener("click", async function(event) {
    if (event.target.classList.contains("delete-icon")) {
        const card = event.target.closest(".cards");
        const id = card.dataset.id;

        await conectaAPI.excluirProduto(id);
        card.remove();
    }
});
