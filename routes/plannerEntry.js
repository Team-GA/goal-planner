const { Router } = require("express");
const plannerController = require("../controllers/plannerEntry");

const plannerRouter = new Router();

const { restrict } = require("../utils");

plannerRouter.get("/planner", (req, res) => res.send("This is the root route!"));
plannerRouter.get("/planner-entries", restrict, plannerController.getAllPlanners);
plannerRouter.get("/planner-entries/:id",restrict, plannerController.getPlannerById);
plannerRouter.post("/planner-entries", restrict,  plannerController.createPlanner);
plannerRouter.put("/planner-entries/:id", restrict,  plannerController.updatePlanner);
plannerRouter.delete("/planner-entries/:id", restrict, plannerController.deletePlanner);

module.exports = plannerRouter;