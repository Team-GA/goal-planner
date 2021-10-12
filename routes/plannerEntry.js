const { Router } = require("express");
const plannerController = require("../controllers/plannerEntry");

const plannerRouter = new Router();

plannerRouter.get("/planner", (req, res) => res.send("This is the root route!"));
plannerRouter.get("/planner-entries", plannerController.getAllPlanners);
plannerRouter.get("/planner-entries/:id", plannerController.getPlannerById);
plannerRouter.post("/planner-entries", plannerController.createPlanner);
plannerRouter.put("/planner-entries/:id", plannerController.updatePlanner);
plannerRouter.delete("/planner-entries/:id", plannerController.deletePlanner);

module.exports = plannerRouter;