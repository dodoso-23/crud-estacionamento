async function cadastroCarro(event){
    event.preventDefault()
    
    const nome = document.getElementById('nome').value 
    const email = document.getElementById('email').value
    const placa = document.getElementById('placa').value



    const data = {
        nome,
        email,
        placa
    }

    const response = await fetch('http://localhost:3004/registrar', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)

    })

    const result = await response.json()

    if (result.success){
        alert("Cadastrado realizado com sucesso!")
        window.location.href = 'listagem.html'
    } else {
        alert("Erro ao cadastrar")
    }
}