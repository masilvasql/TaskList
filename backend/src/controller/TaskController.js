const TaskModel = require("../model/TaskModel");
const {
  startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
} = require("date-fns");

const current = new Date();

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
      .find({ macaddress: { "$in": req.params.macaddress } })
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

  async delete(req, res) {
    await TaskModel.deleteOne({ "_id": req.params.id })
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

  async done(req, res) {
    await TaskModel.findByIdAndUpdate(
      { "_id": req.params.id },
      { "done": req.params.done },
      { new: true }, //devolve sempre os dados da tarefa atualizado
    )
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  async late(req, res) {
    await TaskModel
      .find({
        "when": { "$lt": current }, //$lt = menor que
        "macaddress": { "$in": req.params.macaddress },
      })
      .sort("when")
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json(error);
      });
  }

  async today(req, res) {
    await TaskModel
      .find({
        "when": { "$gte": startOfDay(current), "$lt": endOfDay(current) }, //$gte => maior ou igual que
        "macaddress": { "$in": req.params.macaddress },
      })
      .sort("when")
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json(error);
      });
  }

  async week(req, res) {
    await TaskModel
      .find({
        "when": { "$gte": startOfWeek(current), "$lt": endOfWeek(current) }, //$gte => maior ou igual que
        "macaddress": { "$in": req.params.macaddress },
      })
      .sort("when")
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json(error);
      });
  }

  async month(req, res) {
    await TaskModel
      .find({
        "when": { "$gte": startOfMonth(current), "$lt": endOfMonth(current) }, //$gte => maior ou igual que
        "macaddress": { "$in": req.params.macaddress },
      })
      .sort("when")
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json(error);
      });
  }

  async year(req, res) {
    await TaskModel
      .find({
        "when": { "$gte": startOfYear(current), "$lt": endOfYear(current) }, //$gte => maior ou igual que
        "macaddress": { "$in": req.params.macaddress },
      })
      .sort("when")
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json(error);
      });
  }
}

module.exports = new TaskController();
