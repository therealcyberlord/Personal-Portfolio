import { Headphones, Bot, Network, Database, Activity, ExternalLink, LucideIcon, BrainCircuit, Eye, GitFork, Award, Users } from 'lucide-react';
import Reveal from "@/components/Reveal";

const StatItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-1.5 text-gray-400 text-sm">
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
  return (
    <div className="min-h-dvh bg-gray-950 pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <Reveal className="mb-14">
          <p className="eyebrow text-sky-400">Portfolio</p>
          <h1 className="display mt-3 text-5xl md:text-7xl text-gray-200">
            Projects
          </h1>
          <p className="mt-4 max-w-xl text-gray-400">
            A selection of work in AI, machine learning, and full-stack development.
          </p>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.url} delay={(i % 2) * 90} className="h-full">
            <div
              className="card flex h-full flex-col hover:border-sky-500/40 hover:-translate-y-0.5"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sky-400">
                  <project.icon className="w-5 h-5" />
                </span>
                <h2 className="text-lg font-medium text-gray-200">
                  {project.name}
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-5 grow">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              {project.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="rounded-md bg-gray-800 px-2.5 py-1 font-mono text-xs text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Stats */}
              {project.stats && (
                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-5">
                  {project.stats.views && <StatItem icon={<Eye className="w-4 h-4" />} text={`${project.stats.views} views`} />}
                  {project.stats.forks && <StatItem icon={<GitFork className="w-4 h-4" />} text={`${project.stats.forks} forks`} />}
                  {project.stats.impact && <StatItem icon={<Award className="w-4 h-4" />} text={project.stats.impact} />}
                  {project.stats.team && <StatItem icon={<Users className="w-4 h-4" />} text={project.stats.team} />}
                </div>
              )}

              {/* Link */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors text-sm font-medium group"
              >
                View project
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
