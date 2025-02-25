const express = require('express') //soliicta o express
app = express() //atribui o express na variável app
const cors = require('cors')
const PORT = 3001
app.use(cors())

app.get('/', (req, res) => {
    res.send("hello world")
})


app.listen(PORT, () =>{
    console.log(`servidor rodando na porta ${PORT}`)
});

app.post('/registrar', (req, res) => {
    let params = Array(
        request.body.placa,
        request.body.modelo,
        request.body.nome_cliente, 
        request.body.email
    )

    let query = `INSRT INTO Carros(placa, modelo, nome_cliente, email) VALUES(?, ?, ?, ?)`

    let connection
})