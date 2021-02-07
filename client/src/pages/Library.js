import React, { useContext, useEffect } from "react";
import UserContext from "../utils/UserContext";
import LibraryBook from "../components/LibraryBook";
import API from "../utils/API";

function Dashboard() {
  const user = useContext(UserContext);
  console.log(user);

  useEffect(() => {
    
  }, [user])

  const markRead = (event) => {
    const book = (JSON.parse(event.target.attributes[0].value))
    const bool = book.read;
    
    let newBool;
    if (bool === true) {
        newBool = false
    }
    else {
        newBool = true;
    }
    
    API.setBook(user.mongo._id, {newBool: newBool, uuid: book.uuid}).then(res => {
        console.log(res);
      })
    
  }
  return (
    <div className="m-5">
      <div className="container">
        <div className="row">
          <h1>{user.displayName}'s Library</h1>
        </div>
        <div className="row">
          <h3>To-Read Shelf</h3>
          {user.mongo.books.length > 1 &&
            user.mongo.books.map((book) => {
              return <LibraryBook book={book} key={book._id} markRead={markRead}/>;
            })}
        </div>
        <div className="row">
          <h3>Completed Shelf</h3>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
