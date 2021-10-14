const { Router } = require("express")
const userController = require("../controllers/user")
const { restrict } = require("../utils/index")

const userRouter = new Router ();
userRouter.post("/register", userController.register)
userRouter.post("/login", userController.login)
userRouter.get("/verify", restrict, userController.verifyUser)
module.exports = userRouter;