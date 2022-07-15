import React, { useEffect, useRef, useState } from "react";
import "./Studentpage.scss";
import Book from "./Book/Book";
import { Link, useNavigate } from "react-router-dom";
import searchIcon from "./search.png";
import axios from "axios";

function Students() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  const requestBook = (e) => {};
  useEffect(() => {
    axios.get("http://localhost:4000/api/book/view-books").then((res) => {
      setBooks(res.data);
    });
  }, []);

  const loginstatus = sessionStorage.getItem("regNumber");
  useEffect(() => {
    loginstatus ? console.log("App is logged") : navigate("/");
  });

  return (
    <div className="homePageWrapper">
      <div className="header">
        <button
          className="logout"
          onClick={() => {
            navigate("/");
            sessionStorage.removeItem("regNumber");
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

export default Students;
