import { Briefcase } from "lucide-react";
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

type ResumeExperience = {
  title: string;
  institution: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
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
      "Lead development of a quantitative analytics platform from 0 to 1, generating $200K+ in new revenue within the first 90 days by iterating on user feedback and shipping business-critical features",
      "Design and ship agentic workflows to automatically query life sciences market research data, generate visualizations, and extract insights using Azure OpenAI, LlamaIndex, and Langfuse for observability",
      "Build and deploy full-stack features (React, Koa.js, Python, PostgreSQL) serving 1,000+ monthly active users across enterprise clients and internal analysts, monitored with Sentry"
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
      "Co-authored research paper (MedQA-CS benchmark) on LLM clinical skills evaluation accepted at EACL 2025",
      "Researched Medical RAG systems using agentic design and test-time scaling to solve challenging benchmarks in the healthcare domain",
      "Fine-tuned judge models via PEFT, achieving 93% correlation with human experts in scoring multi-turn patient-doctor simulations",
      "Delivered high-throughput inference via vLLM, enabling batch processing for large-scale experiments"
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
      "Optimized enterprise RAG systems, improving retrieval relevance by 50% via hybrid search and query rewriting using Weaviate, spaCy, and PostgreSQL",
      "Engineered dedicated RAG evaluation service to systematically benchmark and monitor performance with LlamaIndex and Litestar"
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
      "Delivered proof-of-concept RAG application, earning Best Product Nomination out of 6 engineering teams utilizing LangChain, Chroma, and NeMo Guardrails"
    ],
    logo: AICampLogo
  },
  {
    title: "Undergraduate Course Assistant",
    institution: "Manning College of Information and Computer Sciences, UMass Amherst",
    startDate: "2023-02",
    endDate: "2023-12",
    location: "Amherst, MA",
    description: [
      "Supported course delivery by grading assignments while assisting professors with course material preparation",
      "Provided guidance to students in courses: CS 389 (Introduction to Machine Learning) and CS 383 (Artificial Intelligence)"
    ],
    logo: CICSlogo
  },
  {
    title: "Vice President",
    institution: "UMass Machine Learning Club",
    startDate: "2021-05",
    endDate: "2023-07",
    location: "Amherst, MA",
    description: [
      "Organized events, workshops, and projects to foster a community of ML enthusiasts at UMass"
    ],
    logo: ACMMLLogo
  },
  {
    title: "Undergraduate Research Assistant",
    institution: "University of Massachusetts Amherst",
    startDate: "2021-09",
    endDate: "2022-01",
    location: "Amherst, MA",
    description: [
      "Conducted research on graph neural networks with the Zhou Lin Quantum Chemistry group",
      "Learned a lot about PyTorch specifically PyTorch Geometric"
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
  return (
    <div className="min-h-screen bg-gray-900 pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30 mb-4">
            <Briefcase className="w-4 h-4 text-sky-400" />
            <span className="text-sky-400 font-medium text-sm tracking-tight">Experience</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-4">
            Resume
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto tracking-tight">
            My professional journey in software engineering and AI research.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {sortedResumeData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50"
            >
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
                      <h2 className="text-xl font-bold text-white tracking-tighter">
                        {item.title}
                      </h2>
                      <h3 className="text-sky-400 font-medium tracking-tight">
                        {item.institution}
                      </h3>
                    </div>
                    <div className="text-sm text-gray-400 tracking-tight md:text-right">
                      <div>
                        {formatDate(item.startDate)} - {item.endDate === "Present" ? "Present" : formatDate(item.endDate)}
                        {calculateDuration(item.startDate, item.endDate) && !calculateDuration(item.startDate, item.endDate).startsWith("0")
                          ? ` (${calculateDuration(item.startDate, item.endDate)})`
                          : ""}
                      </div>
                      <div className="text-gray-500">{item.location}</div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {item.description.map((desc, i) => (
                      <li key={i} className="text-gray-300 text-sm leading-relaxed tracking-tight flex">
                        <span className="text-sky-400 mr-2 shrink-0">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
