import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "DevsHub",
      description:
        "A comprehensive developer matching platform designed to connect tech professionals. Features include multi-tab profile creation forms, real-time chat functionality, secure user authentication with JWT, and an intuitive swipe-based discovery interface built to foster networking and collaboration among engineers worldwide.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      tech: ["React", "Node.js", "MongoDB", "AWS EC2", "Socket.io"],
      liveLink: "http://13.203.209.251",
      githubLink: "https://github.com/sahalsemeer/DevsHub",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-brand-500">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-xl text-lg">
              Here are some of the things I've built lately.
            </p>
          </div>
          <a
            href="https://github.com/sahalsemeer"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-brand-400 hover:text-brand-300 transition-colors font-medium"
          >
            View all work <ExternalLink size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass rounded-2xl overflow-hidden group hover:border-brand-500/30 transition-all duration-500 ${project.featured ? "md:col-span-2 flex flex-col md:flex-row" : ""}`}
            >
              {/* Image Container */}
              <div
                className={`relative overflow-hidden ${project.featured ? "md:w-1/2" : "h-64"}`}
              >
                <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Content Container */}
              <div
                className={`p-8 md:p-10 flex flex-col justify-center ${project.featured ? "md:w-1/2" : ""}`}
              >
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm font-medium text-brand-300 bg-brand-500/10 rounded-full border border-brand-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex text-sm items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/5"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex text-sm items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/5"
                  >
                    <Github size={16} /> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
