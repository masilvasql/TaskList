const express = require("express");
const server = express();
server.use(express.json()); //no lugar do body Parser

const TaskRoutes = require("./routes/TaskRoutes");

server.use("/task", TaskRoutes);

server.listen(3000, () => {
  console.log(`Servidor Rodando na porta ${3000}`);
});
