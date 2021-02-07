import React, { useContext, useEffect } from "react";
import UserContext from "../utils/UserContext";
import LibraryBook from "../components/LibraryBook";
import API from "../utils/API";

function Dashboard() {
  const user = useContext(UserContext);
  let change = true;

  let toRead = [];
  let doneRead = [];
            
  if (user.mongo.books) {
    for (let i=0; i < user.mongo.books.length; i++) {
        if (user.mongo.books[i].read === true) {
            doneRead.push(user.mongo.books[i])
        }
        else {
            toRead.push(user.mongo.books[i])
        }
    }
    console.log(toRead)
    console.log(doneRead)
 
  }

  useEffect(() => {
  }, [change])

  const markRead = (event) => {
    const book = (JSON.parse(event.target.attributes[0].value))
    const bool = book.read;
    
    let newBool;
    if (bool === true) {
        newBool = false
        toRead.push(book)
    }
    else {
        newBool = true;
        doneRead.push(book)
    }
    
    API.setBook(user.mongo._id, {newBool: newBool, uuid: book.uuid}).then(res => {
        console.log(res);
      })

    window.location.reload();
    
  }

  return (
    <div className="m-5">
      <div className="container">
        <div className="row">
          <h1>{user.displayName}'s Library</h1>
        </div>
        <div className="row">
          <h3>To-Read Shelf</h3>
          {toRead &&
            toRead.map((book) => {
              return <LibraryBook book={book} key={book._id} markRead={markRead}/>;
            })}
        </div>
        <div className="row">
          <h3>Completed Shelf</h3>
          {doneRead &&
            doneRead.map((book) => {
              return <LibraryBook book={book} key={book._id} markRead={markRead}/>;
            })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
