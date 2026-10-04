import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Resume from "@/pages/Resume";
import NotFound from "@/pages/NotFound";
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  return (
    <div className="flex min-h-dvh flex-col font-sans">
      <a
        href="#main"
        onClick={(e) => {
          // HashRouter owns the URL hash, so focus the target instead of navigating
          e.preventDefault();
          document.getElementById("main")?.focus();
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-gray-200 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-gray-950"
      >
        Skip to content
      </a>
      <div className="grain" aria-hidden="true" />
      <Router>
        <ScrollToTop />
        <Navbar />
        <main id="main" tabIndex={-1} className="flex-1 outline-none">
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
