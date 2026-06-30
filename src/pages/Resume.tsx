import { Briefcase, GraduationCap } from "lucide-react";
import Trinitylogo from "/images/logos/Trinity.png";
import CICSlogo from "/images/logos/CICS.jpeg";
import AICampLogo from "/images/logos/AICamp.png";
import UMassLogo from "/images/logos/UMass.png";
import { calculateDuration } from "@/utils/time";
import Reveal from "@/components/Reveal";

const formatDate = (dateString: string): string => {
  const date = new Date(dateString + 'T12:00:00Z');
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short" };
  return date.toLocaleDateString(undefined, options);
};

type ResumeExperience = {
  title: string;
  institution: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
  logo: string;
}

type EducationEntry = {
  degree: string;
  institution: string;
  graduationLabel: string;
  location: string;
  logo: string;
  bullets: string[];
};

const educationData: EducationEntry[] = [
  {
    degree: "M.S. in Computer Science",
    institution: "University of Massachusetts Amherst",
    graduationLabel: "Graduated Dec 2024",
    location: "Amherst, MA",
    logo: UMassLogo,
    bullets: [
      "GPA: 3.86 / 4.0",
      "Relevant Coursework: Neural Networks, Machine Learning, Intelligent Visual Computing, Algorithms for Data Science, Software Engineering, Technical Project Management",
    ]
  },
  {
    degree: "B.S. in Computer Science",
    institution: "University of Massachusetts Amherst",
    graduationLabel: "Graduated Dec 2023",
    location: "Amherst, MA",
    logo: UMassLogo,
    bullets: [
      "GPA: 3.76 / 4.0",
    ]
  }
];

const resumeData: ResumeExperience[] = [
  {
    title: "Software Engineer",
    institution: "Trinity Life Sciences",
    startDate: "2025-01",
    endDate: "Present",
    location: "Greater Boston, MA",
    description: [
      "Build and own an AI analytics platform from 0 to 1, generating six-figure revenue within the first 90 days and reducing analysis delivery time by 40% through tight user feedback loops with stakeholders",
      "Engineer a hybrid LLM + deterministic cross-tab parser with an interactive visualization layer for real-time filtering and auto-suggested charts",
      "Design and deploy production multi-agent orchestration over life sciences market research data using LangChain and Deep Agents, with human-in-the-loop validation and Langfuse observability",
      "Ship full-stack platform features end-to-end (React, Node.js, PostgreSQL, AWS) serving 1,000+ monthly active users across enterprise clients and internal teams"
    ],
    logo: Trinitylogo
  },
  {
    title: "NLP Researcher",
    institution: "UMass BioNLP Lab",
    startDate: "2024-02",
    endDate: "2025-01",
    location: "Amherst, MA",
    description: [
      "Co-authored and presented MedQA-CS, a novel benchmark for evaluating LLMs via simulated clinical examinations, accepted at EACL 2026",
      "Implemented RAG strategies with agentic design patterns (planning, reflection, GraphRAG) and test-time compute scaling across medical reasoning benchmarks of varying complexity",
      "Curated a synthetic dataset via knowledge distillation from GPT-4 to fine-tune Qwen and Llama as judges, achieving 93% correlation with experts on clinical information gathering and physical exams"
    ],
    logo: CICSlogo
  },
  {
    title: "AI Engineer Intern (First Intern Hire)",
    institution: "Trinity Life Sciences",
    startDate: "2024-06",
    endDate: "2024-08",
    location: "Greater Boston, MA",
    description: [
      "Integrated OpenFDA as an external medical knowledge source into RAG pipelines, automating data updates via cron jobs to ensure the knowledge base stays current",
      "Enhanced hybrid search to recognize industry terminology and synonyms using Weaviate and spaCy, improving domain-specific retrieval"
    ],
    logo: Trinitylogo
  },
  {
    title: "Machine Learning Intern",
    institution: "AI Camp Inc. (Edtech Startup)",
    startDate: "2023-05",
    endDate: "2023-08",
    location: "Palo Alto, CA",
    description: [
      "Built a document QA system with RAG, web search, and hallucination mitigation using LangChain, Chroma, GPT-4, and NeMo Guardrails, nominated Best Product out of 6 engineering teams"
    ],
    logo: AICampLogo
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
  return (
    <div className="min-h-dvh bg-gray-950 pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <Reveal className="mb-14">
          <p className="eyebrow text-sky-400">Experience</p>
          <h1 className="display mt-3 text-5xl md:text-7xl text-gray-200">
            Resume
          </h1>
          <p className="mt-4 max-w-xl text-gray-400">
            My professional journey in software engineering and AI research.
          </p>
        </Reveal>

        {/* Education */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-5">
            <GraduationCap className="w-5 h-5 text-sky-400" />
            <h2 className="display text-2xl text-gray-200">Education</h2>
          </div>
          <div className="space-y-6">
            {educationData.map((edu, i) => (
              <Reveal key={`${edu.institution}-${edu.degree}`} delay={i * 70}>
              <div className="card hover:border-gray-600">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="shrink-0 flex justify-center md:justify-start">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-white p-2">
                      <img src={edu.logo} alt={`${edu.institution} logo`} className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <div>
                        <h2 className="text-lg font-medium text-gray-200">{edu.degree}</h2>
                        <h3 className="text-sky-400 text-sm">{edu.institution}</h3>
                      </div>
                      <div className="font-mono text-xs text-gray-500 md:text-right">
                        <div>{edu.graduationLabel}</div>
                        <div>{edu.location}</div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {edu.bullets.map((bullet) => (
                        <li key={bullet} className="text-gray-300 text-sm leading-relaxed tracking-tight flex">
                          <span className="text-sky-400 mr-2 shrink-0">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="flex items-center gap-2 mb-5">
          <Briefcase className="w-5 h-5 text-sky-400" />
          <h2 className="display text-2xl text-gray-200">Experience</h2>
        </div>
        <div className="space-y-6">
          {sortedResumeData.map((item, i) => (
            <Reveal key={`${item.institution}-${item.startDate}`} delay={i * 60}>
            <div className="card hover:border-gray-600">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Logo */}
                {item.logo && (
                  <div className="shrink-0 flex justify-center md:justify-start">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-white p-2">
                      <img
                        src={item.logo}
                        alt={`${item.institution} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <div>
                      <h2 className="text-lg font-medium text-gray-200">
                        {item.title}
                      </h2>
                      <h3 className="text-sky-400 text-sm">
                        {item.institution}
                      </h3>
                    </div>
                    <div className="font-mono text-xs text-gray-500 md:text-right">
                      <div>
                        {formatDate(item.startDate)} to {item.endDate === "Present" ? "Present" : formatDate(item.endDate)}
                        {calculateDuration(item.startDate, item.endDate) && !calculateDuration(item.startDate, item.endDate).startsWith("0")
                          ? ` (${calculateDuration(item.startDate, item.endDate)})`
                          : ""}
                      </div>
                      <div>{item.location}</div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {item.description.map((desc) => (
                      <li key={desc} className="text-gray-300 text-sm leading-relaxed tracking-tight flex">
                        <span className="text-sky-400 mr-2 shrink-0">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
