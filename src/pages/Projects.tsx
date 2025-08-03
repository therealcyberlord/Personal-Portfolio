import { Headphones, Bot, TrendingUp, Activity, Code, ExternalLink, LucideIcon, BrainCircuit } from 'lucide-react';

type Project = {
  name: string;
  description: string;
  src_path: string;
  theme: string;
  icon: LucideIcon;
}

type ProjectCardProps = {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <div className={`bg-gray-800 rounded-xl p-6 border border-gray-700 flex flex-col h-full`}>
    <div className="flex items-center gap-3 mb-4">
      <project.icon className={`w-8 h-8 ${project.theme}`} />
      <h3 className="text-2xl text-white font-semibold">{project.name}</h3>
    </div>
    <p className="text-lg text-gray-300 mb-4">{project.description}</p>
    <div className="mt-auto">
      <a
        href={project.src_path}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors text-lg font-medium"
      >
        View Project
        <ExternalLink className="w-5 h-5" />
      </a>
    </div>
  </div>
);

function Projects() {
  const projects: Project[] = [
    {
      name: "COVID Exploratory Data Analysis",
      description: "Created an interactive data visualization notebook to help users explore the global impact of COVID-19. I began the project during my senior year of high school and continuously expanded it throughout college, adding features like country-level breakdowns and multiple chart types (line, bar, and pie). Now one of the most popular notebooks in Kaggle’s health category, it has received 550,000+ views and 10,000+ forks",
      src_path: "https://www.kaggle.com/code/therealcyberlord/coronavirus-covid-19-visualization-prediction",
      theme: "text-yellow-400",
      icon: Activity,
    },
    {
      name: "MindSLM",
      description: "MindSLM is a privacy-centric framework for deploying small language models (SLMs) specifically designed to support mental health therapy applications. It provides tools for training, evaluating, and benchmarking models. The project includes a training workflow using UnSloth, traditional evaluation scripts with metrics like RougeL and BERTScore, and advanced evaluation via LLM-as-a-judge",
      src_path: "https://github.com/therealcyberlord/MindSLM", 
      theme: "text-sky-400",
      icon: BrainCircuit,
    },
    {
      name: "Human Detection in Video and Audio",
      description: "As part of a Machine Learning for Child Rescue independent study, this project used DETR ResNet-50 and Whisper models from Hugging Face Transformers to detect unique faces and process audio from video sources, aiding law enforcement in child rescue operations. I developed a custom audio pipeline that integrated Whisper, Pyannote Audio, and RoBERTa to perform diarized transcription with sentiment analysis, deployed via FastAPI for real-time speaker identification and dialogue transcription",
      src_path: "https://github.com/apoorvasaraswat5/HumanDetection",
      theme: "text-red-400",
      icon: Headphones,
    },
    {
      name: "Hintings AI",
      description: "Hintings is a RAG system that allows users to ask questions over their uploaded documents. It integrates with external APIs such as SerpApi for web search and Hugging Face for image generation. Built with LangChain and Chroma, and enhanced with NeMo Guardrails for safer, more aligned responses. Developed by a team of four during Summer 2023 at AI Camp, Hintings was recognized as the Best Product among all intern projects",
      src_path: "https://github.com/tjpel/HinTinGs",
      theme: "text-blue-400",
      icon: Bot,
    },
    {
      name: "StockExpert.io",
      description: "StockExpert.io is an intuitive web application designed to help users track stock portfolios, create personalized watchlists, access real-time market data, visualize stock trends, and analyze sentiment to make informed investment decisions",
      src_path: "https://github.com/therealcyberlord/StockExpert.io",
      theme: "text-green-400",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-16 px-4 mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 flex items-center justify-center gap-3">
            My Projects
            <Code className="w-8 h-8" />
          </h2>
          <p className="text-xl font-semibold text-sky-300">
            Showcase of my Personal Projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />

          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;