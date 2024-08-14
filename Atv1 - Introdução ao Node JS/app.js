const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


app.get('/cadastro/:nome/:sobrenome/:idade', (req, res) => res.send("Ola " + req.params.nome + " " + req.params.sobrenome +
    ", tudo bem? . Sua idade é: " + req.params.idade))
