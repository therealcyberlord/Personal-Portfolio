import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/therealcyberlord", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/xingyu-bian-1734bb134/", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:xingyubiancyberland@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white tracking-tighter mb-1">
              Xingyu Bian
            </h3>
            <p className="text-gray-400 text-sm tracking-tight">
              Software Engineer & AI Researcher
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm tracking-tight">
            &copy; {currentYear} Xingyu Bian. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm tracking-tight">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
