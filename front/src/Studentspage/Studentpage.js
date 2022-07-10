import React, { useEffect, useRef, useState } from "react";
import "./Studentpage.scss";
import Book from "./Book/Book";
import { Link, useNavigate } from "react-router-dom";
import searchIcon from "./search.png";
import axios from "axios";

function Students() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const item = useRef();

  const requestBook = () => {
    console.log(item);
  };
  useEffect(() => {
    axios.get("http://localhost:4000/api/book/view-books").then((res) => {
      setBooks(res.data);
    });
  }, []);

  return (
    <div className="homePageWrapper">
      <div className="header">
        <button
          className="logout"
          onClick={() => {
            navigate("/Studentlogin");
          }}
        >
          Logout
        </button>
        <div className="title">
          <h1>Wangwana School Library System.</h1>
        </div>
        <div className="searchArea">
          <input type="text" placeholder="Enter Author or Book Name" />
          <button>
            <img src={searchIcon} alt="" /> Search Book
          </button>
        </div>
      </div>
      <div className="books">
        {books.map((book) => {
          return (item.current = (
            <Book
              book_image_url={book.ThumbnailUrl}
              book_name={book.Name}
              book_author={book.Author}
              copies_available={book.CopiesAvailable}
              requestBook={requestBook}
            />
          ));
        })}
      </div>
    </div>
  );
}

export default Students;
