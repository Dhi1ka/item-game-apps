userRouter = require('express').Router();
const UserController = require('../controllers/UserController');

userRouter.get('/all', UserController.getAllUsers);
userRouter.post('/auth/register', UserController.register);
userRouter.post('/auth/login', UserController.login);

module.exports = userRouter;