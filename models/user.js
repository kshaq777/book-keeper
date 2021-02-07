const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const {v4 : uuidv4} = require('uuid')

const userSchema = new Schema({
  displayName: { type: String, required: true, unique: true},
  email: { type: String, required: true, unique: true },
  books: [
    {
      uuid: { 
        type: String, 
        default: function genUUID() {
            return uuidv4()
        }
      },
      authors: [],
      title: { type: String, required: true, unique: false},
      description: { type: String, required: true, unique: false},
      image: { type: String, required: true, unique: false},
      pageCount: {type: Number, required: true, unique: false},
      publishDate: {type: Date, required: true, unique: false},
      googleBooksKey: {type: Number, required: true, unique: false},
      previewLink: {type: String, required: true, unique: false},
      infoLink: {type: String, required: true, unique: false},
      googleRating: {type: Number, required: true, unique: false},
      myRating: {type: Number, required: true, default: 0},
      read: {type: Boolean, required: true, default: false}
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
