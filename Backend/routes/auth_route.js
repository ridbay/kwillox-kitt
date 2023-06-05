const { check, param, query } = require("express-validator");
const authcontroller = require("../controller/auth_controller");
const validationRequest = require("../middleware/validateRequests");

module.exports = function (app) {
  app.post(
    "/auth/register",
    [
      check("email")
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Please provide a correct Email"),
      check("first_name")
        .notEmpty()
        .withMessage("First Name is Required")
        .isAlpha()
        .withMessage("First name can only be alphabet")
        .isLength({ min: 2 })
        .withMessage("First name must be length of two"),
      check("last_name")
        .notEmpty()
        .withMessage("Last Name is Required")
        .isAlpha()
        .withMessage("Last name can only be alphabet"),
      check("phone_number")
        .notEmpty()
        .withMessage("phone_number is Required")
        .isNumeric()
        .withMessage("phone_number must be number")
        .isLength({ min: 10, max: 11 })
        .withMessage("phone_number must be length of eleven"),
      check("age")
        .notEmpty()
        .withMessage("Email is required")
        .isNumeric()
        .withMessage("Age must be number"),
      check("password")
        .notEmpty()
        .withMessage("Email is required")
        .isStrongPassword({
          minLength: 2,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1,
        })
        .withMessage(
          "Password must be minimum of 2 characters, 1 lowercase, 1 uppercase, 1 number and 1 symbol"
        ),
    ],
    validationRequest,
    authcontroller.creatUser
  );

  app.post(
    "/auth/login",
    [
      check("email")
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Please provide a correct Email"),
      check("password")
        .notEmpty()
        .withMessage("password is required")
        .isStrongPassword({
          minLength: 2,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1,
        })
        .withMessage(
          "Password must be minimum of 2 characters, 1 lowercase, 1 uppercase, 1 number and 1 symbol"
        ),
    ],
    validationRequest,
    authcontroller.loginUser
  );
};
