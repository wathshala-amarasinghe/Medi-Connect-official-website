import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRightIcon,
  ActivityIcon,
  UsersIcon,
  CalendarIcon,
} from "lucide-react";

export function HeroSection() {
  const videos = [
    "https://res.cloudinary.com/dkupkmm4o/video/upload/v1773902606/video-2_cgobhf.mp4",
    "https://res.cloudinary.com/dkupkmm4o/video/upload/v1773902615/video-3_b5y3sz.mp4",
    "https://res.cloudinary.com/dkupkmm4o/video/upload/v1773902656/video-4_duf2wf.mp4",
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.video
            key={currentVideo}
            src={videos[currentVideo]}
            autoPlay
            muted
            loop
            playsInline
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.35, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-slate-900/70 z-0 backdrop-brightness-75"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-white"
          >
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-sm font-medium mb-8 cursor-pointer transition-all duration-300 hover:bg-white/5 active:scale-95 backdrop-blur-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="font-heading tracking-wide">MediConnect 2.0 is live</span>
            </motion.div>
            
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] mb-8 tracking-tight">
              Clinical Precision. <br />
              <span style={{ color: 'var(--brand-red)' }}>AI Intelligence.</span>
            </h1>
            <p className="font-body text-lg sm:text-xl mb-10 leading-relaxed text-slate-300 max-w-lg">
              The unified operating system for modern medical organizations. 
              Automate clinical workflows with surgical accuracy.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">

              <motion.button 
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 15px 35px rgba(228, 35, 39, 0.3)" 
                }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-3 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all"
                style={{ backgroundColor: 'var(--brand-red)' }}
              >
                Request Demo
                <ArrowRightIcon size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button 
                whileHover={{ 
                  scale: 1.03,
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  color: "var(--primary-navy)"
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all"
              >
                Explore Platform
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-10"
          >
            <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] blur-[120px] rounded-full -z-10 opacity-30"
                style={{ background: `radial-gradient(circle, var(--primary-navy) 0%, transparent 70%)` }}
            ></div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200/50 shadow-[0_50px_100px_rgba(0,0,0,0.4)] overflow-hidden animate-float">
              <div className="bg-slate-50 border-b border-slate-100 px-6 py-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--brand-red)' }}></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="ml-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    MediConnect EMR v2.0
                  </div>
                </div>
                <div className="w-8 h-8 rounded-xl flex items-center justify-center shadow-inner" 
                     style={{ backgroundColor: 'rgba(228, 35, 39, 0.08)', color: 'var(--brand-red)' }}>
                  <ActivityIcon size={16} strokeWidth={2.5} />
                </div>
              </div>

              <div className="p-8 grid grid-cols-3 gap-6">
                <div className="col-span-1 space-y-4">
                  <div className="h-10 bg-slate-100 rounded-xl w-full"></div>
                  <div className="h-10 rounded-xl w-3/4 border border-red-500/10 shadow-sm" 
                       style={{ backgroundColor: 'rgba(228, 35, 39, 0.03)' }}></div>
                  <div className="h-10 bg-slate-100 rounded-xl w-5/6"></div>
                  <div className="h-10 bg-slate-100 rounded-xl w-full"></div>

                  <div className="mt-8 p-5 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <UsersIcon size={14} className="text-slate-400" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Patients</span>
                    </div>
                    <div className="text-3xl font-extrabold text-slate-900">42</div>
                    <div className="text-[10px] font-bold mt-2 inline-block px-2 py-0.5 rounded bg-red-50" 
                         style={{ color: 'var(--brand-red)' }}>
                      +12.5%
                    </div>
                  </div>
                </div>

                <div className="col-span-2 space-y-6">
                  <div className="bg-slate-50 rounded-3xl border border-slate-100 p-6 h-40 flex items-end gap-2">
                    {[40, 70, 45, 90, 65, 85, 55].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-lg relative group overflow-hidden"
                        style={{ backgroundColor: 'rgba(228, 35, 39, 0.1)' }}
                      >
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 1.5, delay: 0.8 + i * 0.1, ease: "circOut" }}
                          className="absolute bottom-0 left-0 right-0 rounded-t-lg"
                          style={{ backgroundColor: 'var(--brand-red)' }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Next Appointments</span>
                      <CalendarIcon size={14} className="text-slate-400" />
                    </div>
                    {[1, 2].map((i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl shadow-sm"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-xs font-black text-slate-900">
                            {String.fromCharCode(64 + i)}
                          </div>
                          <div className="space-y-2">
                            <div className="h-3 w-24 bg-slate-200 rounded-full"></div>
                            <div className="h-2 w-16 bg-slate-100 rounded-full"></div>
                          </div>
                        </div>
                        <div className="h-6 w-12 rounded-full border" 
                             style={{ backgroundColor: 'rgba(228, 35, 39, 0.05)', borderColor: 'rgba(228, 35, 39, 0.1)' }}></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}