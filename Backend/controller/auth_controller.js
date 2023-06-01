const user_model = require("../model/user_model");
const bcryptjs = require("bcryptjs");
const { request } = require("express");
const jwt = require("jsonwebtoken");
require("dotenv");

exports.creatUser = (async (request, response) => {
    //Destructuring of the request data
    const { first_name, last_name, age, phone_number, email, password } = request.body;
    console.log(request.body)
    //What are the things you will check if the email have been registered before
    //1. check if email exist
    try {
        const user = await user_model.findOne( {email} );   
        if (user){
            response.status(400).json( { data:null, message: "User already exist" } )
        }else {
            //2. Hash the password
            const hashed_passwd = await bcryptjs.hash(password, 10)
            
            const dataToSave = { ...request.body, password:hashed_passwd }
            //3. Save the data to mongodb

            const creat_User = await user_model.create(dataToSave)
            //4. Return a successfull response to the user after saving the data to mongodb
            response.status(201).json( {data:creat_User, message: "user created succesfully"} )
        }
    } catch (error) {
       response.status(500).json({ error: error.message });
    }
});

exports.loginUser = async (request, response) => {
    try {
      const email = request.body.email;
      const user_password = request.body.password;
      //Check if the user exist
      const find_user = await user_model.findOne({ email: email });
  
      if (find_user) {
        const { first_name, last_name, phone_number, age, password, role } =
          find_user;
        //Check if the password matches
        const password_matches = await bcryptjs.compare(user_password, password);
        if (password_matches) {
          const timestamp = Math.floor(Date.now() / 1000);
          // console.log(timestamp);
          let token = jwt.sign(
            {
              email: email,
              first_name,
              last_name,
              age,
              phone_number,
              role,
              iat: timestamp,
            },
            process.env.SECRET_KEY,
            {
              algorithm: "HS512",
              expiresIn: "1h",
            }
          );
          response.status(200).json({
            message: "user login successfully",
            data: {
              token,
            },
          });
        } else {
          response
            .status(400)
            .json({ message: "Login details incorrect", data: null });
        }
      } else {
        response.status(404).json({ message: "user not found", data: null });
      }
  
      //Generate a authentication token for all request
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  };