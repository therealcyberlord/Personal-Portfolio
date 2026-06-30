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

    window.addEventListener('scroll', handleScroll, { passive: true });
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
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className={`flex items-center gap-1 rounded-full border py-1.5 pl-2 pr-1.5 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${scrolled
          ? 'border-gray-700/70 bg-gray-950/80 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]'
          : 'border-gray-700/40 bg-gray-950/55'
          }`}
      >
        <Link
          to="/"
          className="display flex items-center gap-1.5 rounded-full px-3 py-1 text-xl text-gray-200 transition-colors hover:text-sky-400"
        >
          <span>Xingyu</span>
          <span className="text-base" role="img" aria-label="sloth">🦥</span>
        </Link>

        <span className="mx-1 hidden h-5 w-px bg-gray-700/60 sm:block" aria-hidden="true" />

        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            aria-current={isActiveRoute(item.path) ? "page" : undefined}
            className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm transition-colors duration-300 ${isActiveRoute(item.path)
              ? 'bg-sky-400/10 text-sky-400'
              : 'text-gray-400 hover:text-gray-200'
              }`}
          >
            {item.icon}
            <span className="hidden md:inline">{item.label}</span>
          </Link>
        ))}

        <a
          href="https://www.linkedin.com/in/xingyu-bian-1734bb134/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex items-center gap-2 rounded-full px-3 py-2 text-sm text-gray-400 transition-colors duration-300 hover:text-gray-200"
        >
          <FaLinkedin className="w-4 h-4" />
          <span className="hidden md:inline">LinkedIn</span>
          <ExternalLink className="hidden w-3 h-3 opacity-50 md:inline-block" />
        </a>

        <a
          href="https://github.com/therealcyberlord"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="group ml-1 flex items-center gap-2 rounded-full bg-gray-200 py-2 pl-4 pr-2 text-sm font-medium text-gray-950 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white active:scale-[0.97]"
        >
          <span className="hidden sm:inline">GitHub</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-950/10 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
            <FaGithub className="w-3.5 h-3.5" />
          </span>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;