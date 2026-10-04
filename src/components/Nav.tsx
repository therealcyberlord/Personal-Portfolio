import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, FolderGit2, FileText, ExternalLink } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SITE } from "@/data/site";

const navItems = [
  { path: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
  { path: "/projects", label: "Projects", icon: <FolderGit2 className="w-4 h-4" /> },
  { path: "/resume", label: "Resume", icon: <FileText className="w-4 h-4" /> }
];

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

  const isActiveRoute = (path: string) => location.pathname === path;

  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4 sm:px-4">
      <nav
        aria-label="Main"
        className={`flex items-center gap-0.5 rounded-full border py-1.5 pl-1.5 pr-1.5 sm:gap-1 sm:pl-2 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-500 ease-spring ${scrolled
          ? 'border-gray-700/70 bg-gray-950/80 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]'
          : 'border-gray-700/40 bg-gray-950/55'
          }`}
      >
        <Link
          to="/"
          className="display rounded-full px-2.5 py-1 text-xl text-gray-200 transition-colors hover:text-sky-400 sm:px-3"
        >
          Xingyu
        </Link>

        <span className="mx-1 hidden h-5 w-px bg-gray-700/60 sm:block" aria-hidden="true" />

        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            aria-current={isActiveRoute(item.path) ? "page" : undefined}
            aria-label={item.label}
            className={`flex items-center gap-2 rounded-full px-2.5 py-2 text-sm transition-colors duration-300 sm:px-3 ${isActiveRoute(item.path)
              ? 'bg-sky-400/10 text-sky-400'
              : 'text-gray-400 hover:text-gray-200'
              }`}
          >
            {item.icon}
            <span className="hidden md:inline">{item.label}</span>
          </Link>
        ))}

        <a
          href={SITE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm text-gray-400 min-[400px]:flex transition-colors duration-300 hover:text-gray-200"
        >
          <FaLinkedin className="w-4 h-4" />
          <span className="hidden md:inline">LinkedIn</span>
          <ExternalLink className="hidden w-3 h-3 opacity-50 md:inline-block" />
        </a>

        <a
          href={SITE.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="group ml-1 flex items-center gap-2 rounded-full bg-gray-200 p-2 sm:pl-4 text-sm font-medium text-gray-950 transition-transform duration-300 ease-spring hover:bg-white active:scale-[0.97]"
        >
          <span className="hidden sm:inline">GitHub</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-950/10 transition-transform duration-300 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-px">
            <FaGithub className="w-3.5 h-3.5" />
          </span>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;