const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  creatTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

// start with basic setup, such as console log your logic.
router.route("/").get(getAllTasks).post(creatTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
