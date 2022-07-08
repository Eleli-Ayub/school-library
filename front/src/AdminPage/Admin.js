import React from "react";
import Book from "./Book/Book";
import { Link } from "react-router-dom";
import "./Admin.scss";
import searchIcon from "./search.png";

function Adminpage() {
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
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </div>
  );
}

export default Adminpage;
