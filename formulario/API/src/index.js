import express from 'express';
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("Tá rodando, graças a deus")
});

app.listen(port, () => {
    console.log('Servidor escutando na porta 3000');
});
