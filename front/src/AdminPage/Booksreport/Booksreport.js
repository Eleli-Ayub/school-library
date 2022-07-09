import React from "react";
import "./Booksreport.scss";
import logoImage from "./logo.jpg";

function Booksreport() {
  return (
    <div className="bookReportWrapper">
      <a href="">Library System</a>
      <div className="container">
        <h1>Books Summary Report</h1>
        <div className="bodyContent">
          <div className="left">
            <div className="bookStats">
              <span>
                <h3>Total Books: </h3>
                <p>20</p>
              </span>
              <span>
                <h3>Total Issues: </h3>
                <p>20</p>
              </span>
              <span>
                <h3>Total Defaults: </h3>
                <p>20</p>
              </span>
              <span>
                <h3>Total Earnings: </h3>
                <p>20</p>
              </span>
            </div>
            <div className="borrowedStats">
              <span>
                <h3>Most Borrowed: </h3>
                <p>Art of War</p>
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
                <p>Eleli Ayub</p>
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