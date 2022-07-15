import axios from "axios";
import "./Sales.scss";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Borrowedbook from "../BorrowedBooks/Borrowedbook/Borrowedbook";

function Salesreport() {
  const [todaysSales, setTodaySales] = useState([]);
  const [weeklySales, setWeeklySales] = useState([]);
  const [monthlySales, setMonthlySales] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/api/book/get-daily-sales").then((res) => {
      setTodaySales(res.data);
    });
    axios.get("http://localhost:4000/api/book/get-weekly-sales").then((res) => {
      setWeeklySales(res.data);
    });
    axios
      .get("http://localhost:4000/api/book/get-monthly-sales")
      .then((res) => {
        setMonthlySales(res.data);
      });
  });
  return (
    <div className="salesWrapper">
      <Link to="/Adminpage">Library System</Link>

      <span>
        <h1>Weekly Sales Report</h1>
        {weeklySales.map((order) => {
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
      </span>
    </div>
  );
}

export default Salesreport;
