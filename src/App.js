import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
function App() {
  return (
    <div className='bg-blue-900'>
      <Navbar/>
      <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
      </div>
      
    </div>
  );
}

export default App;
