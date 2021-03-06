import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.scss";
import person from "./person.jpg";
import axios from "axios";

function Profile() {
  const [students, setStudents] = useState([]);
  axios
    .get("http://localhost:4000/api/students/get-students")
    .then((response) => {
      setStudents(response.data);
      return;
    });
  return (
    <div className="profileWrapper">
      <Link to="/Adminpage">Back Home</Link>
      {students.map((student) => {
        return (
          <div className="container">
            <div className="userDetails">
              <img src={student.ImageUrl} alt="" />
              <div className="details">
                <p>
                  <b>Name: </b> <span>Eleli Ayub</span>
                </p>
                <p>
                  <b>Reg No: </b> <span>BUS-242-026/2018</span>
                </p>
                <p>
                  <b>Course: </b> <span>BBIT</span>
                </p>
              </div>
            </div>
            <div className="information">
              <div className="issuesBooks">
                <h1>Book Previusly Issued</h1>
                <ul>
                  <li>Alchemist</li>
                  <li>Alchemist</li>
                  <li>Alchemist</li>
                  <li>Alchemist</li>
                  <li>Alchemist</li>
                  <li>Alchemist</li>
                  <li>Alchemist</li>
                </ul>
              </div>
              <div className="defaultBooks">
                <h1>Book Not Returned</h1>
                <ul>
                  <li>Alchemist</li>
                  <li>Alchemist</li>
                  <li>Alchemist</li>
                  <li>Alchemist</li>
                  <li>Alchemist</li>
                  <li>Alchemist</li>
                </ul>
              </div>
              <div className="stats">
                <h1>Stats Faults and Fines</h1>
                <div className="statInfo">
                  <p>
                    <b>Total Reads: </b> <span>20</span>
                  </p>
                  <p>
                    <b>Late Returns: </b> <span>10</span>
                  </p>
                  <p>
                    <b>Lost Books: </b> <span>10</span>
                  </p>
                  <div className="fine">
                    <h1>Total Fine: </h1>
                    <h2>
                      Ksh. <span>1,200</span>
                    </h2>
                  </div>
                </div>
              </div>
              <h3 className="footerNote">
                <i>Wangwana School Library System</i>
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Profile;
