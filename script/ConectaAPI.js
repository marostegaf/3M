async function listarProdutos() {
    const respostaDaAPI = await fetch("http://localhost:3000/produtos");
    const conexarConvertida = await respostaDaAPI.json();

    return conexarConvertida;
}

async function criarProduto(nome, preco, imagem) {
    const respostaDaAPI = await fetch("http://localhost:3000/produtos", {
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
    const respostaDaAPI = await fetch(`http://localhost:3000/produtos/${id}`, {
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
