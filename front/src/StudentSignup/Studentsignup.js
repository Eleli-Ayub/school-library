import React from "react";
import "./Studentsignup.scss";
import { Link } from "react-router-dom";

function Studentsignup() {
  return (
    <div className="studentsignup">
      <h1>Wangwana Library System</h1>
      <div className="inputContainer">
        <div className="image">
          <div className="input">
            <input type="file" id="file" className="fileInput" />
            <label htmlFor="file"></label>
            <p>Select Image</p>
          </div>
          <button>Upload Photo</button>
        </div>
        <div className="personalDetails">
          <div className="names">
            <div>
              <p>First Name</p>
              <input type="text" />
            </div>
            <div>
              <p>Last Name</p>
              <input type="text" />
            </div>
          </div>
          <div className="contacts">
            <div>
              <p>Phone Number</p>
              <input type="text" />
            </div>
            <div>
              <p>Email Address</p>
              <input type="text" />
            </div>
          </div>
          <div className="details">
            <div>
              <p>Phone Number</p>
              <input type="text" />
            </div>
            <div>
              <p>Email Address</p>
              <input type="text" />
            </div>
          </div>
          <div className="terms">
            I have read the <a href="#"> Terms </a> and agree
            <input type="checkbox" name="" id="" />
          </div>
          <button>Register</button>
          <div className="bottom">
            Already have an account? <a href="#">Login.</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studentsignup;
