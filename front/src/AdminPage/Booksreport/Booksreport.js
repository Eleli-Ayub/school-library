import React, { useEffect, useRef, useState } from "react";
import "./Booksreport.scss";
import { Link } from "react-router-dom";
import logoImage from "./logo.jpg";
import axios from "axios";

function Booksreport() {
  const [books, setBooks] = useState([]);
  const firstBook = books[0];
  useEffect(() => {
    axios.get("http://localhost:4000/api/book/get-orders").then((res) => {
      setBooks(res.data.sort(res.data.CopiesAvailable));
    });
  }, []);
  return (
    <div className="bookReportWrapper">
      <Link to="/Adminpage">Library System</Link>
      <div className="container">
        <h1>Books Lending Summary Report</h1>

        <div className="bodyContent">
          <div className="left">
            <div className="bookStats">
              <span>
                <h3>Total Issues: </h3>
                <p>{books.length}</p>
              </span>
              <span>
                <h3>Total Earnings: </h3>
                <p>{books.length * 100}</p>
              </span>
            </div>
            <div className="borrowedStats">
              <span>
                <h3>Most Borrowed: </h3>
                <p>Art Of Power</p>
              </span>
              <span>
                <h3>Least Borrowed: </h3>
                <p>Angels and Demons</p>
              </span>
              <span>
                <h3>Most Defaulted: </h3>
                <p>Inferno</p>
              </span>
              <span>
                <h3>Least Defaulted: </h3>
                <p>Alchemist</p>
              </span>
            </div>
            <div className="favourites">
              <span>
                <h3>Favourite Book: </h3>
                <p>Inferno</p>
              </span>
              <span>
                <h3>Favourite Author: </h3>
                <p>Dan Brown</p>
              </span>
            </div>
          </div>
          <div className="right">
            <div className="frequentStats">
              <span>
                <h3>Most Frequent Student: </h3>
                <p>Eleli Ayub</p>
              </span>
              <span>
                <h3>Most Defaulting Student: </h3>
                <p>Velma Atieno</p>
              </span>
            </div>
            <h2>Wangwana Library</h2>
            <img src={logoImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booksreport;
