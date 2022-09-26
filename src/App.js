
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Origami from "./components/Origami";
import OrigamiItem from "./components/Subcomponents/OrigamiItem"
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/projects"
          element={<Projects />}
        />
        <Route
          path="/origami"
          element={<Origami />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/origami/:id"
          element={<OrigamiItem />}
        />
      </Routes>
      
    </Router>

    
                


  );
}

export default App;
