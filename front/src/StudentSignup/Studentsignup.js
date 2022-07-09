import React, { useState } from "react";
import "./Studentsignup.scss";
import Axios from "axios";
import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { Link, useNavigate } from "react-router-dom";
import { v4 } from "uuid";

function Studentsignup() {
  let navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [imageurl, setImageUrl] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [adminNo, setAdminNo] = useState("");
  const [course, setCourse] = useState("");
  const [password, setPassword] = useState(null);
  const [repeatPassword, setRepeatPassword] = useState("");

  //Function to upload image to firebase
  const uploadImage = () => {
    if (image == null) {
      alert("Image not selected \nPlease Select an image to continue");
      return;
    } else {
      const imageRef = ref(storage, `student-images/${image.name + v4()}`);
      uploadBytes(imageRef, image).then((snapshot) => {
        alert("Profile Picture Uploaded");
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrl(url);
        });
      });
    }
  };

  const register = (e) => {
    if (imageurl == null) {
      return alert("Please upload an Image First");
    } else if (password !== repeatPassword) {
      return alert("Passwords don't match!!!");
    } else {
      try {
        Axios.post("http://localhost:4000/api/students/signup", {
          imageurl: imageurl,
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          emailAddress: emailAddress,
          adminNo: adminNo,
          course: course,
          password: password,
        }).then((response) => {
          alert(firstName + " " + lastName + " " + response.data);
          navigate("/Studentlogin");
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="studentsignup">
      <h1>Wangwana Library System</h1>
      <div className="inputContainer">
        <div className="image">
          <div className="input">
            <input
              type="file"
              id="file"
              className="fileInput"
              onChange={(event) => {
                setImage(event.target.files[0]);
              }}
            />
            <label htmlFor="file"></label>
            <p>Select Image</p>
          </div>
          <button onClick={uploadImage}>Upload Photo</button>
        </div>
        <div className="personalDetails">
          <div className="names">
            <div>
              <p>First Name</p>
              <input
                type="text"
                onChange={(event) => {
                  console.log("Image Selected");
                  setFirstName(event.target.value);
                }}
              />
            </div>
            <div>
              <p>Last Name</p>
              <input
                type="text"
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="contacts">
            <div>
              <p>Phone Number</p>
              <input
                type="text"
                onChange={(event) => {
                  setPhoneNumber(event.target.value);
                }}
              />
            </div>
            <div>
              <p>Email Address</p>
              <input
                type="text"
                onChange={(event) => {
                  setEmailAddress(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="details">
            <div>
              <p>Admin No</p>
              <input
                type="text"
                onChange={(event) => {
                  setAdminNo(event.target.value);
                }}
              />
            </div>
            <div>
              <p>Course</p>
              <input
                type="text"
                onChange={(event) => {
                  setCourse(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="passwords">
            <div>
              <p>Password</p>
              <input
                type="password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div>
              <p>Repeat Password</p>
              <input
                type="password"
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="terms">
            I have read the <a href="#"> Terms </a> and agree
            <input type="checkbox" name="" id="" />
          </div>
          <button onClick={register}>Register</button>
          <div className="bottom">
            Already have an account? <a href="#">Login.</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studentsignup;
