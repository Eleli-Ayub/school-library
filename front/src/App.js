import './App.scss';
import Login from './Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Homepage/Homepage';
import Addbook from './Addbook/Addbook';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Homepage' element={<Homepage/>}/>
          <Route path='/Addbook' element={<Addbook/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
