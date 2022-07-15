import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Admin.scss";
import searchIcon from "./search.png";
import Borrowedbook from "./BorrowedBooks/Borrowedbook/Borrowedbook";
import axios from "axios";

function Adminpage() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/api/book/get-orders").then((res) => {
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
            <img src={searchIcon} alt="" /> Search Book
          </button>
        </div>
        <Link to="/Addbook">Add Book</Link>
      </div>
      <div className="reports">
        <h1>Reports From the System</h1>
        <ul>
          <Link to="/Salesreport">Sales Report</Link>
          <Link to="/Lastdayreport">Daily Report</Link>
          <Link to="/Weeklyreport">Weekly Report</Link>
          <Link to="/Booksreport">Summary Report</Link>
        </ul>
      </div>
      <div className="management">
        <h1>Order Management</h1>
        <ul>
          <Link to="/Activebookorders">Active Book Request</Link>
          <Link to="/Allbooks">All Books</Link>
        </ul>
      </div>
      <div className="orders">
        <h1>All Orders</h1>
        <div className="borrowedBooksList">
          {books.map((order) => {
            console.log("Orders");
            return (
              <Borrowedbook
                book_image_url={order.Imageurl}
                book_author={order.Book_Author}
                book_name={order.Book_Name}
                adm_no={order.Student_Reg_No}
                issue_date={order.Issue_Date}
                return_date={order.Return_Date}
                return_status={order.Return_Status}
              />
            );
          })}
        </div>
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
