import { Routes, Route } from 'react-router-dom'
import Home from "./templates/Home";
import About from "./templates/About";
import Contact from "./templates/Contact";
import Header from "./components/Header/Header"
// import Navbar from "./Navbar";

function App() {
  return (
    <div className='app'>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
