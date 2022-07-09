import React from "react";
import "./Borrowedbook.scss";
import book from "./book.jpeg";

function Borrowedbook() {
  return (
    <div className="borrowedBookWrapper">
      <div className="details">
        <span>
          <img src={book} alt="" />
        </span>
        <span>Dan Brownr</span>
        <span>Alchemist</span>
        <span>071985675</span>
        <span>Eleli Lesosio Ayub</span>
        <span>12 March 2022</span>
        <span>20 March 2022</span>
        <span>Returned</span>
      </div>
    </div>
  );
}

export default Borrowedbook;
