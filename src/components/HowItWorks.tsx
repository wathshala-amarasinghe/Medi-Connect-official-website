import React from 'react';
import { motion } from 'framer-motion';
import { 
  DatabaseZapIcon, 
  Settings2Icon, 
  StethoscopeIcon, 
  BarChart3Icon,
  ChevronRightIcon
} from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Connect Systems',
    icon: DatabaseZapIcon,
    description: 'Integrate existing tools and migrate data securely with our expert onboarding team.'
  },
  {
    number: '02',
    title: 'Automate Workflows',
    icon: Settings2Icon,
    description: 'Set custom rules for billing, clinical documentation, and hospital operations.'
  },
  {
    number: '03',
    title: 'Improve Care',
    icon: StethoscopeIcon,
    description: 'Empower providers with AI insights and a unified 360-degree patient view.'
  },
  {
    number: '04',
    title: 'Track Outcomes',
    icon: BarChart3Icon,
    description: 'Monitor performance with real-time analytics and automated regulatory reporting.'
  }
];

export function HowItWorks() {
  const brandRed = "#E42327";

  return (
    <section className="py-32 bg-slate-900 overflow-hidden relative border-t border-slate-800">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(228,35,39,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-red-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6"
          >
            Implementation Process
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            How <span style={{ color: brandRed }}>MediConnect</span> Works
          </h2>
          <p className="text-slate-400 text-lg">
            A strategic, four-step transition to a unified healthcare operating system.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-slate-800">
            <motion.div
              className="absolute top-0 left-0 h-full shadow-[0_0_10px_#E42327]"
              style={{ backgroundColor: brandRed }}
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group relative flex flex-col items-center text-center"
                >

                  <div className="relative mb-8">
                    <div className="w-24 h-24 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center transition-all duration-500 group-hover:border-red-500/50 group-hover:shadow-[0_0_30px_rgba(228,35,39,0.15)] relative z-10">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <span className="absolute font-black text-2xl text-slate-700 group-hover:opacity-0 group-hover:scale-50 transition-all duration-300">
                          {step.number}
                        </span>
                        <Icon 
                          size={32} 
                          strokeWidth={1.5} 
                          style={{ color: brandRed }}
                          className="opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" 
                        />
                      </div>
                    </div>

                    <div className="md:hidden absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-500" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed px-4 group-hover:text-slate-200 transition-colors duration-300">
                    {step.description}
                  </p>

                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-10 -right-6 text-slate-800 z-0">
                      <ChevronRightIcon size={20} className="group-hover:text-red-500/30 transition-colors" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 p-24 opacity-[0.02] text-white pointer-events-none">
        <DatabaseZapIcon size={400} />
      </div>
    </section>
  );
}