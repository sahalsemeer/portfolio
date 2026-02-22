import React from "react";
import { Mail, Download, ArrowRight, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-zinc-900/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="glass rounded-3xl p-10 md:p-16 relative overflow-hidden border border-brand-500/20">
          {/* Glowing Accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 blur-[100px] rounded-full -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/20 blur-[100px] rounded-full -z-10" />

          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Let's <span className="text-brand-500">Connect</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                I'm currently looking for new opportunities. Whether you have a
                question or just want to say hi, I'll try my best to get back to
                you!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                      Email Me
                    </p>
                    <a
                      href="mailto:mohdsahalsemeer1@gmail.com"
                      className="text-lg hover:text-white transition-colors"
                    >
                      mohdsahalsemeer1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                      Location
                    </p>
                    <span className="text-lg">Kozhikode, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full flex flex-col gap-4">
              <a
                href="mailto:mohdsahalsemeer1@gmail.com"
                className="w-full flex items-center justify-between p-6 rounded-2xl bg-white/5 hover:bg-brand-500 hover:text-white text-gray-300 transition-all duration-300 group border border-white/5 hover:border-brand-500 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <Mail
                    size={28}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="text-xl font-semibold">Send a Message</span>
                </div>
                <ArrowRight
                  size={24}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-between p-6 rounded-2xl glass hover:bg-white/10 text-gray-300 transition-all duration-300 group border border-white/5 shadow-xl mt-4"
              >
                <div className="flex items-center gap-4">
                  <Download
                    size={28}
                    className="group-hover:-translate-y-1 transition-transform"
                  />
                  <span className="text-xl font-semibold">Download Resume</span>
                </div>
                <ArrowRight
                  size={24}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
