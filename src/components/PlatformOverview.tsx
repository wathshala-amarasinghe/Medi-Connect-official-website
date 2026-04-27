import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ActivityIcon,
  FileTextIcon,
  CreditCardIcon,
  UserIcon,
  BarChartIcon,
  BrainCircuitIcon,
  VideoIcon
} from 'lucide-react';

const nodes = [
  { id: 'emr', label: 'EMR', icon: FileTextIcon, angle: 0, desc: 'Complete electronic medical records' },
  { id: 'billing', label: 'Billing', icon: CreditCardIcon, angle: 60, desc: 'Automated revenue cycle management' },
  { id: 'portal', label: 'Patient Portal', icon: UserIcon, angle: 120, desc: 'Secure patient engagement tools' },
  { id: 'analytics', label: 'Analytics', icon: BarChartIcon, angle: 180, desc: 'Real-time operational insights' },
  { id: 'ai', label: 'AI Assistant', icon: BrainCircuitIcon, angle: 240, desc: 'Clinical decision support' },
  { id: 'telehealth', label: 'Telehealth', icon: VideoIcon, angle: 300, desc: 'Integrated virtual care' },
];

export function PlatformOverview() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const brandRed = '#E42327';
  const radius = 38; 

  return (
    <section className="py-32 bg-slate-900 overflow-hidden relative border-t border-slate-800">
      
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="https://res.cloudinary.com/dkupkmm4o/image/upload/v1773816656/Image-1_zwqphc.jpg"
          alt="background decoration"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(228,35,39,0.05)_0%,transparent_70%)] pointer-events-none z-1" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-red-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">The Connected Ecosystem</span>
            <span className="w-8 h-[1px] bg-red-600" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            One Unified <span style={{ color: brandRed }}>Platform.</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Every clinical module synchronized in real-time to eliminate data silos and maximize efficiency.
          </p>
        </div>

        <div className="relative w-full max-w-2xl mx-auto aspect-square flex items-center justify-center">
          
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
            {nodes.map((node) => {
              const rad = (node.angle * Math.PI) / 180;
              const x2 = 50 + Math.cos(rad) * radius;
              const y2 = 50 + Math.sin(rad) * radius;
              const isNodeActive = hoveredNode === node.id || hoveredNode === 'center';
              
              return (
                <motion.line
                  key={`line-${node.id}`}
                  x1="50" y1="50" x2={x2} y2={y2}
                  stroke={isNodeActive ? brandRed : '#334155'}
                  strokeWidth={isNodeActive ? '0.6' : '0.2'}
                  strokeDasharray={isNodeActive ? "0" : "1 1"}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="transition-all duration-500"
                />
              );
            })}
          </svg>

          <motion.div
            className="absolute z-20 w-36 h-36 md:w-44 md:h-44 rounded-full bg-slate-800 border border-slate-700 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center cursor-pointer group"
            onMouseEnter={() => setHoveredNode('center')}
            onMouseLeave={() => setHoveredNode(null)}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 rounded-full bg-red-600/5 group-hover:bg-red-600/10 transition-colors" />
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 shadow-2xl relative z-10"
              style={{ backgroundColor: brandRed, color: '#fff' }}
            >
              <ActivityIcon size={28} strokeWidth={2.5} />
            </div>
            <span className="font-black text-[10px] md:text-xs text-center leading-tight uppercase tracking-[0.2em] text-white relative z-10">
              MediConnect<br />Core OS
            </span>
          </motion.div>

          {nodes.map((node, index) => {
            const rad = (node.angle * Math.PI) / 180;
            const left = `${50 + Math.cos(rad) * radius}%`;
            const top = `${50 + Math.sin(rad) * radius}%`;
            const Icon = node.icon;
            const isHovered = hoveredNode === node.id;

            return (
              <div
                key={node.id}
                className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
                style={{ left, top }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <motion.div 
                  className="flex flex-col items-center gap-3 cursor-pointer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                >
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-3xl flex items-center justify-center transition-all duration-500 backdrop-blur-xl border shadow-2xl ${
                      isHovered 
                        ? 'bg-slate-700 border-red-500 scale-110 -translate-y-2' 
                        : 'bg-slate-800/40 border-slate-700'
                    }`}
                    style={{ color: isHovered ? brandRed : '#94a3b8' }}
                  >
                    <Icon size={28} />
                  </div>
                  
                  <span
                    className={`font-bold text-[10px] md:text-[11px] uppercase tracking-widest px-3 py-1.5 rounded-xl transition-all duration-300 ${
                      isHovered ? 'bg-red-600 text-white shadow-[0_10px_20px_rgba(228,35,39,0.3)]' : 'bg-slate-800/80 text-slate-400 border border-slate-700'
                    }`}
                  >
                    {node.label}
                  </span>

                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        className="absolute bottom-full mb-6 w-48 bg-slate-900 border border-red-600/50 text-white p-3 rounded-2xl text-center shadow-2xl z-50"
                      >
                        <p className="text-[11px] font-medium leading-relaxed text-slate-200">
                          {node.desc}
                        </p>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-red-600/50" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}