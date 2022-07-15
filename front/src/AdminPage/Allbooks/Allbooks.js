import React, { useEffect, useRef, useState } from "react";
import "./Studentpage.scss";
import Book from "./Book/Book";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Allbooks() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/book/view-books").then((res) => {
      setBooks(res.data);
    });
  }, []);

  return (
    <div className="allbooksPageWrapper">
      <Link to="/Adminpage">Library System</Link>
      <h1>All Books</h1>
      <div className="books">
        {books.map((book, i) => {
          return (
            <Book
              i={i}
              book_image_url={book.ThumbnailUrl}
              book_name={book.Name}
              book_author={book.Author}
              copies_available={book.CopiesAvailable}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Allbooks;
