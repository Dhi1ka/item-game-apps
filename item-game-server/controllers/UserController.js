const { user } = require("../models");
const { decryptPass } = require("../helpers/bcrypt");
const { tokenGenerator } = require("../helpers/jwt");

class UserController {
  static async getAllUsers(req, res) {
    try {
      let users = await user.findAll({});
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static registerPage(req, res) {
    res.status(200).render("register.ejs");
  }

  static async register(req, res) {
    try {
      const { email, password, name, avatar } = req.body;

      let result = await user.create({
        email,
        password,
        name,
        avatar,
      });

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static loginPage(req, res) {
    res.status(200).render("login.ejs");
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;

      let result = await user.findOne({
        where: {
          email,
        },
      });

      if (result) {
        if (decryptPass(password, result.password)) {
          let token = tokenGenerator(result);
          res.status(200).json({
            access_token: token,
          });
        } else {
          res.status(400).json({
            message: "Password Incorrect",
          });
        }
      } else {
        res.status(400).json({
          message: "User not found",
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = UserController;
