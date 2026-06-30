import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Resume from "@/pages/Resume";
import NotFound from "@/pages/NotFound";
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="flex min-h-dvh flex-col font-sans">
      <div className="grain" aria-hidden="true" />
      <Router>
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;