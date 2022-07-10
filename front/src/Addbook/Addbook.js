import React, { useState } from "react";
import Homepage from "../AdminPage/Admin";
import { Link } from "react-router-dom";
import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { v4 } from "uuid";
import "./Addbook.scss";
import axios from "axios";

function Addbook() {
  const [bookImage, setBookImage] = useState(null);
  const [bookUrl, setBookUrl] = useState();
  const [bookName, setBookName] = useState();
  const [authorName, setAuthorName] = useState();
  const [copiesAvailable, setCopiesAvailable] = useState();

  const uploadImage = () => {
    if (bookImage == null) {
      return alert("Image not selected");
    } else {
      const imageRef = ref(storage, `book-images/${bookImage.name + v4()}`);
      uploadBytes(imageRef, bookImage).then((snapshot) => {
        alert(`${bookName}'s image uploaded`);
        getDownloadURL(snapshot.ref).then((url) => {
          setBookUrl(url);
        });
      });
    }
  };

  const addBook = () => {
    uploadImage();
    axios
      .post("http://localhost:4000/api/book/add-book", {
        bookName: bookName,
        bookUrl: bookUrl,
        authorName: authorName,
        copiesAvailable: copiesAvailable,
      })
      .then((response) => {
        alert(response.data.msg);
      });
  };

  return (
    <div className="addBookWrapper">
      <Link to="/Adminpage">Back to Library</Link>
      <div className="title">
        <h1>Add Book</h1>
      </div>
      <div className="inputDiv">
        <label htmlFor="fileInput">Click to Add Image for Book</label>
        <input
          type="file"
          id="fileInput"
          onChange={(e) => {
            setBookImage(e.target.files[0]);
          }}
        />
        <input
          type="text"
          placeholder="Book Name"
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Author Names"
          onChange={(e) => {
            setAuthorName(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Copies Available"
          onChange={(e) => {
            setCopiesAvailable(e.target.value);
          }}
        />
        <button onClick={addBook}>Add New Book</button>
      </div>
    </div>
  );
}

export default Addbook;
