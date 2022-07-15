import axios from "axios";
import React from "react";
import "./Borrowedbook.scss";

function Borrowedbook({
  book_image_url,
  book_author,
  book_name,
  adm_no,
  issue_date,
  return_date,
  return_status,
  updateLocalBooks,
}) {
  const changeLoginStatus = () => {
    axios
      .post("http://localhost:4000/api/book/return-book", {
        // book_author: book_author,
        book_name: book_name,
        adm_no: adm_no,
      })
      .then((response) => {
        alert(`${response.data.msg}`);
        // updateLocalBooks(response.data);
      });
  };
  return (
    <div className="borrowedBookWrapper">
      <div className="details">
        <span>
          <img src={book_image_url} alt="" />
        </span>
        <span>{book_author}</span>
        <span>{book_name}</span>
        <span>{adm_no}</span>
        <span>{issue_date}</span>
        <span>{return_date}</span>
        <span>
          <button onClick={changeLoginStatus}>{return_status}</button>
        </span>
      </div>
    </div>
  );
}

export default Borrowedbook;
