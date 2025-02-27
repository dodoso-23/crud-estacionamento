const express = require('express') //soliicta o express
app = express() //atribui o express na variável app
const cors = require('cors')
const connection = require('./db.js')
const PORT = 3004
app.use(cors())

app.use(express.json())

app.listen(PORT, () =>{
    console.log(`servidor rodando na porta ${PORT}`)
});

app.get('/', (req, res) => {
    res.send("hello world")
});


app.post('/registrar', (req, res) => {

    const { placa, modelo, nome_cliente, email } = req.body

//trim() é um método que remove espaços em branco no início e no final da string, uso para verificar se o usuário não irá passar apenas um espaço em branco, pois ele contaria como string

    if (!placa || !modelo || !nome_cliente || !email || placa.trim() === "" || modelo.trim() === "" || nome_cliente.trim() === "" || email.trim() === "")  {
       return res.status(400).json({
            success: false,
            message: "Todos os campos são obrigatórios!"
        })
    } 

    const params = [placa, modelo, nome_cliente, email]

    const query = `INSERT INTO Carros(placa, modelo, nome_cliente, email) VALUES (?, ?, ?, ?)`

   

    connection.query(query, params, (err, result) => {
       if (err) {
        return res.status(500).json({
            success:false,
            message: "Erro ao cadastrar",
            data: err
        })
       } else {
        return res.status(200).json({
            success:true,
            message:"Cadastro concluído!",
            data: result
    
        })
       }
    })
})

app.get('/exibir', (req, res) => {

    connection.query = `SELECT * FROM Carros`

    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ 
                success: false,
                message: 'Erro ao buscar carro no banco de dados' })
        }
        res.json({ success: true, data: results })
    })
    
})


app.delete('/deletar', (req, res) => {

    connection.query = `DELTE FROM Carros WHERE id = ?`

    connection.query(query, (err, results) => {
        if (err){ 
            return res.status(500).json({
                success: false,
                message: 'Erro ao deletar carro do banco de dados'

            })
        }
    })
})


app.put('/editar/:id', (req, res) => {
    const {id} = req.parmas
    const {placa, mdoelo, nome_cliente, email} = req.body

    connection.query = `UPDATE Cliente SET placa =?  modelo = ? nome_cliente = ? email = ? WHERE id = ?`

})