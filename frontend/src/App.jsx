import "./App.css";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";

function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Container>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route
              path="/experience"
              element={<Experience></Experience>}
            ></Route>
            <Route path="/projects" element={<Projects></Projects>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
