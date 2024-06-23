async function listarProdutos() {
    const respostaDaAPI = await fetch("https://66785a280bd45250561e65cd.mockapi.io/api/products");
    const conexarConvertida = await respostaDaAPI.json();

    return conexarConvertida;
}

async function criarProduto(nome, preco, imagem) {
    const respostaDaAPI = await fetch("https://66785a280bd45250561e65cd.mockapi.io/api/products", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            imagem: imagem
        })
    })

    if(!respostaDaAPI.ok) {
        throw Error("Não foi possível criar esse produto")
    }

    const conexarConvertida = respostaDaAPI.json();
    return conexarConvertida;
}

async function excluirProduto(id) {
    const respostaDaAPI = await fetch(`https://66785a280bd45250561e65cd.mockapi.io/api/products/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    })

    return respostaDaAPI;
}

export const conectaAPI = {
    listarProdutos,
    criarProduto,
    excluirProduto
}
