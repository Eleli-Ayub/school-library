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
      <div className="reports">
        <h1>Reports From the System</h1>
        <ul>
          <Link to="/Salesreport">Sales Report</Link>
          <Link to="/Booksreport">Books Report</Link>
          <Link to="/Lastdayreport">Daily Report</Link>
          <Link to="/Weeklyreport">Weekly Report</Link>
          <Link to="/Booksreport">Books Report</Link>
          <Link to="/Studentreport">Students Report</Link>
          <Link to="/Summaryreport">Summary Report</Link>
        </ul>
      </div>
      <div className="management">
        <h1>Order Management</h1>
        <ul>
          <Link to="/Bookorders">Active Book Request</Link>
          <Link to="/Defaultedorders">Defaulted Books</Link>
          <Link to="/Allorders">All Orders</Link>
          <Link to="/Allstudents">All Students</Link>
          <Link to="/Allbooks">All Books</Link>
        </ul>
      </div>
      <div className="orders">
        <h1>All Orders</h1>
      </div>
      {/* <div className="books">
        {books.map((book) => {
          return (
            <Book
              book_image_url={book.ThumbnailUrl}
              book_name={book.Name}
              book_author={book.Author}
              copies_available={book.CopiesAvailable}
            />
          );
        })}
      </div> */}
    </div>
  );
}

export default Adminpage;
