const jwt = require("jsonwebtoken");

module.exports = async (request, response, next) => {
  try {
    //get token from header
    const authHeader = request.headers.authorization;

    //if the token is not present
    if (!authHeader) {
      return response.status(401).json({
        status: false,
        message: "you are not logged in",
      });
      //verify token
    } else {
      const token = authHeader.split(" ")[1];

      const isVerifiedToken = await jwt.verify(token, process.env.SECRET_KEY, {
        algorithms: ["HS512"],
      });

      //after verification set the user obj in the req context
      if (isVerifiedToken) {
        request.user = isVerifiedToken;
        next();
      } else {
        return request
          .status(401)
          .json({ status: false, message: "Invalid authentificarionntoken" });
      }
    }
  } catch (error) {
    // Sentry .capture Exception (error)
    return response.status(500).json({
        status: false,
        message: "Unable to aunthenticate token",error
    })
  }
};
