import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  BookOpenIcon,
  TrendingUpIcon,
  BrainCircuitIcon,
  PlusIcon
} from "lucide-react";

const insights = [
  {
    category: "Healthcare Trends",
    title: "The Future of Interoperability in Modern Hospitals",
    excerpt: "How open APIs and FHIR standards are breaking down data silos in healthcare networks.",
    readTime: "5 min read",
    icon: TrendingUpIcon,
    image: "https://res.cloudinary.com/dkupkmm4o/image/upload/v1773902531/Image-3_ggskhp.jpg", 
  },
  {
    category: "AI Research",
    title: "Evaluating Clinical AI: Accuracy vs. Efficiency",
    excerpt: "A comprehensive study on how AI assistants impact provider workflow and diagnostic accuracy.",
    readTime: "8 min read",
    icon: BrainCircuitIcon,
    image: "https://res.cloudinary.com/dkupkmm4o/image/upload/v1773902538/Image-4_j1uxws.jpg",
  },
  {
    category: "Practice Growth",
    title: "The Ultimate Guide to Reducing Claim Denials",
    excerpt: "Actionable strategies to optimize your revenue cycle and improve cash flow immediately.",
    readTime: "12 min read",
    icon: BookOpenIcon,
    image: "https://res.cloudinary.com/dkupkmm4o/image/upload/v1773902525/Image-2_eftxhw.jpg",
  },
];

export function InsightsSection() {
  const brandRed = '#E42327';

  return (
    <section className="relative py-32 bg-slate-900 overflow-hidden border-t border-slate-800">
      
      <div className="absolute w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[140px] -top-40 -left-40 pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] bottom-0 right-0 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-[1px]" style={{ backgroundColor: brandRed }} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Knowledge Hub</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
              Clinical Insights <br />
              <span className="text-slate-500">& Medical Resources.</span>
            </h2>

            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              Expert perspectives on healthcare technology, revenue optimization, and the future of digital care delivery.
            </p>
          </div>

          <motion.button 
            whileHover={{ x: 5 }}
            className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-white transition-all"
          >
            <span>Resource Center</span>
            <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700 group-hover:bg-red-600 group-hover:border-red-500 transition-all shadow-xl">
              <ArrowRightIcon size={18} />
            </div>
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {insights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-[2.5rem] border border-slate-800 bg-slate-800/30 backdrop-blur-md hover:bg-slate-800/50 hover:border-red-500/30 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col shadow-2xl"
              >

                <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                   <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg">
                      <PlusIcon size={16} strokeWidth={3} />
                   </div>
                </div>

                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80" />

                  <div
                    className="absolute bottom-6 left-6 w-14 h-14 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-700 flex items-center justify-center text-red-500 shadow-2xl group-hover:scale-110 group-hover:border-red-500/50 transition-all duration-500"
                  >
                    <Icon size={26} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="p-8 pt-10 flex flex-col flex-1">

                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500">
                      {item.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-700" />
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                      {item.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-50 transition-colors leading-[1.4] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-10 line-clamp-2 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {item.excerpt}
                  </p>

                  <div className="mt-auto pt-6 border-t border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-white transition-all">
                        Deep Dive
                       </span>
                    </div>
                    <motion.div 
                      className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-500 group-hover:text-red-500 group-hover:border-red-500/50 transition-all"
                    >
                      <ArrowRightIcon size={16} />
                    </motion.div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}