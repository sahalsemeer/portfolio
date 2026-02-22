import React from "react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-600/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-600/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col items-start opacity-0 animate-[fade-in-up_1s_ease-out_forwards]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-brand-500/30 text-brand-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
            </span>
            Available for new opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm <br />
            <span className="text-brand-500">Sahal Semeer</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-medium mb-4">
            MERN Stack Developer
          </p>

          <p className="text-gray-400 max-w-lg mb-8 text-lg">
            Based in Kozhikode, India. I build scalable web applications and
            explore AI Engineering to create intelligent, user-centric
            solutions.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-medium flex items-center gap-2 transition-all group"
            >
              View My Work
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full glass text-white font-medium hover:bg-white/10 transition-all flex items-center gap-2"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-5 mt-10">
            <a
              href="https://github.com/sahalsemeer"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammed-sahal-n-m-032693326/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:mohdsahalsemeer1@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Image / Graphic Content */}
        <div className="relative hidden md:flex justify-center items-center opacity-0 animate-[fade-in_1.5s_ease-out_forwards]">
          <div className="w-[400px] h-[400px] rounded-full border border-gray-800 flex items-center justify-center relative">
            <div className="w-[300px] h-[300px] rounded-full glass border-brand-500/20 flex items-center justify-center overflow-hidden">
              {/* Inserted the user profile image explicitly */}
              <img
                src="https://res.cloudinary.com/deaqvjyir/image/upload/v1771769723/pp_v23mlb.png"
                alt="Sahal Sameer Profile"
                className="w-full h-full object-cover object-top grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
