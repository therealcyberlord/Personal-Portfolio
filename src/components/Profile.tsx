import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, NotebookText } from 'lucide-react';

interface ProfileProps {
  name: string;
  description: string;
  img_path: string;
  role: string;
}

const Profile: React.FC<ProfileProps> = ({
  name,
  description,
  img_path,
  role,
}) => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 40;
    const descriptionLength = description.length;

    const typingEffect = setTimeout(() => {
      if (currentIndex < descriptionLength) {
        setTypedText((prevText) => prevText + description[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(typingEffect);
  }, [currentIndex, description]);

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, href: "https://github.com/therealcyberlord" },
    { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/xingyu-bian-1734bb134/" },
    { icon: <Mail className="w-6 h-6" />, href: "mailto:xingyubian@umass.edu" },
    { icon: <NotebookText className="w-6 h-6" />, href: "https://paperswithcode.com/search?q=author%3AXingyu+Bian" },
  ];

  return (
    <div className="relative overflow-hidden py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900/20 to-gray-900/20 backdrop-blur-sm" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full object-cover shadow-xl border-4 border-sky-400/20"
              src={img_path}
              alt="Profile picture"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-400/20 to-transparent" />
          </div>

          <div className="mt-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white bg-clip-text">
              {name}
            </h2>
            <h3 className="text-xl md:text-2xl text-sky-400 mt-2 font-medium">
              {role}
            </h3>
          </div>

          <div className="flex gap-6 mt-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-sky-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="mt-8 max-w-3xl text-center">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {typedText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;