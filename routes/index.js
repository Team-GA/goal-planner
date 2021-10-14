const { Router } = require("express");
const journalRouter = require("./journal");
const taskRouter = require("./toDo")
const plannerRouter = require("./plannerEntry")
const userRouter = require("./user")
const apiRouter = new Router();

apiRouter.use("/auth", userRouter);
apiRouter.use("/", journalRouter);
apiRouter.use("/", taskRouter);
apiRouter.use("/", plannerRouter);


module.exports = apiRouter;