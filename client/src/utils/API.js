import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
//update the user model
  addBook: function(id, body) {
    return axios.post("/api/books/" + id, body)
  },
  setBook: function(id, body) {
    return axios.put("/api/books/" + id, body)
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  createUser: function(user) {
    return axios.post("/api/users", user);
  }
};