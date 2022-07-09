import React from "react";
import "./Studentpage.scss";
import Book from "./Book/Book";
import { Link } from "react-router-dom";
import searchIcon from "./search.png";
function Students() {
  return (
    <div className="homePageWrapper">
      <div className="header">
        <button className="logout">Logout</button>
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

export default Students;
