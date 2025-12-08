import { useState } from 'react';
import { Sun, Moon } from "lucide-react";
import Trinitylogo from "/images/logos/Trinity.png";
import CICSlogo from "/images/logos/CICS.jpeg";
import AICampLogo from "/images/logos/AICamp.png";
import ACMMLLogo from "/images/logos/ACMML.jpeg";
import UMassLogo from "/images/logos/UMass.png";
import { calculateDuration } from "@/utils/time";

const formatDate = (dateString: string): string => {
  const date = new Date(dateString + 'T12:00:00Z');
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short" };
  return date.toLocaleDateString(undefined, options);
};

type DescriptionItem = {
  text: string;
  link?: { url: string; label: string };
}

type ResumeExperience = {
  title: string;
  institution: string;
  startDate: string;
  endDate: string;
  location: string;
  description: DescriptionItem[];
  logo: string;
}

const resumeData: ResumeExperience[] = [
  {
    title: "Software Engineer",
    institution: "Trinity Life Sciences",
    startDate: "2025-01",
    endDate: "Present",
    location: "Greater Boston, MA",
    description: [
      { text: "Lead development of a quantitative analytics platform, generating $200K+ in new revenue within the first three months by iterating on user feedback and shipping high-impact features" },
      { text: "Build and maintain scalable full-stack systems, supporting 1,000+ monthly active users across enterprise clients and internal teams using React, Node.js, Python, PostgreSQL, and Sentry" },
      { text: "Design AI workflows to automate insight extraction and visualization from structured clinical data, minimizing manual data analysis leveraging Azure OpenAI, Pydantic/Zod, and LlamaIndex" }
    ],
    logo: Trinitylogo
  },
  {
    title: "AI Engineer Intern (First Intern Hire)",
    institution: "Trinity Life Sciences",
    startDate: "2024-06",
    endDate: "2024-08",
    location: "Greater Boston, MA",
    description: [
      { text: "Optimized enterprise RAG systems, improving retrieval relevance by 50% via hybrid search and query rewriting using Weaviate, spaCy, and PostgreSQL" },
      { text: "Engineered a dedicated RAG evaluation service to systematically benchmark and monitor performance with LlamaIndex and Litestar" }
    ],
    logo: Trinitylogo
  },
  {
    title: "NLP Researcher, UMass BioNLP Lab",
    institution: "Manning College of Information and Computer Sciences, UMass Amherst",
    startDate: "2024-02",
    endDate: "2025-01",
    location: "Amherst, MA",
    description: [
      { text: "Researched RAG grounded on medical datasets, test-time compute scaling, and LLM evaluation" },
      { text: "Implemented agentic design patterns (planning, reflection, tool-use) to improve reasoning on challenging benchmarks with compute-optimal scaling strategies" },
      { text: "Trained judge models on GPU clusters and leveraged VLLM for batch inference to evaluate patient encounter simulations, achieving 93% correlation with human evaluations using PEFT" }
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
    institution: "AI Camp Inc. (Ed-tech startup)",
    startDate: "2023-05",
    endDate: "2023-08",
    location: "Palo Alto, CA",
    description: [
      { text: "Developed a PoC RAG application, earning the Best Product Nomination out of 6 engineering teams utilizing LangChain, Chroma, and NeMo Guardrails" },
      { text: "Mentored 10+ students on machine learning and web development fundamentals using Scikit-Learn, Transformers, and Flask" }
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
  const [darkMode, setDarkMode] = useState(true);

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
        <h1 className={`text-4xl font-bold text-center mb-8 ${headingClasses} tracking-tighter`}>My Resume</h1>
        {sortedResumeData.map((item, index) => (
          <div key={index} className="mb-8 flex flex-col md:flex-row items-center md:items-start">
            {item.logo && (
              <div className="w-24 h-24 shrink-0 mb-4 md:mb-0 md:mr-6 rounded-lg overflow-hidden" style={{ background: darkMode ? 'rgba(255,255,255,0.10)' : 'transparent' }}>
                <img src={item.logo} alt={`${item.institution} logo`} className="w-full h-full object-contain" style={{ background: darkMode ? 'rgba(255,255,255,0.85)' : 'transparent', borderRadius: '0.5rem' }} />
              </div>
            )}
            <div>
              <h2 className={`text-2xl font-bold ${headingClasses} tracking-tighter`}>{item.title}</h2>
              <h3 className={`text-xl font-semibold ${subheadingClasses} tracking-tighter`}>{item.institution}</h3>
              <p className={`text-sm ${metaClasses} font-medium tracking-tight`}>
                {formatDate(item.startDate)} - {item.endDate === "Present" ? "Present" : formatDate(item.endDate)}
                {calculateDuration(item.startDate, item.endDate) && !calculateDuration(item.startDate, item.endDate).startsWith("0")
                  ? ` (${calculateDuration(item.startDate, item.endDate)})`
                  : ""}
                - {item.location}
              </p>

              {item.description && (
                <ul className={`list-disc list-inside mt-2 ${descriptionClasses} space-y-1`}>
                  {item.description.map((desc, i) => (
                    <li key={i} className="leading-relaxed tracking-tight">
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