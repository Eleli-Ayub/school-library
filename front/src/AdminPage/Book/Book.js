import React from "react";
import { useNavigate } from "react-router-dom";
import "./Book.scss";

function Book({
  book_image_url,
  book_name,
  book_author,
  copies_available,
  issueBook,
}) {
  return (
    <div className="bookWrapper">
      <img src={book_image_url} alt="" />
      <h2>{book_name}</h2>
      <p>{book_author}</p>
      <h4>500 Reads</h4>
      <h3>{copies_available} copies available</h3>
      <button onClick={issueBook}>Issue Book</button>
    </div>
  );
}

export default Book;
