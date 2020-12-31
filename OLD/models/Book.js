const mongoose = require("mongoose");


const BookSchema = new mongoose.Schema({
    title: String,
    authors: [{
        type: String
    }],
    description: String,
    image: String,
    link: String
});


const Book = mongoose.model("Book", BookSchema);
module.exports = Book
