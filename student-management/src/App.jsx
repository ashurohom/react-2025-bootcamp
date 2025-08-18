import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Students from "./Pages/Student";
import About from "./Pages/About";
import "./Navbar.css";   // <-- Import the CSS file

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/students">Students</Link>
        <Link to="/about">About</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
