const { Router } = require("express");
const journalRouter = require("./journal");
const taskRouter = require("./toDo")
const plannerRouter = require("./plannerEntry")
const userRouter = require("./user")
const apiRouter = new Router();

apiRouter.use("/auth", userRouter);
apiRouter.use("/journal", journalRouter);
apiRouter.use("/task", taskRouter);
apiRouter.use("/planner", plannerRouter);
apiRouter.use("/user", userRouter);

module.exports = apiRouter;