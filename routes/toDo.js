const { Router } = require("express");
const taskController = require("../controllers/toDo");

const { restrict } = require("../utils")

const taskRouter = new Router();

taskRouter.get("/task", restrict, taskController.getAllTasks );
taskRouter.get("/task/:id", restrict, taskController.findTaskById );
taskRouter.post("/newTask", restrict, taskController.createTasks );
taskRouter.put("/task/:id", restrict, taskController.updateTasks );
taskRouter.delete("/task/:id", restrict, taskController.deleteTask);

module.exports = taskRouter;
