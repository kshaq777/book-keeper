function LibraryBook(props) {
  let book = props.book;
 
  return (
    <div key={props.book._id} className="row shadow bookCard w-100">
      <div className="row w-100">
      <div className="col-12 col-lg-4">
        <img
          style={{ maxWidth: "50%" }}
          className="card-img-top"
          src={
            book.image
              ? book.image
              : "https://upload.wikimedia.org/wikipedia/en/f/f9/No-image-available.jpg"
          }
          alt={book.title}
        ></img>
      </div>
      <div className="col-12 col-lg-8">
        {/* <div className="row">
        <p><strong>Description:</strong></p>
          <p>
            {book.description && book.description.length > 500 ? book.description.substring(0,500)+"..." : book.description}
          </p>
        </div> */}
        <div className="row">
          <h4 className="card-title">
            {book.title && book.title.length > 100
              ? book.title.substring(0, 100) + "..."
              : book.title}
          </h4>
        </div>
        <div className="row">
          <h5>By:&nbsp;</h5>
          {book.authors && book.authors.length > 1 &&
            book.authors.map((writer, index) => {
              index =+ index
              return index === (book.authors.length - 1) ? <h5>{writer}</h5> : <h5>{writer}&nbsp;&&nbsp;</h5>
            })}
          {book.authors && book.authors.length === 1 &&
            book.authors.map((writer) => {
              return <h5>{writer}</h5>
            })}
        </div>
        <div className="row">
          <ul>
            <li>
              <strong>Average Rating:</strong> {book.googleRating}
            </li>
            <li>
              <strong>My Ratings:</strong> {book.myRating}
            </li>
            <li>
              <strong>Page Count:</strong> {book.pageCount}
            </li>
            <li>
              <strong>Publish Date:</strong> {book.publishDate.substring(0, 10)}
            </li>
          </ul>
        </div>
        <div className="row">
        <a href={book.previewLink} className="btn btn-main mr-3">
            Preview the Book
          </a>
          <button
            key={props.book.id}
            mongo={JSON.stringify(props.book)}
            read={props.book.read}
            className="btn btn-main mr-3"
            onClick={props.markRead}
          >
            Mark Read
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default LibraryBook;
