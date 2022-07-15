import React from "react";
import "./Book.scss";
import person from "./book.jpeg";

function Book() {
  return (
    <div className="profileWrapper">
      <a href="">Back to Books</a>
      <div className="container">
        <div className="userDetails">
          <img src={person} alt="" />
          <div className="details">
            <p>
              <b>Title: </b> <span>Eleli Ayub</span>
            </p>
            <p>
              <b>ISBN: </b> <span>BUS-242-026/2018</span>
            </p>
            <p>
              <b>Publisher: </b> <span>BBIT</span>
            </p>
          </div>
        </div>
        <div className="information">
          <div className="issuesBooks">
            <h1>Total Revenue</h1>
            <ul>
              <li>
                <b>Ksh. 1200</b>
              </li>
            </ul>
          </div>

          <div className="stats">
            <h1>Stats Faults and Fines</h1>
            <div className="statInfo">
              <p>
                <b>Total Reads: </b> <span>20</span>
              </p>
              <p>
                <b>Reviews: </b> <span>10%</span>
              </p>
              <p>
                <b>Available Copies: </b> <span>10</span>
              </p>
              <p>
                <b>Lost Copies: </b> <span>10</span>
              </p>
            </div>
          </div>
          <h3 className="footerNote">
            <i>Wangwana School Library System</i>
          </h3>
        </div>
        <button>Delete Book</button>
      </div>
    </div>
  );
}

export default Book;
