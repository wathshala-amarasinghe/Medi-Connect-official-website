import React from 'react';
import { motion } from 'framer-motion';
import {
  HeartPulseIcon,
  ZapIcon,
  ClockIcon,
  TrendingUpIcon,
  ShieldCheckIcon,
  CheckCircle2Icon
} from 'lucide-react';

const benefits = [
  {
    title: 'Better Patient Outcomes',
    description: 'Give providers the complete clinical picture to make better decisions with real-time data.',
    icon: HeartPulseIcon,
  },
  {
    title: 'Operational Efficiency',
    description: 'Streamline daily tasks and reduce bottlenecks across your entire medical organization.',
    icon: ZapIcon,
  },
  {
    title: 'Reduced Admin Work',
    description: 'Automate paperwork and data entry so staff can refocus on high-quality patient care.',
    icon: ClockIcon,
  },
  {
    title: 'Improved Revenue Cycle',
    description: 'Catch billing errors before submission and accelerate your facility’s payment collection.',
    icon: TrendingUpIcon,
  },
  {
    title: 'Secure Healthcare Data',
    description: 'Enterprise-grade security and HIPAA compliance built into every layer of the platform.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Regulatory Compliance',
    description: 'Stay ahead of changing healthcare regulations with automated updates and reporting.',
    icon: CheckCircle2Icon,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export function BenefitsSection() {
  const brandRed = '#E42327';

  return (
    <section className="relative py-32 bg-slate-900 overflow-hidden border-t border-slate-800">
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, #334155 1px, transparent 0)`, 
          backgroundSize: '48px 48px' 
        }} 
      />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-8 rounded-full border border-red-500/20 bg-red-500/10 text-red-500 text-[10px] font-black uppercase tracking-[0.3em]"
          >
            Core Advantages
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tighter"
          >
            Designed for Precision. <br />
            <span style={{ color: brandRed }}>Built for Clinical Excellence.</span>
          </motion.h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Transforming medical administration through surgical-grade software efficiency and data integrity.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group relative p-10 rounded-[2.5rem] border border-slate-800 bg-slate-800/20 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-500 overflow-hidden shadow-2xl"
              >
                <div className="absolute -inset-px bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700/50 flex items-center justify-center mb-10 transition-all duration-500 group-hover:border-red-500/40 shadow-inner">
                    <Icon 
                      size={28} 
                      strokeWidth={1.5} 
                      className="text-slate-400 transition-all duration-500 group-hover:text-red-500 group-hover:scale-110" 
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium transition-colors group-hover:text-slate-300">
                    {benefit.description}
                  </p>
                </div>
                <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-slate-700 group-hover:bg-red-500 transition-all duration-500" />
                
                <div 
                  className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-700 ease-in-out"
                  style={{ backgroundColor: brandRed }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none translate-x-1/4 translate-y-1/4" />
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2" />
    </section>
  );
}