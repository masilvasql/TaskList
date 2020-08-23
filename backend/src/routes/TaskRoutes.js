const express = require("express");
const router = express.Router();
const TaskController = require("../controller/TaskController");
const TaskValidation = require("../middlewares/TaskValidation");
const MacAddresValidation = require("../middlewares/MacAddressValidation");

router.post("/", TaskValidation, TaskController.create);
router.put("/:id", TaskController.update);
router.get("/filter/all", MacAddresValidation, TaskController.all);
router.get("/:id", TaskController.show);

module.exports = router;