import React from 'react';
import { motion } from 'framer-motion';
import {
  SparklesIcon,
  FileTextIcon,
  LineChartIcon,
  CheckCircleIcon,
  CalendarIcon,
  PlusIcon
} from 'lucide-react';

const capabilities = [
  {
    title: 'AI Chart Summaries',
    description: 'Instantly summarize complex patient histories into actionable insights before the visit.',
    icon: FileTextIcon,
    mockup: (
      <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-700/50 group-hover:border-red-500/30 transition-all shadow-2xl animate-float">
        <div className="flex items-center gap-2 mb-3">
          <SparklesIcon size={14} className="text-red-500" />
          <div className="h-2 w-20 bg-slate-700 rounded-full"></div>
        </div>
        <div className="space-y-2">
          <div className="h-1.5 w-full bg-slate-800 rounded-full group-hover:bg-red-500/10 transition-colors"></div>
          <div className="h-1.5 w-5/6 bg-slate-800 rounded-full"></div>
          <div className="h-1.5 w-4/6 bg-slate-800 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: 'Predictive Care Insights',
    description: 'Identify at-risk patients and recommend preventative care protocols automatically.',
    icon: LineChartIcon,
    mockup: (
      <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-700/50 flex items-end gap-2 h-24 group-hover:border-red-500/30 transition-all shadow-2xl animate-float" style={{ animationDelay: '0.5s' }}>
        {[30, 45, 25, 60, 90, 50].map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t-md transition-all duration-700 ${i === 4 ? 'bg-red-600 shadow-[0_0_15px_rgba(228,35,39,0.3)]' : 'bg-slate-700 group-hover:bg-slate-600'}`}
            style={{ height: `${h}%` }}>
          </div>
        ))}
      </div>
    )
  },
  {
    title: 'Automated Billing Review',
    description: 'AI scans claims for missing codes and errors before submission to prevent denials.',
    icon: CheckCircleIcon,
    mockup: (
      <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-700/50 space-y-3 group-hover:border-red-500/30 transition-all shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full flex-shrink-0 ${i === 2 ? 'bg-red-600 animate-pulse' : 'bg-slate-800'}`}></div>
            <div className={`h-2 w-full rounded-full ${i === 2 ? 'bg-slate-600' : 'bg-slate-800'}`}></div>
          </div>
        ))}
      </div>
    )
  },
  {
    title: 'Smart Scheduling',
    description: 'Optimize provider schedules by predicting appointment durations and no-show risks.',
    icon: CalendarIcon,
    mockup: (
      <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-700/50 grid grid-cols-3 gap-2 group-hover:border-red-500/30 transition-all shadow-2xl animate-float" style={{ animationDelay: '1.5s' }}>
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className={`h-5 rounded-md transition-colors ${i === 4 || i === 5 ? 'bg-red-600/30 border border-red-500/40' : 'bg-slate-800'}`}>
          </div>
        ))}
      </div>
    )
  }
];

export function AICapabilities() {
  const brandRed = "#E42327";

  return (
    <section className="py-32 bg-slate-900 text-white overflow-hidden relative border-t border-slate-800">
      
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/[0.03] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-red-500 text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-2xl backdrop-blur-md"
          >
            <SparklesIcon size={14} />
            Intelligent Workflow
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter leading-[1.05]">
            Clinical Intelligence <br />
            <span className="text-slate-500">at the point of care.</span>
          </h2>
          
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            Our clinical AI works silently across every module, 
            eliminating administrative fatigue so doctors can focus on patients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
                className="group relative bg-slate-800/20 backdrop-blur-xl rounded-[2.5rem] border border-slate-800 p-10 hover:border-red-500/30 hover:bg-slate-800/40 transition-all duration-500 flex flex-col shadow-lg"
              >
                <div className="absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-red-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative mb-10">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-red-500 group-hover:border-red-500/40 group-hover:shadow-[0_0_20px_rgba(228,35,39,0.15)] transition-all duration-500"
                  >
                    <Icon size={26} strokeWidth={1.5} />
                  </motion.div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full border-4 border-slate-900 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500 shadow-lg" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                  {cap.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-12 min-h-[60px] group-hover:text-slate-400 transition-colors">
                  {cap.description}
                </p>

                <div className="mt-auto opacity-40 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0">
                  {cap.mockup}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}