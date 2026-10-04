import { ArrowUpRight, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import Profile from "@/components/Profile";
import AnimatedCounter from "@/components/AnimatedCounter";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import usePageTitle from "@/hooks/usePageTitle";
import { SITE } from "@/data/site";
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
  usePageTitle();

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
      skills: ["Python", "TypeScript", "Java", "C/C++", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Node.js", "FastAPI", "Pandas", "Scikit-learn", "Pydantic"],
    },
    {
      title: "Databases & Tools",
      skills: ["PostgreSQL", "AWS", "Git", "Sentry", "CI/CD", "Docker", "Redis"],
    },
    {
      title: "AI/ML",
      skills: ["LangChain", "Deep Agents", "LlamaIndex", "vLLM", "PyTorch", "Transformers"],
    }
  ];

  return (
    <>
      <Profile
        name={SITE.name}
        description="Software engineer with an M.S. in Computer Science from UMass Amherst. I take products from zero to one, from full-stack applications to agentic AI."
        imgPath={profileImage}
        role="Software Engineer · AI Researcher · Builder"
        footnote={
          <p className="inline-flex items-center gap-2.5 rounded-full border border-gray-700/60 bg-gray-900/60 px-4 py-1.5 text-left text-sm text-gray-300">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
            </span>
            <span>
              Software Engineer at <span className="whitespace-nowrap text-sky-400">Trinity Life Sciences</span>
            </span>
          </p>
        }
      />

      {/* Impact Highlights */}
      <section className="px-6 py-10 md:py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Selected metrics" title="Impact & achievements" />

          <Reveal delay={60}>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-gray-800 bg-gray-800/40 lg:grid-cols-4">
              {highlights.map((item) => (
                <div key={item.label} className="flex flex-col bg-gray-900 p-6 md:p-7">
                  <dt className="mt-3 text-sm font-medium text-gray-300">{item.label}</dt>
                  <dd className="display order-first text-4xl tabular-nums text-gray-200 md:text-5xl">
                    <AnimatedCounter value={item.value} />
                  </dd>
                  <dd className="text-sm text-gray-500">{item.sublabel}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Publications */}
      <section className="px-6 py-12 md:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Research & writing" title="Publications" />

          <Reveal delay={60} className="divide-y divide-gray-800 border-y border-gray-800">
            {publications.map((pub) => (
              <a
                key={pub.url}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-4 py-8 md:grid-cols-[12rem_1fr] md:gap-8"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-gray-200">{pub.venue}</span>
                  <span className="font-mono text-xs text-gray-500">{pub.year} · {pub.venueType}</span>
                </div>
                <div>
                  <h3 className="text-xl leading-snug text-gray-200 transition-colors group-hover:text-sky-300">
                    {pub.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">{pub.authors}</p>
                  <p className="mt-3 max-w-prose leading-relaxed text-gray-400">{pub.abstract}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-sky-400">
                    {pub.linkText}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 py-12 md:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Toolkit" title="Technical expertise" />

          <Reveal delay={60}>
            <dl className="divide-y divide-gray-800 border-y border-gray-800">
              {skillCategories.map((category) => (
                <div key={category.title} className="grid gap-3 py-6 md:grid-cols-[12rem_1fr] md:gap-8">
                  <dt className="text-gray-200 md:pt-1">{category.title}</dt>
                  <dd>
                    <ul className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <li key={skill} className="rounded-md bg-gray-800/80 px-2.5 py-1 font-mono text-xs text-gray-300">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mt-8 border-t border-gray-800 px-6 pt-20 pb-24 md:mt-12 md:pt-32 md:pb-36">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-sky-400">Get in touch</p>
          <h2 className="display mt-4 text-6xl tracking-tight text-gray-200 md:text-7xl">
            Let&apos;s connect
          </h2>
          <p className="mt-5 text-lg text-gray-400">
            Open to interesting problems, collaborations, and conversations.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${SITE.email}`}
              className="group flex items-center gap-3 rounded-full bg-sky-600 py-2.5 pl-6 pr-2.5 font-medium text-gray-950 transition-[background-color,transform] duration-300 ease-spring hover:bg-sky-500 active:scale-[0.97]"
            >
              Email me
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-950/15 transition-transform duration-300 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-px">
                <Mail className="h-4 w-4" />
              </span>
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-gray-700 px-6 py-3 font-medium text-gray-300 transition-[color,border-color,transform] duration-300 ease-spring hover:border-gray-600 hover:text-gray-200 active:scale-[0.97]"
            >
              <FaLinkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default Home;
