//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

      <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
