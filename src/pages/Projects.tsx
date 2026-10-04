import type { ReactNode } from "react";
import { Headphones, Bot, Network, Database, Activity, ArrowUpRight, BrainCircuit, Eye, GitFork, Award, Users, type LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";
import usePageTitle from "@/hooks/usePageTitle";

const StatItem = ({ icon, text }: { icon: ReactNode; text: string }) => (
  <div className="flex items-center gap-1.5 text-sm text-gray-400">
    {icon}
    <span>{text}</span>
  </div>
);

type Project = {
  name: string;
  description: string;
  url: string;
  icon: LucideIcon;
  tags?: string[];
  stats?: {
    views?: string;
    forks?: string;
    impact?: string;
    team?: string;
  };
}

const projects: Project[] = [
  {
    name: "COVID Exploratory Data Analysis",
    description: "Created an interactive data visualization notebook to help users explore the global impact of COVID-19. Started during my senior year of high school and continuously expanded throughout college. Now one of the most popular notebooks in Kaggle's health category.",
    url: "https://www.kaggle.com/code/therealcyberlord/coronavirus-covid-19-visualization-prediction",
    icon: Activity,
    tags: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
    stats: {
      views: "574K+",
      forks: "10K+",
      impact: "Top 1% in Health"
    }
  },
  {
    name: "Grove",
    description: "A terminal-based equity research workbench that routes a stock question to specialized AI subagents (sentiment, financials, deep dives, comparisons), then synthesizes a sourced markdown report. It pulls from SEC EDGAR filings, market data, and live search, with every claim cited from tool results rather than fabricated. Built on a Deep Agents orchestrator-subagent pattern.",
    url: "https://github.com/therealcyberlord/Grove",
    icon: Network,
    tags: ["Python", "Deep Agents", "FastAPI", "PostgreSQL"],
    stats: {
      impact: "Agentic equity research"
    }
  },
  {
    name: "MindSLM",
    description: "A privacy-centric framework for deploying small language models (SLMs) designed for mental health therapy applications. Includes training workflows using UnSloth, evaluation scripts with RougeL and BERTScore, and LLM-as-a-judge evaluation.",
    url: "https://github.com/therealcyberlord/MindSLM",
    icon: BrainCircuit,
    tags: ["Python", "PyTorch", "UnSloth", "Transformers"],
    stats: {
      impact: "Privacy-focused AI"
    }
  },
  {
    name: "Human Detection in Video and Audio",
    description: "An ML for Child Rescue project that detects faces in video with DETR ResNet-50 and transcribes the audio track. Its custom pipeline pairs Whisper with Pyannote Audio and RoBERTa for diarized transcription with sentiment analysis.",
    url: "https://github.com/apoorvasaraswat5/HumanDetection",
    icon: Headphones,
    tags: ["Python", "FastAPI", "Next.js", "PyTorch", "Whisper"],
    stats: {
      impact: "ML for Social Good"
    }
  },
  {
    name: "Hintings AI",
    description: "A RAG system for document Q&A with external API integrations for web search and image generation. Built with LangChain, Chroma, and NeMo Guardrails. Earned a Best Product nomination among all intern projects at AI Camp.",
    url: "https://github.com/tjpel/HinTinGs",
    icon: Bot,
    tags: ["Python", "LangChain", "Chroma", "NeMo Guardrails"],
    stats: {
      team: "Team of 4",
      impact: "Best Product Nomination"
    }
  },
  {
    name: "PandasFlow",
    description: "A multi-step agent that answers questions over arbitrarily large CSV datasets. Instead of feeding tables into the model, it exposes controlled tools for filtering, aggregation, and correlation, so analysis scales past the context window without a code sandbox. Built on LlamaIndex Workflows.",
    url: "https://github.com/therealcyberlord/PandasFlow",
    icon: Database,
    tags: ["Python", "LlamaIndex", "Pandas", "LLM Agents"],
    stats: {
      impact: "Agentic data analysis"
    }
  },
];

function Projects() {
  usePageTitle("Projects");

  return (
    <div className="px-6 pt-36 pb-24">
      <div className="mx-auto max-w-5xl">
        <PageHeader
          eyebrow="Portfolio"
          title="Projects"
          description="A selection of work in AI, machine learning, and full-stack development."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.url} delay={(i % 2) * 90} className="h-full">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex h-full flex-col hover:-translate-y-0.5 hover:border-sky-500/40"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <project.icon className="h-5 w-5 shrink-0 text-sky-400" aria-hidden="true" />
                    <h2 className="text-xl font-medium text-gray-200 transition-colors group-hover:text-sky-300">
                      {project.name}
                    </h2>
                  </div>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-gray-500 transition-[color,transform] duration-300 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky-400"
                    aria-hidden="true"
                  />
                </div>

                <p className="mb-6 grow leading-relaxed text-gray-400">
                  {project.description}
                </p>

                {project.stats && (
                  <div className="mb-5 flex flex-wrap gap-x-4 gap-y-2">
                    {project.stats.views && <StatItem icon={<Eye className="h-4 w-4" />} text={`${project.stats.views} views`} />}
                    {project.stats.forks && <StatItem icon={<GitFork className="h-4 w-4" />} text={`${project.stats.forks} forks`} />}
                    {project.stats.impact && <StatItem icon={<Award className="h-4 w-4" />} text={project.stats.impact} />}
                    {project.stats.team && <StatItem icon={<Users className="h-4 w-4" />} text={project.stats.team} />}
                  </div>
                )}

                {project.tags && (
                  <ul className="flex flex-wrap gap-2 border-t border-gray-800 pt-5" aria-label="Tech stack">
                    {project.tags.map(tag => (
                      <li key={tag} className="rounded-md bg-gray-800 px-2.5 py-1 font-mono text-xs text-gray-300">
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
