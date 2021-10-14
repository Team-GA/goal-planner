const { Router } = require("express")
const userController = require("../controllers/user")
const { restrict } = require("../utils/index")

const userRouter = new Router ();
userRouter.post("/register", restrict, userController.register)
userRouter.post("/login", restrict, userController.login)
userRouter.get("/verify", restrict, userController.verifyUser)
module.exports = userRouter;