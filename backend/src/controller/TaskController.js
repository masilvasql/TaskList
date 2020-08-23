const TaskModel = require("../model/TaskModel");
const { response } = require("express");

class TaskController {
  /**
     * Se for uma função com conexão ao banco, 
     * lembrar de colocar o ASYNC
     * @param {} req 
     * @param {*} res 
     */
  async create(req, res) {
    const task = new TaskModel(req.body);
    await task
      .save()
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

  /**
 * req.params => Parâmetros da URL
 * req.body => Parâmetros do corpo da requisição
 * {new:true} => retorna a tarefa atualizada
 * @param {} req 
 * @param {*} res 
 */
  async update(req, res) {
    await TaskModel.findByIdAndUpdate(
      { "_id": req.params.id },
      req.body,
      { new: true },
    )
      .then((response) => {
        return res.status(200).json(response);
      }).catch((error) => {
        return res.status(500).json(error);
      });
  }

  async all(req, res) {
    await TaskModel
      .find({ macaddress: { "$in": req.body.macaddress } })
      .sort("when")
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

  async show(req, res) {
    await TaskModel.findById(req.params.id)
      .then((response) => {
        console.log("VEIO " + response);
        if (response) {
          return res.status(200).json(response);
        } else {
          return res.status(404).json({ error: "Tarefa não encontrada" });
        }
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }
}

module.exports = new TaskController();