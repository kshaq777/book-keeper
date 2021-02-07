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
      description: { type: String, required: true, unique: false},
      image: { type: String, required: true, unique: false},
      link: { type: String, required: true, unique: false},
      title: { type: String, required: true, unique: false},
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
