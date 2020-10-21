const express = require("express");
const server = express();
const cors = require("cors");
server.use(express.json()); //no lugar do body Parser
server.use(cors());

const TaskRoutes = require("./routes/TaskRoutes");

server.use("/task", TaskRoutes);

server.listen(3000, () => {
  console.log(`Servidor Rodando na porta ${3000}`);
});
