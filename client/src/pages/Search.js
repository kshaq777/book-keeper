import React, { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import axios from "axios";
import API from "../utils/API";
import "../styles/main.css";
import SearchBook from "../components/SearchBooks";

function Search() {
  const user = useContext(UserContext);
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };
  

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!search) {
        return;
      }

     axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=10&key=${process.env.REACT_APP_GOOGLEKEY}`)
    .then((res) => {
      setBooks(res.data.items);
    });
  };


  const addBook = (event) =>{
    let x = JSON.parse(event.target.attributes[0].value);
    console.log(x);
    let data = {
      googleId: x.id,
      title: x.volumeInfo.title,
      authors: [...x.volumeInfo.authors],
      pageCount: x.volumeInfo.pageCount,
      publishDate: x.volumeInfo.publishedDate,
      previewLink: x.volumeInfo.previewLink,
      infoLink: x.volumeInfo.infoLink,
      image: x.volumeInfo.imageLinks.thumbnail,
      googleRating: x.volumeInfo.averageRating ? x.volumeInfo.averageRating : null
    }
    console.log(data)
    API.addBook(user.mongo._id, data).then(res => console.log(res));
  }


  return (
    <div>
      <div className="container mt-5">
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
              <span>
              <button onClick={handleFormSubmit} type="button" className="btn btn-main">
                Search Books
              </button>
              </span>
            </div>
          </div>
        </form>
      </div>
      <div className="container mt-3">
        {books.length > 1 && books.map(book => {
          return (
            <SearchBook 
              book={book}
              key={book.id}
              addBook={addBook}
            />
          )
        })}
      </div>
    </div>
  );
}
export default Search;
