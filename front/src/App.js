import './App.scss';
import Login from './Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Homepage/Homepage';
import Addbook from './Addbook/Addbook';
import Checkout from './Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Homepage' element={<Homepage/>}/>
          <Route path='/Addbook' element={<Addbook/>}/>
          <Route path='/Checkout' element={<Checkout/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
