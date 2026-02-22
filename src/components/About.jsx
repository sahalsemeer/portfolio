import React from "react";
import { Terminal } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-16 items-center">
        {/* Decorative code window on the left */}
        <div className="flex-1 w-full max-w-md md:max-w-full relative">
          <div className="absolute inset-0 bg-brand-500/10 blur-3xl -z-10 rounded-full h-[300px] w-[300px] m-auto"></div>
          <div className="glass rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
            {/* Window header */}
            <div className="bg-black/50 px-4 py-3 border-b border-gray-800 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="mx-auto flex items-center gap-2 text-xs text-gray-500 font-mono">
                <Terminal size={14} /> sahal-sameer.js
              </div>
            </div>
            {/* Code content */}
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-400">developer</span>{" "}
              <span className="text-purple-400">=</span> {"{"}
              <br />
              &nbsp;&nbsp;name:{" "}
              <span className="text-green-300">'Sahal Semeer'</span>,
              <br />
              &nbsp;&nbsp;age: <span className="text-orange-300">22</span>,
              <br />
              &nbsp;&nbsp;focus:{" "}
              <span className="text-green-300">'Scalable Web Apps'</span>,
              <br />
              &nbsp;&nbsp;currentInterests: [<br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-green-300">'AI Engineering'</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-green-300">'ERP Solutions'</span>
              <br />
              &nbsp;&nbsp;],
              <br />
              &nbsp;&nbsp;build: <span className="text-purple-400">
                async
              </span>{" "}
              () {"=>"} {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-purple-400">await</span> portfolio.init();
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              {"};"}
            </div>
          </div>
        </div>

        {/* Bio Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-brand-500">Me</span>
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
            <p>
              I am a 22-year-old developer with a passion for building scalable
              web applications. I specialize in the MERN stack (MongoDB,
              Express, React, Node.js), writing clean, maintainable code to
              solve complex problems.
            </p>
            <p>
              While my core expertise lies in Javascript and full-stack
              development, I am actively exploring and integrating AI
              Engineering and ERP development into my workflow.
            </p>
            <p>
              Whether it's designing highly responsive user interfaces or
              architecting robust backend APIs, my goal is always to deliver
              premium experiences that perform brilliantly at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
