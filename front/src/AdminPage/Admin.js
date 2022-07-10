import React, { useEffect, useState } from "react";
import Book from "./Book/Book";
import { Link } from "react-router-dom";
import "./Admin.scss";
import searchIcon from "./search.png";
import axios from "axios";

function Adminpage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/book/view-books").then((res) => {
      setBooks(res.data);
    });
  }, []);
  return (
    <div className="homePageWrapper">
      <div className="header">
        <div className="logs">
          <Link to="/Students">Student Logs</Link>
          <Link to="/Librarylogs">Library Logs</Link>
          <Link to="/Borrowedbooks">Borrowed Books</Link>
        </div>
        <div className="title">
          <h1>Wangwana School Library System.</h1>
        </div>
        <div className="searchArea">
          <input type="text" placeholder="Enter Author or Book Name" />
          <button>
            {" "}
            <img src={searchIcon} alt="" /> Search Book
          </button>
        </div>
        <Link to="/Addbook">Add Book</Link>
      </div>
      <div className="books">
        {books.map((book) => {
          console.log(book);
          return (
            <Book
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

export default Adminpage;
