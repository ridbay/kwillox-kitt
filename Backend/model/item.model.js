const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = Schema( {
   name: String,
   description: String,
   brand: String,
   price: String,
   isAvailable: Boolean, 
},
    {
        timestamps: {}
    }
 );

module.exports = ("item", itemSchema)