const mongoose = require("mongoose");

const letterSchema = mongoose.Schema({

    subscribe: {
        type: String,
        required: true
    },
});




const letterModel = mongoose.model("letterdata",letterSchema);
module.exports = letterModel;