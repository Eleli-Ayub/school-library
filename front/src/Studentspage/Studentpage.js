import React, { useEffect, useState } from "react";
import "./Studentpage.scss";
import Book from "./Book/Book";
import { Link, useNavigate } from "react-router-dom";
import searchIcon from "./search.png";
import axios from "axios";

function Students() {
  const navigate = useNavigate();
  const [authorized, setAuthorised] = useState(false);

  return (
    <div className="homePageWrapper">
      <div className="header">
        <button
          className="logout"
          onClick={() => {
            navigate("/Studentlogin");
          }}
        >
          Logout
        </button>
        <div className="title">
          <h1>Wangwana School Library System.</h1>
        </div>
        <div className="searchArea">
          <input type="text" placeholder="Enter Author or Book Name" />
          <button>
            {" "}
            <img src={searchIcon} alt="" /> Search Book
          </button>
        </div>
      </div>
      <div className="books">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </div>
  );
}

export default Students;
