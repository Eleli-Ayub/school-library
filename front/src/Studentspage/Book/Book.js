import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Book.scss";

function Book({ book_image_url, book_name, book_author, copies_available, i }) {
  const requestBook = () => {
    axios
      .post("http://localhost:4000/api/book/order-book", {
        book_image_url: book_image_url,
        book_name: book_name,
        book_author: book_author,
        adminNo: adminNo,
      })
      .then((response) => {
        alert(response.data.msg);
      });
  };
  const [adminNo, setAdminNo] = useState(null);
  return (
    <div className="bookWrapper">
      <div className="prompt">
        <input
          type="text"
          onChange={(event) => {
            setAdminNo(event.target.value);
          }}
        />
      </div>
      <img src={book_image_url} alt="" />
      <h2 id="h2">{book_name}</h2>
      <p>{book_author}</p>
      <h4>500 Reads</h4>
      <h3>{copies_available} copies available</h3>
      <button onClick={requestBook}>Request Book</button>
    </div>
  );
}

export default Book;
