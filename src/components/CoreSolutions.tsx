import React from 'react';
import { motion } from 'framer-motion';
import {
  FileTextIcon,
  CreditCardIcon,
  UsersIcon,
  VideoIcon,
  BrainCircuitIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  PlusIcon
} from 'lucide-react';

const solutions = [
  {
    title: 'Electronic Medical Records',
    description: 'Intuitive charting and customizable clinical workflows designed to streamline doctor-patient interactions.',
    icon: FileTextIcon,
  },
  {
    title: 'Practice Management',
    description: 'Automate claims and optimize your revenue cycle with intelligent, integrated billing tools.',
    icon: CreditCardIcon,
  },
  {
    title: 'Patient Engagement',
    description: 'Empower patients with self-scheduling, secure messaging, and easy access to health data.',
    icon: UsersIcon,
  },
  {
    title: 'Telehealth Suite',
    description: 'High-definition video consultations fully integrated into the patient’s clinical history.',
    icon: VideoIcon,
  },
  {
    title: 'Clinical AI Insights',
    description: 'Predictive analytics to support clinical decisions and optimize hospital operations.',
    icon: BrainCircuitIcon,
  },
  {
    title: 'Compliance & Security',
    description: 'Enterprise-grade encryption and HIPAA compliance to protect sensitive medical data.',
    icon: ShieldCheckIcon,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export function CoreSolutions() {
  return (
    <section className="relative py-32 bg-slate-900 overflow-hidden border-t border-slate-800">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">

        <div className="max-w-4xl mb-28">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-12 h-[1px] bg-red-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
              The MediConnect <span className="text-red-500">Modules</span>
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]"
          >
            Clinical Precision. <br />
            <span className="text-slate-500">Modular Intelligence.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed"
          >
            Deploy high-performance software modules designed for modern health systems that demand security and surgical accuracy.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative bg-slate-800/40 backdrop-blur-xl rounded-[2.5rem] p-10 border border-slate-800 hover:border-red-500/30 transition-all duration-500 cursor-pointer shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]" />

                <div className="relative mb-12">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-slate-900 border border-slate-700 group-hover:border-red-500/50 group-hover:text-red-500 transition-all duration-300 text-slate-400 shadow-inner">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <div className="absolute -top-1 -right-1">
                    <PlusIcon size={14} className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-red-50 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-slate-400 text-[15px] leading-relaxed mb-12 group-hover:text-slate-300 transition-colors">
                  {solution.description}
                </p>

                <div className="pt-8 border-t border-slate-700/50">
                  <div className="flex items-center justify-between group/link">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-white transition-colors">
                      Module Details
                    </span>
                    <motion.div 
                      whileHover={{ x: 3 }}
                      className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center group-hover/link:bg-red-600 transition-all shadow-lg"
                    >
                      <ArrowRightIcon size={18} className="text-white group-hover:text-red-500 transition-colors duration-300" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center"
        >
          <button className="flex items-center gap-3 mx-auto text-xs font-black uppercase tracking-[0.3em] text-slate-500 hover:text-red-500 transition-colors group">
            View All Clinical Modules
            <ArrowRightIcon className="transition-colors duration-300 group-hover:text-red-500" size={14} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}