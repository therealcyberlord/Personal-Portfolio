import Trinitylogo from "/images/logos/Trinity.jpeg";
import CICSlogo from "/images/logos/CICS.jpeg";
import AICampLogo from "/images/logos/AICamp.png";
import ACMMLLogo from "/images/logos/ACMML.jpeg";
import UMassLogo from "/images/logos/UMass.png";
import { calculateDuration, formatMonth } from "@/utils/time";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";
import usePageTitle from "@/hooks/usePageTitle";

type ResumeExperience = {
  title: string;
  institution: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
  logo: string;
  /** Logo ships with its own background, so render it edge to edge instead of on a white tile */
  logoFullBleed?: boolean;
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
      "Relevant Coursework: Master's Project, Neural Networks, Intelligent Visual Computing, Software Engineering, Machine Learning, Algorithms for Data Science, Technical Project Management",
      "Extracurricular Activities: Vice President, UMass ACM Machine Learning Club",
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
    title: "Software Engineer II",
    institution: "Trinity Life Sciences",
    startDate: "2025-01",
    endDate: "Present",
    location: "Greater Boston, MA",
    description: [
      "Build a quantitative analytics platform for biopharma from 0 to 1, generating six-figure revenue and cutting manual work by 40%",
      "Architect multi-agent systems (LangChain, Langfuse) that synthesize decks, transcripts, cross-tabs, and surveys into commercial insights, accelerating qualitative and quantitative research",
      "Own development of a digital twin offering that simulates audience personas to test marketing messages, building the orchestration layer that integrates agents across teams",
      "Ship full-stack features (React, Koa.js, PostgreSQL, AWS) adopted across both enterprise clients and internal teams"
    ],
    logo: Trinitylogo,
    logoFullBleed: true
  },
  {
    title: "NLP Researcher",
    institution: "UMass BioNLP Lab",
    startDate: "2024-02",
    endDate: "2025-01",
    location: "Amherst, MA",
    description: [
      "Co-authored and presented MedQA-CS, a benchmark for evaluating LLMs via simulated clinical examinations (EACL 2026)",
      "Researched agentic design patterns (planning, reflection, GraphRAG) and test-time compute scaling to improve reasoning, benchmarked across medical reasoning tasks of varying complexity",
      "Curated a synthetic dataset distilled from GPT-4 to fine-tune Qwen/Llama as LLM-as-a-judge evaluators, achieving 93% correlation with experts on information gathering and physical exams"
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
      "Integrated OpenFDA as an external medical knowledge source into RAG pipelines, automating weekly updates via cron jobs",
      "Enhanced hybrid search to recognize industry terminology and synonyms using Weaviate and spaCy"
    ],
    logo: Trinitylogo,
    logoFullBleed: true
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
    title: "Machine Learning Intern",
    institution: "AI Camp Inc. (Edtech Startup)",
    startDate: "2023-05",
    endDate: "2023-08",
    location: "Palo Alto, CA",
    description: [
      "Built a PoC RAG system for document question-answering (LangChain, Chroma, OpenAI API, NeMo Guardrails), earning a Best Product nomination out of 6 engineering teams"
    ],
    logo: AICampLogo
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
      "Applied PyTorch Geometric to model molecular properties as part of the Zhou Lin Quantum Chemistry group"
    ],
    logo: UMassLogo
  }
];

type TimelineEntryProps = {
  title: string;
  organization: string;
  logo: string;
  logoFullBleed?: boolean;
  dates: string;
  location: string;
  bullets: string[];
};

const TimelineEntry = ({ title, organization, logo, logoFullBleed, dates, location, bullets }: TimelineEntryProps) => (
  <article className="grid gap-5 py-10 sm:grid-cols-[3.5rem_1fr] sm:gap-6">
    <div className={`h-14 w-14 shrink-0 overflow-hidden rounded-xl ring-1 ring-gray-700/60 ${logoFullBleed ? "" : "bg-white p-2"}`}>
      <img src={logo} alt={`${organization} logo`} className={`h-full w-full ${logoFullBleed ? "object-cover" : "object-contain"}`} />
    </div>

    <div>
      <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-6">
        <div>
          <h3 className="text-xl font-medium text-gray-200">{title}</h3>
          <p className="mt-0.5 text-sky-400">{organization}</p>
        </div>
        <div className="shrink-0 font-mono text-xs leading-relaxed text-gray-500 md:text-right">
          <p>{dates}</p>
          <p>{location}</p>
        </div>
      </div>

      <ul className="mt-5 space-y-2.5">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 leading-relaxed text-gray-300">
            <span className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-sky-400/70" aria-hidden="true" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  </article>
);

const formatRange = (start: string, end: string) => {
  const duration = calculateDuration(start, end);
  return `${formatMonth(start)} – ${formatMonth(end)}${duration ? ` · ${duration}` : ""}`;
};

const Resume = () => {
  usePageTitle("Resume");

  return (
    <div className="px-6 pt-36 pb-24">
      <div className="mx-auto max-w-3xl">
        <PageHeader
          eyebrow="Experience"
          title="Resume"
          description="My professional journey in software engineering and AI research."
        />

        <section aria-labelledby="experience-heading" className="mb-20">
          <h2 id="experience-heading" className="display text-3xl text-gray-200">Experience</h2>
          <div className="mt-4 divide-y divide-gray-800 border-t border-gray-800">
            {/* Entries are listed most recent first */}
            {resumeData.map((item) => (
              <Reveal key={`${item.institution}-${item.startDate}`}>
                <TimelineEntry
                  title={item.title}
                  organization={item.institution}
                  logo={item.logo}
                  logoFullBleed={item.logoFullBleed}
                  dates={formatRange(item.startDate, item.endDate)}
                  location={item.location}
                  bullets={item.description}
                />
              </Reveal>
            ))}
          </div>
        </section>

        <section aria-labelledby="education-heading">
          <h2 id="education-heading" className="display text-3xl text-gray-200">Education</h2>
          <div className="mt-4 divide-y divide-gray-800 border-t border-gray-800">
            {educationData.map((edu) => (
              <Reveal key={`${edu.institution}-${edu.degree}`}>
                <TimelineEntry
                  title={edu.degree}
                  organization={edu.institution}
                  logo={edu.logo}
                  dates={edu.graduationLabel}
                  location={edu.location}
                  bullets={edu.bullets}
                />
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
