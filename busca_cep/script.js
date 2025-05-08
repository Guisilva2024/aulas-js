async function carregarCEP() {
    const cepDigitado = document.getElementById('cep').value
    const urLAPI = `https://viacep.com.br/ws/${cepDigitado}/json/`

    const resposta = await fetch(urLAPI)
    const dadosCEP = await resposta.json()
    
    const inputLogradouro = document.getElementById('logradouro')
    const inputBairro = document.getElementById('bairro')
    const inputLocalidade = document.getElementById('cidade')
    const inputUF = document.getElementById('uf')

    inputLogradouro.value = dadosCEP.logradouro
    inputBairro.value = dadosCEP.bairro
    inputLocalidade.value = dadosCEP.localidade
    inputUF.value = dadosCEP.uf
    
}