const { Router } = require("express");
const journalRouter = require("./journal");
const bookRouter = require("./book")
const apiRouter = new Router();

apiRouter.use("/auth", userRouter);
apiRouter.use("/books", bookRouter);

module.exports = apiRouter;