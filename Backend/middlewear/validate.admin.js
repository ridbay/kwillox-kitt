module.exports = ( request, response, next) => {
    try {
        const role = request.user.role;
        if (role == "admin") {
            next();
        } else {
            return response.status(401).json({
                status:false,
                message: "You are not an admin",
            })
        }
    } catch (error) {
        return response. status(500).json({status: false,
        message: "Unable to Validate Role",
    }
)}
}