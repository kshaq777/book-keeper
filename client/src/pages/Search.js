import React, { useContext, useState, useEffect, useReducer } from "react";
import UserContext from "../utils/UserContext";
import axios from "axios";
import API from "../utils/API";

function Search() {
  const user = useContext(UserContext);
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  
  console.log(user);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };
  

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!search) {
        return;
      }
  
  };

  // const addBook = (event) =>{
  //   let x = event.target.attributes[0].value;
  //   let data = JSON.parse(x)
  //   API.addBook(user.mongo._id, data).then(res => console.log(res));
  // }


  return (
    <div>
      <div className="container">
        <h1 className="text-center">Search For Your Books</h1>

        <form className="search container">
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="book">Search Term:</label>
                <input
                  value={search}
                  onChange={handleInputChange}
                  name="book"
                  list="term"
                  type="text"
                  className="form-control"
                  placeholder="Type in a search term to begin"
                  id="card"
                />
              </div>
            </div>
            <div className="col">
              <button onClick={handleFormSubmit} type="button" className="btn btn-primary">
                Search Books
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Search;
