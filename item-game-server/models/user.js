'use strict';
const {
  Model
} = require('sequelize');

const { encryptPass } = require('../helpers/bcrypt');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Email required!"
        },
        isEmail: {
          message: "Email format required!"
        }
      },
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Password required!"
        },
      }
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Name required!"
        },
      }
    },
    avatar: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Avatar required!"
        },
      }
    },
  }, {
    hooks: {
      beforeCreate: function(user, options) {
        user.password = encryptPass(user.password)
      }
    },
    sequelize,
    modelName: 'user',
  });
  return user;
};