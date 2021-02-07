function SearchBook(props) {
  let book = props.book.volumeInfo;
  return (
    <div key={props.book.id} className="row shadow bookCard">
      <div className="col-12 col-lg-4">
        <img
          style={{ maxWidth: "50%" }}
          className="card-img-top"
          src={
            book.imageLinks.thumbnail
              ? book.imageLinks.thumbnail
              : "https://upload.wikimedia.org/wikipedia/en/f/f9/No-image-available.jpg"
          }
          alt={book.title}
        ></img>
        <div className="mt-3 pr-5">
          <h4 className="card-title">{book.title && book.title.length > 100 ? book.title.substring(0,100)+"..." : book.title}</h4>
          By: {book.authors &&
            book.authors.map((writer) => {
              return <h5>{writer}</h5>;
            })}
        </div>
      </div>
      <div className="col-12 col-lg-8">
        <div className="row">
        <p><strong>Description:</strong></p>
          <p>
            {book.description && book.description.length > 500 ? book.description.substring(0,500)+"..." : book.description}
          </p>
        </div>
        <div className="row">
          <h5>Details</h5>
          <ul>
            <li>
              <strong>Average Rating:</strong> {book.averageRating}
            </li>
            <li>
              <strong># of Ratings:</strong> {book.ratingsCount}
            </li>
            <li>
              <strong>Page Count:</strong> {book.pageCount}
            </li>
            <li>
              <strong>Publish Date:</strong> {book.publishedDate}
            </li>
          </ul>
        </div>
        <div className="row">
        <a href={book.previewLink} className="btn btn-main mr-3">
          Preview the Book
        </a>
        <a href={book.infoLink} className="btn btn-main mr-3">
          Get the E-Book
        </a>
        <button key={props.book.id} mongo={JSON.stringify(props.book)} onClick={props.addBook} className="btn btn-main mr-3">
          Add to Your Library
        </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBook;
