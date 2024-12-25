// Carregando dependências

const express = require("express");
const app = express();

// Rotas

app.get("/", (req, res) => {
  res.send("Olá mundo");
});

// Rodando servidor (Sempre a última linha do código)

app.listen(8089, () => {
  console.log("Server is running on port 8089");
});
