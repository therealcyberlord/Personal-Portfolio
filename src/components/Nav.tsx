import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, FolderGit2, FileText, ExternalLink } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    { path: "/projects", label: "Projects", icon: <FolderGit2 className="w-4 h-4" /> },
    { path: "/resume", label: "Resume", icon: <FileText className="w-4 h-4" /> }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-gray-900/90 backdrop-blur-md border-b border-gray-800 py-2'
        : 'bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50 py-3'
      }`}>
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-white font-bold text-2xl md:text-3xl flex items-center gap-2 hover:text-sky-400 transition-all duration-300 hover:scale-105 tracking-tighter"
          >
            <span>Xingyu</span>
            <span className="text-3xl" role="img" aria-label="sloth">🦥</span>
          </Link>

          <ul className="flex items-center space-x-1 sm:space-x-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`
                    px-3 py-2 rounded-lg flex items-center gap-2
                    transition-all duration-300 transform hover:scale-105 font-medium
                    ${isActiveRoute(item.path)
                      ? 'text-sky-400 bg-sky-400/10'
                      : 'text-gray-300 hover:text-sky-400 hover:bg-gray-800'
                    }
                  `}
                >
                  {item.icon}
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              </li>
            ))}

            <li>
              <a
                href="https://www.linkedin.com/in/xingyu-bian-1734bb134/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-sky-400 hover:bg-gray-800 rounded-lg transition-all duration-300 hover:scale-105 font-medium"
              >
                <FaLinkedin className="w-4 h-4" />
                <span className="hidden sm:inline">LinkedIn</span>
                <ExternalLink className="w-3 h-3 hidden sm:inline-block opacity-50" />
              </a>
            </li>

            <li className="ml-1">
              <a
                href="https://github.com/therealcyberlord"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-all duration-300 hover:scale-105 hover:shadow-lg font-medium"
              >
                <FaGithub className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;