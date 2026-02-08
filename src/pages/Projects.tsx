import { Headphones, Bot, TrendingUp, Activity, Code, ExternalLink, LucideIcon, BrainCircuit, Eye, GitFork, Award } from 'lucide-react';

type Project = {
  name: string;
  description: string;
  url: string;
  icon: LucideIcon;
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
    stats: {
      views: "550K+",
      forks: "10K+",
      impact: "Top 1% in Health"
    }
  },
  {
    name: "MindSLM",
    description: "A privacy-centric framework for deploying small language models (SLMs) designed for mental health therapy applications. Includes training workflows using UnSloth, evaluation scripts with RougeL and BERTScore, and LLM-as-a-judge evaluation.",
    url: "https://github.com/therealcyberlord/MindSLM",
    icon: BrainCircuit,
    stats: {
      impact: "Privacy-focused AI"
    }
  },
  {
    name: "Human Detection in Video and Audio",
    description: "Machine Learning for Child Rescue project using DETR ResNet-50 and Whisper to detect faces and process audio from video sources. Built a custom audio pipeline with Whisper, Pyannote Audio, and RoBERTa for diarized transcription with sentiment analysis.",
    url: "https://github.com/apoorvasaraswat5/HumanDetection",
    icon: Headphones,
    stats: {
      impact: "ML for Social Good"
    }
  },
  {
    name: "Hintings AI",
    description: "A RAG system for document Q&A with external API integrations for web search and image generation. Built with LangChain, Chroma, and NeMo Guardrails. Recognized as Best Product among all intern projects at AI Camp.",
    url: "https://github.com/tjpel/HinTinGs",
    icon: Bot,
    stats: {
      team: "Team of 4",
      impact: "Best Product Award"
    }
  },
  {
    name: "StockExpert.io",
    description: "A web application for tracking stock portfolios, creating watchlists, accessing real-time market data, visualizing trends, and analyzing sentiment for informed investment decisions.",
    url: "https://github.com/therealcyberlord/StockExpert.io",
    icon: TrendingUp,
    stats: {
      impact: "Financial Analytics"
    }
  },
];

function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30 mb-4">
            <Code className="w-4 h-4 text-sky-400" />
            <span className="text-sky-400 font-medium text-sm tracking-tight">Portfolio</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-4">
            Projects
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto tracking-tight">
            A selection of projects showcasing my work in AI, machine learning, and full-stack development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-sky-500/30 transition-all duration-300 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex p-2.5 rounded-xl bg-linear-to-br from-sky-500 to-blue-600 text-white">
                  <project.icon className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-white tracking-tighter group-hover:text-sky-400 transition-colors">
                  {project.name}
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed tracking-tight mb-4 grow">
                {project.description}
              </p>

              {/* Stats */}
              {project.stats && (
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.stats.views && (
                    <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                      <Eye className="w-4 h-4" />
                      <span>{project.stats.views} views</span>
                    </div>
                  )}
                  {project.stats.forks && (
                    <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                      <GitFork className="w-4 h-4" />
                      <span>{project.stats.forks} forks</span>
                    </div>
                  )}
                  {project.stats.impact && (
                    <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                      <Award className="w-4 h-4" />
                      <span>{project.stats.impact}</span>
                    </div>
                  )}
                  {project.stats.team && (
                    <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                      <Award className="w-4 h-4" />
                      <span>{project.stats.team}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Link */}
              <div className="flex items-center gap-2 text-sky-400 group-hover:text-sky-300 transition-colors text-sm font-medium tracking-tight">
                View Project
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
