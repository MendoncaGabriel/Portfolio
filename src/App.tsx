import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Contact } from "./pages/Contact";
import { AboutMe } from "./pages/AboutMe";
import { Articles } from "./pages/Articles";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar />

        <div className="flex-grow mt-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Portfolio" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
