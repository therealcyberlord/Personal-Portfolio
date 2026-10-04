import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SITE } from "@/data/site";

const socialLinks = [
  { icon: <FaGithub className="h-5 w-5" />, href: SITE.github, label: "GitHub" },
  { icon: <FaLinkedin className="h-5 w-5" />, href: SITE.linkedin, label: "LinkedIn" },
  { icon: <Mail className="h-5 w-5" />, href: `mailto:${SITE.email}`, label: "Email" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 px-6">
      <div className="mx-auto max-w-5xl py-14">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="display text-2xl text-gray-200">{SITE.name}</p>
            <p className="text-sm text-gray-500">Software engineer &amp; AI researcher</p>
          </div>

          <ul className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="block rounded-lg p-2.5 text-gray-500 transition-colors hover:text-sky-400"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gray-800 pt-8 md:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} {SITE.name} <span role="img" aria-label="sloth">🦥</span>
          </p>
          <p className="font-mono text-xs text-gray-500">React · TypeScript · Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
