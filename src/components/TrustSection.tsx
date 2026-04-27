import React from 'react';
import { motion } from 'framer-motion';
import { Building2Icon, ShieldCheckIcon, PlusIcon } from 'lucide-react';

const logos = [
  'Al Jalal Medi Care',
  'Medihub Clinic & Laboratory',
  'Dubai London Clinic & Speciality Hospital',
  'Yas Healthcare',
  'anaya',
  'Medi Shine Hospital',
  'Genius Hospital'
];

export function TrustSection() {
  const brandRed = 'var(--brand-red)';

  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(228,35,39,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-center gap-6 mb-16">
          <div className="h-[1px] w-12 md:w-20" style={{ backgroundColor: brandRed }} />
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap"
          >
            Powering Infrastructure for Global Healthcare
          </motion.p>

          <div className="h-[1px] w-12 md:w-20" style={{ backgroundColor: brandRed }} />
        </div>

        <div className="relative group">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-20 pointer-events-none" />

          <div className="overflow-hidden py-6">
            <motion.div
              className="flex gap-12 md:gap-24 items-center w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, duration: 35, ease: 'linear' }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <motion.div
                  key={index}
                  className="group/logo flex items-center gap-5 cursor-pointer relative"
                >
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-slate-700 rounded-full group-hover/logo:opacity-0 transition-all duration-300" />
                    <div 
                      className="absolute inset-0 flex items-center justify-center opacity-0 scale-50 group-hover/logo:opacity-100 group-hover/logo:scale-100 transition-all duration-500 rounded-xl bg-slate-800 border border-slate-700 shadow-xl"
                    >
                      <PlusIcon size={16} style={{ color: brandRed }} strokeWidth={3} />
                    </div>
                  </div>

                  <span className="font-bold text-slate-400 text-sm md:text-xl whitespace-nowrap transition-colors duration-300 group-hover/logo:text-white">
                    {logo}
                  </span>

                  <div 
                    className="absolute -bottom-2 left-14 right-0 h-[2px] w-0 group-hover/logo:w-[calc(100%-56px)] transition-all duration-500 rounded-full" 
                    style={{ backgroundColor: brandRed }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 
        <div className="mt-20 flex flex-wrap justify-center gap-12 md:gap-16">
           <motion.div 
             whileHover={{ opacity: 1, scale: 1.05 }}
             className="flex items-center gap-3 opacity-30 transition-all cursor-default"
           >
              <ShieldCheckIcon size={18} className="text-slate-400" />
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">ISO 27001 Certified</span>
           </motion.div>
           
           <motion.div 
             whileHover={{ opacity: 1, scale: 1.05 }}
             className="flex items-center gap-3 opacity-30 transition-all cursor-default"
           >
              <Building2Icon size={18} className="text-slate-400" />
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">HIPAA Compliant Cloud</span>
           </motion.div>
        </div>
        */}

      </div>
    </section>
  );
}