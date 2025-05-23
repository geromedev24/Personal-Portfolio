import "./App.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import PageNotFound from "../pages/PageNotFound";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Marquee from "../components/Marquee";

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
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          </Routes>
        </Container>
      </Router>
      <Marquee></Marquee>
      <Footer></Footer>
    </>
  );
}

export default App;
