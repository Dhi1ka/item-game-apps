userRouter = require("express").Router();
const UserController = require("../controllers/UserController");

userRouter.get("/all", UserController.getAllUsers);
userRouter.get("/auth/register", UserController.registerPage);
userRouter.post("/auth/register", UserController.register);
userRouter.get("/auth/login", UserController.loginPage);
userRouter.post("/auth/login", UserController.login);

module.exports = userRouter;
