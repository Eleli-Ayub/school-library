import React, { useEffect, useState } from "react";
import "./Borrowed.scss";
import { Link } from "react-router-dom";
import Borrowedbook from "./Borrowedbook/Borrowedbook";
import axios from "axios";

function Borrowed() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/book/get-active-orders")
      .then((res) => {
        setOrders(res.data);
      });
  }, []);
  return (
    <div className="activeBorrowedBooksWrapperS">
      <div className="header">
        <h1>Wangwana Library System</h1>
        <h2>Active Orders</h2>
        <Link to="/Adminpage">Library System</Link>
      </div>
      <div className="title">
        <span></span>
        <span>Book Author</span>
        <span>Book Name</span>
        <span>Adm No</span>
        <span>Issue Date</span>
        <span>Return Date</span>
        <span>Status</span>
      </div>
      <div className="borrowedBooksList">
        {orders.map((order) => {
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
  );
}

export default Borrowed;
