import express from "express";

import "./database";

const app = express();


/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Exclusão
 * PATCH = Alterar uma informação específica
 */

app.get("/", (request, response) => {
  return response.json({
    message: "Olá NLW 05!"
  })
})

app.post("/users", (request, response) => {
  return response.json({
    message: "Usuário salvo com sucesso!",
  })
})

app.listen(3333), () => console.log("Server is running on port 3333")
