import { useState } from 'react';
import { Headphones, Bot, TrendingUp, Activity, Code, ExternalLink, LucideIcon, BrainCircuit, Star, Eye, Users } from 'lucide-react';

type Project = {
  name: string;
  description: string;
  src_path: string;
  theme: string;
  icon: LucideIcon;
  stats?: { 
    views?: string; 
    forks?: string; 
    impact?: string;
    team?: string;
  };
}

type ProjectCardProps = {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-gray-800 rounded-xl p-6 border border-gray-700 flex flex-col h-full transition-all duration-300 ${
        isHovered ? 'transform scale-105 shadow-xl border-sky-400/30' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <project.icon className={`w-8 h-8 ${project.theme} transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} />
        <h3 className="text-2xl text-white font-bold tracking-tighter">{project.name}</h3>
      </div>
      
      <p className="text-lg text-gray-300 mb-4 grow leading-relaxed tracking-tight">{project.description}</p>
      
      {/* Project stats if available */}
      {project.stats && (
        <div className="flex flex-wrap gap-3 mb-4">
          {project.stats.views && (
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              <Eye className="w-4 h-4" />
              <span>{project.stats.views} views</span>
            </div>
          )}
          {project.stats.forks && (
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              <Users className="w-4 h-4" />
              <span>{project.stats.forks} forks</span>
            </div>
          )}
          {project.stats.impact && (
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              <Star className="w-4 h-4" />
              <span>{project.stats.impact}</span>
            </div>
          )}
          {project.stats.team && (
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              <Users className="w-4 h-4" />
              <span>{project.stats.team}</span>
            </div>
          )}
        </div>
      )}
      
      <div className="mt-auto">
        <a
          href={project.src_path}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors text-lg font-medium group tracking-tight"
        >
          View Project
          <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

function Projects() {
  const projects: Project[] = [
    {
      name: "COVID Exploratory Data Analysis",
      description: "Created an interactive data visualization notebook to help users explore the global impact of COVID-19. I began the project during my senior year of high school and continuously expanded it throughout college, adding features like country-level breakdowns and multiple chart types (line, bar, and pie). Now one of the most popular notebooks in Kaggle's health category, it has received 550,000+ views and 10,000+ forks",
      src_path: "https://www.kaggle.com/code/therealcyberlord/coronavirus-covid-19-visualization-prediction",
      theme: "text-yellow-400",
      icon: Activity,
      stats: {
        views: "550K+",
        forks: "10K+",
        impact: "Top 1% in Health"
      }
    },
    {
      name: "MindSLM",
      description: "MindSLM is a privacy-centric framework for deploying small language models (SLMs) specifically designed to support mental health therapy applications. It provides tools for training, evaluating, and benchmarking models. The project includes a training workflow using UnSloth, traditional evaluation scripts with metrics like RougeL and BERTScore, and advanced evaluation via LLM-as-a-judge",
      src_path: "https://github.com/therealcyberlord/MindSLM", 
      theme: "text-sky-400",
      icon: BrainCircuit,
      stats: {
        impact: "Privacy-focused AI"
      }
    },
    {
      name: "Human Detection in Video and Audio",
      description: "As part of a Machine Learning for Child Rescue independent study, this project used DETR ResNet-50 and Whisper models from Hugging Face Transformers to detect unique faces and process audio from video sources, aiding law enforcement in child rescue operations. I developed a custom audio pipeline that integrated Whisper, Pyannote Audio, and RoBERTa to perform diarized transcription with sentiment analysis, deployed via FastAPI for real-time speaker identification and dialogue transcription",
      src_path: "https://github.com/apoorvasaraswat5/HumanDetection",
      theme: "text-red-400",
      icon: Headphones,
      stats: {
        impact: "ML Application for Social Impact"
      }
    },
    {
      name: "Hintings AI",
      description: "Hintings is a RAG system that allows users to ask questions over their uploaded documents. It integrates with external APIs such as SerpApi for web search and Hugging Face for image generation. Built with LangChain and Chroma, and enhanced with NeMo Guardrails for safer, more aligned responses. Developed by a team of four during Summer 2023 at AI Camp, Hintings was recognized as the Best Product among all intern projects",
      src_path: "https://github.com/tjpel/HinTinGs",
      theme: "text-blue-400",
      icon: Bot,
      stats: {
        team: "Team of 4",
        impact: "Best Product Award"
      }
    },
    {
      name: "StockExpert.io",
      description: "StockExpert.io is an intuitive web application designed to help users track stock portfolios, create personalized watchlists, access real-time market data, visualize stock trends, and analyze sentiment to make informed investment decisions",
      src_path: "https://github.com/therealcyberlord/StockExpert.io",
      theme: "text-green-400",
      icon: TrendingUp,
      stats: {
        impact: "Financial Analytics"
      }
    },
  ];

  return (
    <section className="py-16 px-4 mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 flex items-center justify-center gap-3 tracking-tighter">
            My Projects
            <Code className="w-8 h-8 animate-pulse" />
          </h2>
          <p className="text-xl font-semibold text-sky-300 tracking-tighter">
            Showcase of my Personal Projects
          </p>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed tracking-tight">
            Each project represents a unique challenge I've tackled, showcasing my skills in AI, machine learning, and full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;