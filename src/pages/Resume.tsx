import { useState } from 'react';
import { Sun, Moon } from "lucide-react";
import Trinitylogo from "../../public/images/logos/Trinity.png";
import CICSlogo from "../../public/images/logos/CICS.jpeg";
import AICampLogo from "../../public/images/logos/AICamp.png";
import ACMMLLogo from "../../public/images/logos/ACMML.jpeg";
import UMassLogo from "../../public/images/logos/UMass.png";

const calculateDuration = (start: string, end: string): string => {
  const startDate = new Date(start);
  const endDate = end === "Present" ? new Date() : new Date(end);
  const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  return `${years > 0 ? `${years} year${years > 1 ? "s" : ""} ` : ""}${remainingMonths > 0 ? `${remainingMonths} month${remainingMonths > 1 ? "s" : ""}` : ""}`.trim();
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString + 'T12:00:00Z'); // Force to midday UTC to avoid timezone issues
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short" };
  return date.toLocaleDateString(undefined, options);
};

interface DescriptionItem {
  text: string;
  link?: { url: string; label: string };
  suffix?: string;
}

const resumeData: Array<{
  title: string;
  institution: string;
  startDate: string; // Format: YYYY-MM
  endDate: string;   // Format: YYYY-MM or 'Present'
  location: string;
  description: DescriptionItem[];
  logo: string;
}> = [
  {
    title: "Software Engineer",
    institution: "Trinity Life Sciences",
    startDate: "2025-01",
    endDate: "Present",
    location: "Greater Boston, Massachusetts, United States",
    description: [
      { text: "Agents, AI workflows, Retrieval Augmented Generation, and full-stack development" },
      { text: "I work on experimental AI features, piloting new technologies, and build full-stack features for both internal and external needs"}
    ],
    logo: Trinitylogo
  },
  {
    title: "Generative AI Intern, Trinity Life Sciences",
    institution: "Trinity Life Sciences",
    startDate: "2024-06",
    endDate: "2024-08",
    location: "Greater Boston, Massachusetts, United States",
    description: [
      { text: "Architected a production-ready evaluation system for a biopharma-focused RAG platform, using LlamaIndex 🦙 and Litestar to build performant endpoints on a python-based microservice" },
      { text: "Boosted hybrid search relevance by 50%, improving LLM understanding of industry and company-specific lingo using a custom approach" },
      { text: "Hired as the first AI/ML intern in company history" }
    ],
    logo: Trinitylogo
  },
  {
    title: "AI Researcher, UMass BioNLP Lab",
    institution: "Manning College of Information and Computer Sciences, UMass Amherst",
    startDate: "2024-02",
    endDate: "2025-01",
    location: "Amherst, Massachusetts, United States",
    description: [
      { text: "Conducted NLP research in retrieval-augmented generation (RAG), agentic patterns, test-time compute, and LLM evaluation incorporating human experts in the loop" },
      { text: "Contributed to the design of agentic patterns that enhance reasoning across medical benchmarks of varying difficulty levels by identifying compute-optimal settings for scaling" },
      { text: "Fine-tuned custom judge models for medical education via knowledge distillation from foundational models (Qwen, LLaMA) using QLoRA with UnSloth 🦥 and Hugging Face Transformers 🤗, deployed with VLLM for inference" }
    ],
    logo: CICSlogo
  },
  {
    title: "Undergraduate Course Assistant",
    institution: "Manning College of Information and Computer Sciences, UMass Amherst",
    startDate: "2023-02",
    endDate: "2023-12",
    location: "Amherst, Massachusetts, United States",
    description: [
      { text: "Supported course delivery by grading assignments while assisting professors with course material preparation" },
      { text: "Provided guidance to students in courses: CS 389 (Introduction to Machine Learning) and CS 383 (Artificial Intelligence)" }
    ],
    logo: CICSlogo
  },
  {
    title: "Machine Learning Intern",
    institution: "AI Camp Inc.",
    startDate: "2023-05",
    endDate: "2023-08",
    location: "Palo Alto, California, United States",
    description: [
      { text: "Engineered a PoC RAG system, Hintings AI, for document-based QA using LangChain 🦜⛓️‍💥 and ChromaDB, awarded best RAG product among 6 development teams" },
      { text: "Led machine learning engineering initiatives, integrating web search via SerpApi and image generation with Stable Diffusion" }
    ],
    logo: AICampLogo
  },
  {
    title: "Vice President",
    institution: "UMass Machine Learning Club",
    startDate: "2021-05",
    endDate: "2023-07",
    location: "Amherst, Massachusetts, United States",
    description: [
      { text: "Organized events, workshops, and projects to foster a community of ML enthusiasts at UMass" },
    ],
    logo: ACMMLLogo
  },
  {
    title: "Undergraduate Research Assistant",
    institution: "University of Massachusetts Amherst",
    startDate: "2021-09",
    endDate: "2022-01",
    location: "Amherst, Massachusetts, United States",
    description: [
      { text: "Conducted research on graph neural networks with the Zhou Lin Quantum Chemistry group" },
      { text: "Learned a lot about PyTorch specifically PyTorch Geometric" }
    ],
    logo: UMassLogo
  }
];

const sortedResumeData = [...resumeData].sort((a, b) => {
  if (a.endDate === "Present" && b.endDate !== "Present") return -1;
  if (a.endDate !== "Present" && b.endDate === "Present") return 1;
  if (a.endDate === b.endDate) {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  }
  return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
});

const Resume = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const baseClasses = darkMode ? 
    "bg-gray-900 text-white transition-colors duration-300" : 
    "bg-gray-100 text-gray-800 transition-colors duration-300";

  const cardClasses = darkMode ? 
    "bg-gray-800 shadow-lg" : 
    "bg-white shadow-lg";

  const buttonClasses = darkMode ?
    "text-gray-300 hover:text-white border-gray-600 hover:border-gray-400" :
    "text-gray-600 hover:text-gray-800 border-gray-300 hover:border-gray-400";

  const headingClasses = darkMode ?
    "text-white" :
    "text-gray-800";

  const subheadingClasses = darkMode ?
    "text-gray-300" :
    "text-gray-600";

  const metaClasses = darkMode ?
    "text-gray-400" :
    "text-gray-500";

  const descriptionClasses = darkMode ?
    "text-gray-300" :
    "text-gray-700";

  return (
    <div className={`min-h-screen py-12 px-6 sm:px-8 lg:px-24 ${baseClasses}`}>
      <div className={`max-w-4xl mx-auto p-8 rounded-lg ${cardClasses}`}>
        <div className="flex justify-end mb-4 space-x-4">
          <button
            onClick={toggleDarkMode}
            className={`flex items-center space-x-2 px-4 py-2 border rounded-md transition-all duration-300 ${buttonClasses}`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
         
        </div>
        <h1 className={`text-4xl font-bold text-center mb-8 ${headingClasses}`}>My Resume</h1>
        {sortedResumeData.map((item, index) => (
          <div key={index} className="mb-8 flex flex-col md:flex-row items-center md:items-start">
            {item.logo && (
              <div className="w-24 h-24 flex-shrink-0 mb-4 md:mb-0 md:mr-6 rounded-lg overflow-hidden" style={{ background: darkMode ? 'rgba(255,255,255,0.10)' : 'transparent' }}>
                <img src={item.logo} alt={`${item.institution} logo`} className="w-full h-full object-contain" style={{ background: darkMode ? 'rgba(255,255,255,0.85)' : 'transparent', borderRadius: '0.5rem' }} />
              </div>
            )}
            <div>
              <h2 className={`text-2xl font-semibold ${headingClasses}`}>{item.title}</h2>
              <h3 className={`text-xl ${subheadingClasses}`}>{item.institution}</h3>
              <p className={`text-sm ${metaClasses}`}>
                {formatDate(item.startDate)} - {item.endDate === "Present" ? "Present" : formatDate(item.endDate)}
                {calculateDuration(item.startDate, item.endDate) && !calculateDuration(item.startDate, item.endDate).startsWith("0")
                  ? ` (${calculateDuration(item.startDate, item.endDate)})`
                  : ""}
                - {item.location}
              </p>

              {item.description && (
                <ul className={`list-disc list-inside mt-2 ${descriptionClasses}`}>
                  {item.description.map((desc, i) => (
                    <li key={i}>
                      {desc.text}
                      {desc.link && desc.link.url && desc.link.label && (
                        <a
                          href={desc.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${darkMode ? 'text-blue-400' : 'text-blue-500'} underline`}
                        >
                          {desc.link.label}
                        </a>
                      )}
                      {desc.suffix ? desc.suffix : ''}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;