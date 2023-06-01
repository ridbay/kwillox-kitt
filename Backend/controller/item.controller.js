const itemModel = require("../model/item.model");

exports.createItem = async (request, response) =>  {
    //Destructure the request object
    const { name, description, brand, price, isAvailable } = request.body;

    //using try and catch
    try {
        const dataToSave = { name, description, brand, price, isAvailable };
        //save data into mongodb
        const createItem = await itemModel.create(dataToSave);
        response. status(200).json( {data: createItem, message:"Item created successfully"} )
    } catch (error) {
        response.status(500).json( {error: error.message} )
    }
};

exports.getAllItems = async(request, response) => {
    try {
        const allItems = await itemModel.find();

        if (allItems) {
            response.status(200).json( {data:allItems, message: "All items fetched"} )
        }else {
            response.json(400).json({data: null, message: "No item was found"})
        }
    } catch (error) {
        response.status(500).json({error:error.message})
    }
}