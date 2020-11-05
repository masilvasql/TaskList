const express = require("express");
const server = express();
const cors = require("cors");
server.use(express.json()); //no lugar do body Parser
server.use(cors());
let port = process.env.PORT | 3001

const TaskRoutes = require("./routes/TaskRoutes");

server.use("/task", TaskRoutes);

server.listen(port, () => {
  console.log(`Servidor Rodando na porta ${port}`);
});
