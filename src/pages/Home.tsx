import { Code, Layers, Briefcase, ExternalLink, Server, Brain, Mail } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import Profile from "@/components/Profile";
import AnimatedCounter from "@/components/AnimatedCounter";
import Reveal from "@/components/Reveal";
import profileImage from "/images/profile.jpg";

type Publication = {
  title: string;
  venue: string;
  year: string;
  venueType: string;
  authors: string;
  url: string;
  linkText: string;
  abstract: string;
};

const Home = () => {
  const highlights = [
    {
      value: "574K+",
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

  const publications: Publication[] = [
    {
      title: "MedQA-CS: Benchmarking Large Language Models Clinical Skills Using an AI-SCE Framework",
      venue: "EACL Main Conference",
      year: "2026",
      venueType: "Conference Paper",
      authors: "Zonghai Yao, Zihao Zhang, Chaolong Tang, Xingyu Bian, Youxia Zhao, Zhichao Yang, Junda Wang, Huixue Zhou, Won Seok Jang, Feiyun Ouyang, Hong Yu",
      url: "https://aclanthology.org/2026.eacl-long.292/",
      linkText: "ACL Anthology",
      abstract: "An OSCE-style evaluation framework that assesses LLM clinical skills through simulated patient-doctor encounters, providing more rigorous assessment than traditional medical QA benchmarks.",
    },
    {
      title: "Denoising Autoencoder on Colored Images Using TensorFlow",
      venue: "Analytics Vidhya",
      year: "2019",
      venueType: "Technical Writing",
      authors: "Xingyu Bian",
      url: "https://medium.com/analytics-vidhya/denoising-autoencoder-on-colored-images-using-tensorflow-17bf63e19dad",
      linkText: "Medium",
      abstract: "A hands-on tutorial demonstrating how to build a convolutional autoencoder that removes Gaussian noise from colored images using TensorFlow and Keras.",
    }
  ];

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-5 h-5" />,
      skills: ["Python", "JavaScript", "Java", "C/C++", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="w-5 h-5" />,
      skills: ["React.js", "Node.js", "FastAPI", "Pandas", "Scikit-learn", "Pydantic"],
    },
    {
      title: "Databases & Tools",
      icon: <Server className="w-5 h-5" />,
      skills: ["PostgreSQL", "AWS", "Git", "Sentry", "CI/CD", "Docker", "Redis"],
    },
    {
      title: "AI/ML",
      icon: <Brain className="w-5 h-5" />,
      skills: ["LangChain", "Deep Agents", "LlamaIndex", "vLLM", "PyTorch", "Transformers"],
    }
  ];

  return (
    <div className="min-h-dvh bg-gray-950">
      <Profile
        name="Xingyu Bian"
        description="Software engineer with an M.S. in Computer Science from UMass Amherst. I take products from zero to one, from full-stack applications to agentic AI."
        img_path={profileImage}
        role="Software Engineer · AI Researcher · Builder"
      />

      {/* Current Role Banner */}
      <div className="max-w-2xl mx-auto px-6 -mt-2 mb-24">
        <Reveal>
          <div className="flex flex-col items-center gap-1.5 border-y border-gray-800 py-5 text-center">
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-gray-200">
              <Briefcase className="w-4 h-4 text-sky-400" />
              <span>Software Engineer at</span>
              <span className="text-sky-400">Trinity Life Sciences</span>
            </div>
            <p className="text-gray-500 text-sm">
              Shipping enterprise AI products for life sciences
            </p>
          </div>
        </Reveal>
      </div>

      {/* Impact Highlights */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-12">
            <p className="eyebrow text-sky-400">Selected metrics</p>
            <h2 className="display mt-3 text-4xl md:text-5xl text-gray-200">
              Impact &amp; achievements
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-3xl border border-gray-800 bg-gray-800/40">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="bg-gray-900 p-6"
                >
                  <div className="display text-4xl md:text-5xl text-gray-200 tabular-nums">
                    <AnimatedCounter value={item.value} />
                  </div>
                  <div className="mt-3 text-gray-300 text-sm font-medium">
                    {item.label}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {item.sublabel}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-10">
            <p className="eyebrow text-sky-400">Research &amp; writing</p>
            <h2 className="display mt-3 text-4xl md:text-5xl text-gray-200">
              Publications
            </h2>
          </Reveal>

          <Reveal delay={120} className="divide-y divide-gray-800 border-y border-gray-800">
            {publications.map((pub) => (
              <a
                key={pub.url}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-4 py-8 md:grid-cols-[10rem_1fr] md:gap-8"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-gray-200 text-sm font-medium">{pub.venue}</span>
                  <span className="font-mono text-xs text-gray-500">{pub.year} · {pub.venueType}</span>
                </div>
                <div>
                  <h3 className="text-xl text-gray-200 leading-snug group-hover:text-sky-400 transition-colors">
                    {pub.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {pub.authors}
                  </p>
                  <p className="mt-3 max-w-prose text-sm leading-relaxed text-gray-400">
                    {pub.abstract}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sky-400">
                    {pub.linkText}
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-12">
            <p className="eyebrow text-sky-400">Toolkit</p>
            <h2 className="display mt-3 text-4xl md:text-5xl text-gray-200">
              Technical expertise
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, i) => (
              <Reveal key={category.title} delay={i * 90} className="h-full">
                <div className="card h-full hover:border-sky-500/40 hover:-translate-y-0.5">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-sky-400">{category.icon}</span>
                    <h3 className="text-lg font-medium text-gray-200">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map(skill => (
                      <span
                        key={skill}
                        className="rounded-md bg-gray-800 px-2.5 py-1 font-mono text-xs text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-gray-800 py-32 px-6">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="eyebrow text-sky-400">Get in touch</p>
          <h2 className="display mt-4 text-6xl md:text-7xl text-gray-200">
            Let's connect
          </h2>
          <p className="mt-4 text-gray-400">
            Open to interesting problems, collaborations, and conversations.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:xingyubiancyberland@gmail.com"
              className="group flex items-center gap-3 rounded-full bg-sky-600 py-2.5 pl-6 pr-2.5 font-medium text-gray-950 transition-[background-color,transform] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-sky-500 active:scale-[0.97]"
            >
              Email me
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-950/15 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
                <Mail className="w-4 h-4" />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/xingyu-bian-1734bb134/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-gray-700 px-6 py-3 font-medium text-gray-300 transition-colors duration-300 hover:border-gray-600 hover:text-gray-200 active:scale-[0.98]"
            >
              <FaLinkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Home;