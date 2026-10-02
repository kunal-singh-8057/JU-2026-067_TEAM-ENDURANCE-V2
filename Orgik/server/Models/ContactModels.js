const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    }
});




const ContactModel = mongoose.model("contactdata",ContactSchema);
module.exports = ContactModel;

