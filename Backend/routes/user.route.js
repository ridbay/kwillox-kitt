const userController = require("../controller/user.controller");
const { check, param, query } = require("express-validator");
const validateRequests = require("../middleware/validate.request");
const validateAuthentication = require("../middleware/validateAuthentication");
const validateAdminRole = require("../middleware/validate.adminRole");
module.exports = function (app) {
  app.get(
    "/users",
    validateAuthentication,
    validateAdminRole,
    userController.getAllUsers
  );
  app.get(
    "/user",
    [
      query("email")
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Please provide a valid email address"),
    ],
    validateRequests,
    validateAuthentication,
    validateAdminRole,
    userController.getOneUser
  );
};
