import React from "react";
import "./Borrowed.scss";
import Borrowedbook from "./Borrowedbook/Borrowedbook";

function Borrowed() {
  return (
    <div className="borrowedBooksWrapperS">
      <div className="header">
        <h1>Wangwana Library System</h1>
        <h2>Borrowed Book List</h2>
        <a href="">Library System</a>
      </div>
      <div className="title">
        <span></span>
        <span>Book Author</span>
        <span>Book Name</span>
        <span>Phone No.</span>
        <span>Student Name</span>
        <span>Issue Date</span>
        <span>Return Date</span>
        <span>Status</span>
      </div>
      <div className="borrowedBooksList">
        <Borrowedbook />
        <Borrowedbook />
        <Borrowedbook />
      </div>
    </div>
  );
}

export default Borrowed;
