const { validationResult } = require("express-validator");

module.exports = (request, response, next) => {
    const result = validationResult( request );
    // console.log(result);
    if ( !result.isEmpty()) {
        return response.status(422).json({
            status: false,
            message: result.errors[result.errors.length - 1].msg,
        })
    }else next();
}