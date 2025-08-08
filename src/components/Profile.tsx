import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, NotebookText } from 'lucide-react';

type ProfileProps = {
  name: string;
  description: string;
  img_path: string;
  role: string;
}

const Profile = ({
  name,
  description,
  img_path,
  role
}: ProfileProps) => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

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
    { icon: <NotebookText className="w-6 h-6" />, href: "https://arxiv.org/abs/2410.01553" },
  ];

  return (
    <div className="relative overflow-hidden py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900/20 to-gray-900/20 backdrop-blur-sm" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="relative mb-8">
            <div className={`transition-all duration-1000 ${isImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <img
                onLoad={() => setIsImageLoaded(true)}
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full object-cover shadow-xl border-4 border-sky-400/20"
                src={img_path}
                alt="Profile picture"
              />
            </div>
          </div>

          <div className={`mt-8 text-center transition-all duration-1000 delay-300 ${isImageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter animate-fade-in">
              {name}
            </h2>
            <h3 className="text-xl md:text-2xl text-sky-400 mt-2 font-semibold tracking-tight">
              {role}
            </h3>
          </div>

          <div className={`flex gap-6 mt-6 transition-all duration-1000 delay-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-sky-400 transition-colors duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className={`mt-8 max-w-3xl text-center transition-all duration-1000 delay-700 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed tracking-tight">
              {typedText}
              <span className="ml-1 inline-block w-1 h-6 bg-sky-400 animate-blink"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;