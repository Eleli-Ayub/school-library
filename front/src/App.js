import "./App.scss";
import Login from "./Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Adminpage from "./AdminPage/Admin";
import Addbook from "./Addbook/Addbook";
import Checkout from "./Checkout/Checkout";
import Students from "./Students/Students";
import Library_logs from "./LibraryLogs/Librarylogs";
import Borrowedbooks from "./BorrowedBooks/Borrowedbooks";
import Studentlogin from "./StudentLogin/Studentlogin";
import Homepage from "./Homepage/Homepage";
import Studentsignup from "./StudentSignup/Studentsignup";
import Profile from "./StudentProfile/Profile";
import Book from "./Bookprofile/Book";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Adminpage" element={<Adminpage />} />
          <Route path="/Addbook" element={<Addbook />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Students" element={<Students />} />
          <Route path="/Librarylogs" element={<Library_logs />} />
          <Route path="/Borrowedbooks" element={<Borrowedbooks />} />
          <Route path="/Studentlogin" element={<Studentlogin />} />
          <Route path="/Studentsignup" element={<Studentsignup />} />
          <Route path="/Studentprofile" element={<Profile />} />
          <Route path="/Bookprofile" element={<Book />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
