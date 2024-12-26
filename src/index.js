// Carregando dependências

const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Função para ler requisições em JSON

app.use(express.json());

// Criando o model

const Film = mongoose.model("Film", {
  title: String,
  description: String,
  image_url: String,
  trailer_url: String,
});

// Criando um novo filme

app.post("/", async (req, res) => {
  const film = new Film({
    title: req.body.title,
    description: req.body.description,
    image_url: req.body.image_url,
    trailer_url: req.body.trailer_url,
  });
  await film.save().then(() => {
    res.send("Filme salvo com sucesso");
  });
});

// Rotas

app.get("/", async (req, res) => {
  const films = await Film.find();
  res.send(films);
});

app.delete("/:id", async (req, res) => {
  // Função para encontra pelo id e deletar o filme
  const films = await Film.findByIdAndDelete(req.params.id);
  res.send(films);
});

app.put("/:id", async (req, res) => {
  const films = await Film.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    description: req.body.description,
    image_url: req.body.image_url,
    trailer_url: req.body.trailer_url,
  });
  return res.send(films);
});

// Rodando servidor (Sempre a última linha do código)

app.listen(8089, () => {
  // Conectando com o banco de dados

  mongoose.connect("mongodb://localhost:27017/star-wars");
  console.log("Server is running on port 8089");
});
