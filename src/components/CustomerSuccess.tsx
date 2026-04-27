import React from "react";
import { motion } from "framer-motion";
import { QuoteIcon, ArrowRightIcon, PlusIcon } from "lucide-react";

const stories = [
  {
    hospital: "Metro Health Systems",
    challenge: "Fragmented systems and high claim denial rates.",
    metric: "40% reduction",
    metricLabel: "in admin time",
    quote: "MediConnect transformed our entire revenue cycle. The AI billing review alone paid for the platform in the first month.",
  },
  {
    hospital: "Pacific Medical Group",
    challenge: "Low patient engagement and high no-show rates.",
    metric: "95%",
    metricLabel: "patient satisfaction",
    quote: "The portal adoption rate tripled. Patients love the self-scheduling feature and the intuitive interface.",
  },
  {
    hospital: "Valley Hospital Network",
    challenge: "Providers spending 2+ hours after hours on documentation.",
    metric: "$2M",
    metricLabel: "annual savings",
    quote: "Our doctors finally get to go home on time. The AI chart summaries save us countless hours every single week.",
  },
];

export function CustomerSuccess() {
  const brandRed = "var(--brand-red)";

  return (
    <section className="relative py-32 bg-slate-900 overflow-hidden border-t border-slate-800">
      <motion.div 
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none animate-float" 
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-800/20 blur-[120px] rounded-full pointer-events-none"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-[1px]" style={{ backgroundColor: brandRed }} />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Impact Stories</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Proven results across <br />
              <span style={{ color: brandRed }}>modern healthcare.</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              See how leading medical organizations are leveraging the MediConnect 
              ecosystem to redefine patient care and operational efficiency.
            </p>
          </div>

          <motion.button 
            whileHover={{ x: 5 }}
            className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white transition-colors"
          >
            <span className="group-hover:text-red-500 transition-colors">View Case Studies</span>
            <div className="p-3 rounded-full bg-slate-800 border border-slate-700 group-hover:bg-red-600 group-hover:border-red-500 transition-all duration-300">
              <ArrowRightIcon size={18} />
            </div>
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 md:p-10 flex flex-col hover:border-red-500/40 hover:bg-slate-800/60 transition-all duration-500 shadow-2xl"
            >
              <PlusIcon 
                size={20} 
                className="absolute top-8 right-8 text-red-500 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" 
              />

              <div className="mb-8">
                <h3 className="font-bold text-2xl text-white mb-3 tracking-tight transition-colors group-hover:text-white">
                  {story.hospital}
                </h3>
                <div className="inline-block px-3 py-1 rounded-lg bg-slate-900/80 text-[10px] font-black uppercase tracking-widest text-slate-500 border border-slate-700/50">
                  Challenge: <span className="text-slate-300">{story.challenge}</span>
                </div>
              </div>

              <div className="mb-10 py-8 border-y border-slate-700/50">
                <motion.div 
                  whileHover={{ scale: 1.05, originX: 0 }}
                  className="text-4xl font-black mb-2 transition-colors duration-500"
                  style={{ color: brandRed }}
                >
                  {story.metric}
                </motion.div>
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.25em]">
                  {story.metricLabel}
                </div>
              </div>

              <div className="mt-auto relative pt-4">
                <QuoteIcon
                  size={42}
                  strokeWidth={1}
                  className="absolute -top-3 -left-3 text-red-600/10 group-hover:text-red-500/20 transition-colors"
                />
                <p className="text-slate-300 italic leading-relaxed relative z-10 pl-6 border-l-2 border-transparent group-hover:border-red-500/40 transition-all duration-500">
                  "{story.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}