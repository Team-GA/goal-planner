const { Router } = require("express");
const journalRouter = require("./journal");
const taskRouter = require("./toDos")
const apiRouter = new Router();

apiRouter.use("/auth", userRouter);
apiRouter.use("/journal", journalRouter);
apiRouter.use("/task", taskRouter);
// apiRouter.use("/books", bookRouter);
// apiRouter.use("/books", bookRouter);

module.exports = apiRouter;