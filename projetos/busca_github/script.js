async function buscarUsuario() {
    const nomeDigitado = document.getElementById("usuario").value

    const urlAPI = `https://api.github.com/users/${nomeDigitado}`
    console.log(nomeDigitado)
    console.log(urlAPI)
    const resposta = await fetch(urlAPI)
    const informacoesDoUsuario = await resposta.json()
    const divResultado = document.getElementById("resultado")
    divResultado.innerHTML = `<img src="${informacoesDoUsuario.avatar_url}"alt="">`;
}