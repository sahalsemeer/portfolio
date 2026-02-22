import React from "react";
import { Database, Layout, Server, Settings } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="text-brand-400" size={28} />,
      skills: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3"],
    },
    {
      title: "Backend",
      icon: <Server className="text-brand-400" size={28} />,
      skills: ["Node.js", "Express.js", "REST APIs", "Authentication (JWT)"],
    },
    {
      title: "Database",
      icon: <Database className="text-green-400" size={28} />,
      skills: ["MongoDB", "Mongoose", "Data Modeling", "Redis"],
    },
    {
      title: "Infrastructure",
      icon: <Settings className="text-orange-400" size={28} />,
      skills: ["AWS EC2", "Nginx", "PM2", "Linux Administration"],
    },
  ];

  return (
    <section id="skills" className="py-24 relative bg-zinc-900/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Tech <span className="text-brand-500">Stack</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of the tools and technologies I use to
            build scalable web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 relative group"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

              <div className="mb-6 p-4 rounded-xl bg-white/5 inline-flex">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-400 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500/50 block"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
