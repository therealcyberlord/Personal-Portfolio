import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/therealcyberlord", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/xingyu-bian-1734bb134/", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:xingyubiancyberland@gmail.com", label: "Email" },
  ];

  return (
    <footer className="border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="display text-2xl text-gray-200">
              Xingyu Bian
            </h3>
            <p className="text-gray-500 text-sm">
              Software engineer &amp; AI researcher
            </p>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2.5 text-gray-500 transition-colors hover:text-sky-400"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} Xingyu Bian
          </p>
          <p className="font-mono text-xs text-gray-600">
            React · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
