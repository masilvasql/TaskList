const TaskModel = require("../model/TaskModel");
const { isPast } = require("date-fns");

const TaskValidation = async (req, res, next) => {
  const { macaddress, type, title, description, when } = req.body;

  if (!macaddress) {
    return res.status(400).json({ error: "macaddres é obrigatório" });
  } else if (!type) {
    return res.status(400).json({ error: "type é obrigatório" });
  } else if (!title) {
    return res.status(400).json({ error: "title é obrigatório" });
  } else if (!description) {
    return res.status(400).json({ error: "description é obrigatório" });
  } else if (!when) {
    return res.status(400).json({ error: "when é obrigatório" });
  } else if (isPast(new Date(when))) {
    return res.status(400).json({ error: "Data não pode ser no passado" });
  } else {
    let exists;
    if (req.params.id) {
      exists = await TaskModel
        .findOne({
          "_id": { "$ne": req.body.id }, //not exists (exclui a validação pra tarefa atual)
          "when": { "$eq": new Date(when) }, //$eq operador de igualdade
          "macaddress": { "$in": macaddress }, // $in operadore de contido
        });
    } else {
      exists = await TaskModel
        .findOne({
          "when": { "$eq": new Date(when) }, //$eq operador de igualdade
          "macaddress": { "$in": macaddress }, // $in operadore de contido
        });
    }

    if (exists) {
      return res.status(400).json({ error: "Tarefa Já cadastrada!" });
    } else {
      next();
    }
  }
};

module.exports = TaskValidation;
