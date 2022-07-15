import "./App.scss";
import Login from "./Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Adminpage from "./AdminPage/Admin";
import Addbook from "./Addbook/Addbook";
import Checkout from "./Checkout/Checkout";
import Studentpage from "./Studentspage/Studentpage";
import Studentlogin from "./StudentLogin/Studentlogin";
import Homepage from "./Homepage/Homepage";
import Studentsignup from "./StudentSignup/Studentsignup";
import Profile from "./StudentProfile/Profile";
import Booksreport from "./AdminPage/Booksreport/Booksreport";
import Dailyreport from "./AdminPage/Reports/Dailyreport";
import Borrowed from "./AdminPage/BorrowedBooks/Borrowed";
import Salesreport from "./AdminPage/Reports/Salesreport";
import Weeklyreport from "./AdminPage/Reports/Weeklyreport";

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
          <Route path="/" element={<Studentlogin />} />
          <Route path="/Studentsignup" element={<Studentsignup />} />
          <Route path="/Studentprofile" element={<Profile />} />
          <Route path="/Bookprofile" element={<Booksreport />} />
          <Route path="/Studentspage" element={<Studentpage />} />
          <Route path="/Booksreport" element={<Booksreport />} />
          <Route path="/Borrowedbooks" element={<Borrowed />} />
          <Route path="/Salesreport" element={<Salesreport />} />
          <Route path="/Lastdayreport" element={<Dailyreport />} />
          <Route path="/Weeklyreport" element={<Weeklyreport />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
