import { Code, Layers, Briefcase, ExternalLink, Award, Server, Brain } from 'lucide-react';
import Profile from "@/components/Profile";
import AnimatedCounter from "@/components/AnimatedCounter";
import profileImage from "/images/profile.jpg";

const Home = () => {
  const highlights = [
    {
      value: "550K+",
      label: "Views on Kaggle",
      sublabel: "COVID-19 Data Analysis"
    },
    {
      value: "10K+",
      label: "Notebook Forks",
      sublabel: "Top 1% in Health"
    },
    {
      value: "EACL",
      label: "Published Research",
      sublabel: "MedQA-CS Benchmark"
    },
    {
      value: "100+",
      label: "GitHub Stars",
      sublabel: "Open Source Projects"
    }
  ];

  const publications = [
    {
      title: "MedQA-CS: Benchmarking Large Language Models Clinical Skills Using an AI-SCE Framework",
      venue: "EACL Main Conference",
      year: "2026",
      venueType: "Conference Paper",
      authors: "Zonghai Yao, Zihao Zhang, Chaolong Tang, Xingyu Bian, Youxia Zhao, Zhichao Yang, Junda Wang, Huixue Zhou, Won Seok Jang, Feiyun Ouyang, Hong Yu",
      url: "https://arxiv.org/abs/2410.01553",
      linkText: "arXiv",
      abstract: "An OSCE-style evaluation framework that assesses LLM clinical skills through simulated patient-doctor encounters, providing more rigorous assessment than traditional medical QA benchmarks.",
      badgeClass: "bg-sky-500/20 text-sky-300",
      hoverBorder: "hover:border-sky-500/30"
    },
    {
      title: "Denoising Autoencoder on Colored Images Using TensorFlow",
      venue: "Analytics Vidhya",
      year: "2019",
      venueType: "Technical Article",
      authors: "Xingyu Bian",
      url: "https://medium.com/analytics-vidhya/denoising-autoencoder-on-colored-images-using-tensorflow-17bf63e19dad",
      linkText: "Medium",
      abstract: "A hands-on tutorial demonstrating how to build a convolutional autoencoder that removes Gaussian noise from colored images using TensorFlow and Keras.",
      badgeClass: "bg-sky-500/20 text-sky-300",
      hoverBorder: "hover:border-sky-500/30"
    }
  ];

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "JavaScript", "Java", "C/C++", "SQL"],
      color: "from-sky-500 to-blue-600"
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="w-6 h-6" />,
      skills: ["React.js", "Node.js", "FastAPI", "Pandas", "Scikit-learn", "Pydantic"],
      color: "from-sky-500 to-blue-600"
    },
    {
      title: "Databases & Tools",
      icon: <Server className="w-6 h-6" />,
      skills: ["Weaviate", "PostgreSQL", "Docker", "AWS", "Git", "CI/CD", "Sentry"],
      color: "from-sky-500 to-blue-600"
    },
    {
      title: "AI/ML",
      icon: <Brain className="w-6 h-6" />,
      skills: ["LangChain", "LlamaIndex", "vLLM", "PyTorch", "Transformers"],
      color: "from-sky-500 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Profile
        name="Xingyu Bian"
        description="Software engineer with an M.S. in Computer Science from UMass Amherst. I build systems that scale, from full-stack applications to production AI."
        img_path={profileImage}
        role="Software Engineer, AI Researcher, Lifelong Learner"
      />

      {/* Current Role Banner */}
      <div className="max-w-4xl mx-auto px-4 -mt-4 mb-12">
        <div className="bg-linear-to-r from-sky-600/20 to-blue-600/20 rounded-2xl p-6 border border-sky-500/30 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3">
            <Briefcase className="w-5 h-5 text-sky-400" />
            <span className="text-gray-300 tracking-tight">Currently</span>
            <span className="text-white font-semibold tracking-tight">Software Engineer</span>
            <span className="text-gray-300 tracking-tight">at</span>
            <span className="text-sky-400 font-semibold tracking-tight">Trinity Life Sciences</span>
          </div>
          <p className="text-center text-gray-400 text-sm mt-2 tracking-tight">
            Shipping enterprise AI products for life sciences
          </p>
        </div>
      </div>

      {/* Impact Highlights */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tighter">
              Impact & Achievements
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto tracking-tight">
              Highlights from my work in software engineering and AI/ML
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50"
              >
                <div className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-1">
                  <AnimatedCounter value={item.value} />
                </div>
                <div className="text-gray-300 font-medium tracking-tight">
                  {item.label}
                </div>
                <div className="text-gray-500 text-sm tracking-tight mt-1">
                  {item.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30 mb-4">
              <Award className="w-4 h-4 text-sky-400" />
              <span className="text-sky-400 font-medium text-sm tracking-tight">Research & Writing</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter">
              Publications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {publications.map((pub, index) => (
              <div
                key={index}
                className={`bg-linear-to-br from-gray-800/80 to-gray-800/40 rounded-2xl p-6 border border-gray-700/50 ${pub.hoverBorder} transition-all duration-300`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex flex-col gap-2">
                    <span className={`inline-flex w-fit px-3 py-1 rounded-full ${pub.badgeClass} text-sm font-medium tracking-tight`}>
                      {pub.venue} {pub.year}
                    </span>
                    <span className="text-gray-500 text-xs tracking-tight">
                      {pub.venueType}
                    </span>
                  </div>
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors text-sm font-medium tracking-tight group"
                  >
                    {pub.linkText}
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-tight tracking-tight">
                  {pub.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3 tracking-tight">
                  {pub.authors}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed tracking-tight">
                  {pub.abstract}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tighter">
              Technical Expertise
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto tracking-tight">
              Technologies I use to build intelligent, scalable systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`inline-flex p-2.5 rounded-xl bg-linear-to-br ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tighter">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-gray-700/50 text-gray-300 text-sm font-medium tracking-tight"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;