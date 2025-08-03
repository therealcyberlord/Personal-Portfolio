import { Code, Database, Cloud, Rocket } from 'lucide-react';
import Profile from "@/components/Profile";
import Picture from "/images/profile.jpg"

const Home = () => {
  const technologies = [
    { name: "React", color: "text-blue-400" },
    { name: "TypeScript", color: "text-blue-500" },
    { name: "Tailwind CSS", color: "text-teal-400" },
    { name: "Vite", color: "text-purple-400" }
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 mb-4" />,
      skills: ["Python", "JavaScript", "C/C++", "Java"]
    },
    {
      title: "AI/ML",
      icon: <Database className="w-6 h-6 mb-4" />,
      skills: ["PyTorch", "TensorFlow", "VLLM", "Langchain"]
    },
    {
      title: "Web & Cloud",
      icon: <Cloud className="w-6 h-6 mb-4" />,
      skills: ["React", "Node.js", "AWS", "FastAPI"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Profile
        name="Xingyu Bian"
        description="I'm a software engineer with an M.S. in Computer Science from UMass Amherst, focused on building AI-powered, user-centric systems. I've developed and deployed production-scale generative AI features with real business impact. My research spans biomedical NLP, clinical reasoning, and LLM evaluation."
        img_path={Picture}
        role="Software Engineer, AI Researcher, Lifelong Learner"
      />

      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700">
          <div className="flex items-center justify-center mb-4">
            <Rocket className="w-6 h-6 text-sky-400 mr-2" />
            <h3 className="text-xl font-semibold text-white">Built Using</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {technologies.map(tech => (
              <div
                key={tech.name}
                className={`px-4 py-2 rounded-full bg-gray-800 border border-gray-700 ${tech.color} font-medium hover:scale-105 transition-transform duration-300`}
              >
                {tech.name}
              </div>
            ))}
          </div>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            This portfolio is crafted with modern web technologies. React provides the interactive UI, TypeScript ensures type safety, Tailwind CSS enables rapid styling, and Vite offers lightning-fast builds.
          </p>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I have experience working with various technologies across multiple domains, including machine learning, data science, software engineering, and cloud computing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map(category => (
              <div key={category.title} className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl border border-gray-700">
                <div className="text-center">
                  <div className="flex justify-center text-sky-400">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-6">
                    {category.title}
                  </h3>
                  <div className="space-y-3">
                    {category.skills.map(skill => (
                      <div
                        key={skill}
                        className="bg-gray-700 text-gray-100 py-2 px-4 rounded-lg hover:bg-sky-600 transition-colors duration-300"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
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