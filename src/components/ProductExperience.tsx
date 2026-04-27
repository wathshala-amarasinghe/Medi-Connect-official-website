import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboardIcon,
  CreditCardIcon,
  UserCircleIcon,
  CheckCircle2Icon,
  PlusIcon,
  ArrowRightIcon,
  ActivityIcon
} from 'lucide-react';

const tabs = [
  { 
    id: 'emr', 
    label: 'EMR Dashboard', 
    icon: LayoutDashboardIcon,
    title: 'Complete Clinical Picture',
    desc: 'Access patient history, lab results, and imaging in a unified, high-speed view.',
    features: ['Customizable clinical templates', 'Voice-to-text AI dictation', 'E-prescribing integration']
  },
  { 
    id: 'billing', 
    label: 'Revenue Cycle', 
    icon: CreditCardIcon,
    title: 'Automated Billing Intelligence',
    desc: 'Track claims in real-time and automate patient collections with surgical precision.',
    features: ['Automated claim scrubbing', 'Real-time eligibility checks', 'One-click patient statements']
  },
  { 
    id: 'portal', 
    label: 'Patient Portal', 
    icon: UserCircleIcon,
    title: 'Modern Care Access',
    desc: 'Empower patients with self-scheduling and secure digital intake workflows.',
    features: ['Online self-scheduling', 'Secure HIPAA messaging', 'Digital intake forms']
  }
];

export function ProductExperience() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const currentTabData = tabs.find(t => t.id === activeTab);

  return (
    <section className="py-32 bg-slate-900 overflow-hidden relative border-t border-slate-800">
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[var(--brand-red)] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-left max-w-3xl mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-12 h-[1px] bg-[var(--brand-red)]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">The Ecosystem</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[1.05]">
            Built for <span className="text-[var(--brand-red)]">Clinical Precision.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl font-medium">
            A medical-grade interface that eliminates cognitive load, allowing providers to focus on what matters most: the patient.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-4 space-y-10">
            <div className="flex flex-col gap-4">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`group relative flex items-center gap-5 p-6 rounded-[2rem] text-left transition-all duration-500 border ${
                      isActive 
                        ? 'bg-slate-800/40 border-red-500/30 shadow-[0_20px_40px_rgba(0,0,0,0.3)]' 
                        : 'bg-transparent border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-inner ${
                      isActive ? 'bg-[var(--brand-red)] text-white shadow-[0_10px_20px_rgba(228,35,39,0.3)]' : 'bg-slate-900 border border-slate-800 text-slate-500'
                    }`}>
                      <Icon size={26} strokeWidth={isActive ? 2 : 1.5} />
                    </div>
                    <div>
                      <span className={`block font-bold text-xl tracking-tight transition-colors ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`}>
                        {tab.label}
                      </span>
                      {isActive && (
                        <motion.div layoutId="activeTag" className="flex items-center gap-2 mt-1">
                           <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-red)] animate-pulse" />
                           <span className="text-[10px] text-red-500 font-black uppercase tracking-widest">Active Module</span>
                        </motion.div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-8 px-4"
              >
                <div>
                  <h3 className="text-3xl font-black text-white leading-tight mb-4 tracking-tight">
                    {currentTabData?.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed font-medium">
                    {currentTabData?.desc}
                  </p>
                </div>
                <ul className="space-y-4">
                  {currentTabData?.features.map((feature, i) => (
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={i} 
                      className="flex items-center gap-4 text-sm font-bold text-slate-300"
                    >
                      <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                        <CheckCircle2Icon size={14} className="text-[var(--brand-red)]" />
                      </div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-8">
            <motion.div 
              layout
              className="bg-white rounded-[3rem] border border-slate-200 shadow-[0_50px_100px_rgba(0,0,0,0.3)] overflow-hidden aspect-[16/10] relative group"
            >
              {/* Browser Header */}
              <div className="bg-slate-50 border-b border-slate-200 px-8 py-6 flex items-center justify-between">
                <div className="flex gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-[var(--brand-red)] opacity-50"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                </div>
                <div className="flex items-center gap-3 px-5 py-1.5 bg-white rounded-full border border-slate-200 shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.3)]" />
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Secure Clinical Session</span>
                </div>
                <ActivityIcon size={18} className="text-slate-300" />
              </div>

              {/* Browser Body */}
              <div className="p-10 h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                    className="h-full flex gap-10"
                  >
                    {/* Sidebar Placeholder */}
                    <div className="w-1/5 space-y-6">
                      <div className="h-10 bg-[var(--brand-red)] opacity-5 rounded-xl w-full border border-red-500/10 shadow-sm"></div>
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`h-2.5 rounded-full transition-all duration-700 ${i === 1 ? 'bg-slate-200 w-full' : 'bg-slate-100 w-2/3'}`}></div>
                      ))}
                      <div className="pt-10 space-y-4">
                         <div className="h-20 bg-slate-50 rounded-2xl border border-slate-100" />
                      </div>
                    </div>

                    {/* Main Content Placeholder */}
                    <div className="flex-1 space-y-8">
                      <div className="h-36 bg-slate-50 rounded-3xl border border-slate-100 p-8 flex items-center gap-8">
                        <div className="w-20 h-20 rounded-[2rem] bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:border-red-500/20 transition-colors">
                          <PlusIcon size={28} className="text-slate-300" />
                        </div>
                        <div className="flex-1 space-y-4">
                          <div className="h-5 bg-slate-200 rounded-full w-1/3"></div>
                          <div className="h-2.5 bg-slate-100 rounded-full w-1/2"></div>
                          <div className="h-2.5 bg-slate-100 rounded-full w-1/4"></div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-8">
                        <div className="h-44 bg-slate-50 rounded-3xl border border-slate-100 p-8 space-y-5">
                          <div className="h-3 bg-slate-200 rounded-full w-1/2"></div>
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="h-2 bg-slate-100 rounded-full w-full"></div>
                          ))}
                        </div>

                        {/* Chart / Stats Placeholder */}
                        <div className="h-44 bg-[var(--brand-red)]/[0.02] rounded-3xl border border-red-500/10 p-8 relative overflow-hidden group/card">
                          <div className="absolute top-6 right-8">
                            <ArrowRightIcon size={16} className="text-red-500 group-hover/card:translate-x-1 transition-transform" />
                          </div>
                          <div className="h-3 bg-red-500/10 rounded-full w-1/2 mb-8"></div>
                          <div className="flex items-end gap-2 h-20">
                            {[30, 70, 50, 95, 60, 85].map((h, i) => (
                              <motion.div 
                                key={i} 
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                                className="flex-1 bg-[var(--brand-red)] opacity-20 rounded-t-md" 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
