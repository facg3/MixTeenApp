const { Joi } = require('celebrate');

const usersignin = {
  body: {
    username: Joi.string().alphanum().min(3).max(30)
      .required(),
    password: Joi.string().regex(/^.{4,32}$/),
  },
};

const usersignup = {
  body: {
    username: Joi.string().alphanum().min(3).max(30)
      .trim()
      .required(),
    email: Joi.string().email(),
    password: Joi.string().regex(/^.{4,32}$/),
  },
};

module.exports = { usersignin, usersignup };
