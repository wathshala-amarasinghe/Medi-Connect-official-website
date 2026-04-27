import React from 'react';
import { motion } from 'framer-motion';
import { InfoIcon, PlusIcon, ClockIcon, ShieldCheckIcon } from 'lucide-react';

const packages = [
  {
    name: 'Bronze',
    users: '1-20 Users',
    description: 'Perfect for small clinics and new practices starting their digital journey.',
    totalInitial: '800,000',
    totalMonthly: '45,000',
    badge: null,
    highlight: false,
    breakdown: [
      { name: 'Hospital ERP Solution', initial: '500,000', monthly: '25,000' },
      { name: 'HIS Solution', initial: '500,000', monthly: '25,000' }
    ],
    timeline: '4 months'
  },
  {
    name: 'Silver',
    users: '20-50 Users',
    description: 'Ideal for growing medical centers and multi-specialty groups.',
    totalInitial: '2,000,000',
    totalMonthly: '110,000',
    badge: 'Most Popular',
    highlight: true,
    breakdown: [
      { name: 'Hospital ERP Solution', initial: '1,200,000', monthly: '60,000' },
      { name: 'HIS Solution', initial: '1,200,000', monthly: '60,000' }
    ],
    timeline: '5 months'
  },
  {
    name: 'Gold',
    users: '50-100 Users',
    description: 'Comprehensive enterprise solution for large hospital networks.',
    totalInitial: '4,000,000',
    totalMonthly: '220,000',
    badge: 'Enterprise',
    highlight: false,
    breakdown: [
      { name: 'Hospital ERP Solution (w/ Maint.)', initial: '1,600,000', monthly: '160,000' },
      { name: 'HIS Solution', initial: '1,600,000', monthly: '80,000' }
    ],
    timeline: '8 months'
  }
];

const addons = [
  { name: 'Hospital Branded Mobile Apps (ERP & HIS)', price: 'LKR 250,000' },
  { name: 'Our Branded Mobile Apps (ERP & HIS)', price: 'LKR 200,000' },
  { name: 'Employee Access Module', price: 'LKR 150,000' },
  { name: 'Module Customization (Per CR / Day)', price: 'LKR 15,000' },
  { name: 'Additional Training Session (Per Day)', price: 'LKR 10,000' }
];

export function PricingSection() {
  const brandRed = '#E42327';

  return (
    <section className="py-32 bg-slate-900 overflow-hidden relative border-t border-slate-800">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(228,35,39,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-red-500 mb-4"
          >
            Investment Architecture
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
            Transparent Scaling <br />
            <span className="text-slate-500">for Modern Clinical Needs.</span>
          </h2>
          <p className="text-lg text-slate-400 font-medium">
            Predictable pricing models designed to grow with your medical infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20 items-stretch">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.3 }
              }}
              className={`group relative rounded-[2.5rem] p-10 flex flex-col cursor-pointer transition-all duration-500 border ${
                pkg.highlight 
                  ? 'bg-slate-800/40 backdrop-blur-2xl border-red-500/50 shadow-[0_20px_50px_rgba(228,35,39,0.15)] z-10' 
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 shadow-xl'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest shadow-2xl z-20 bg-red-600 animate-pulse-soft">
                  {pkg.badge}
                </div>
              )}

              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-black text-white group-hover:text-red-500 transition-colors">
                    {pkg.name}
                  </h3>
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-800 border border-slate-700 px-3 py-1 rounded-full uppercase tracking-tighter">
                    {pkg.users}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">{pkg.description}</p>
              </div>

              <div className="mb-8 pb-8 border-b border-slate-800/60">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Implementation (ERP + HIS)</div>
                <div className="flex items-baseline gap-2 mb-2 text-white">
                  <span className="text-lg font-bold">LKR</span>
                  <span className="text-5xl font-black tracking-tighter">{pkg.totalInitial}</span>
                  <span className="text-xs text-slate-500 ml-1 font-bold">Initial</span>
                </div>
                <div className="flex items-center gap-2 text-red-500 font-black text-sm uppercase tracking-tighter">
                  <PlusIcon size={16} strokeWidth={3} />
                  <span>LKR {pkg.totalMonthly} / month</span>
                </div>
              </div>

              <div className="flex-1 mb-8 space-y-6 text-left">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-600">License Breakdown</div>
                {pkg.breakdown.map((item, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-xs font-bold text-slate-300 flex items-center gap-2 uppercase tracking-tight">
                      {item.name}
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-500 font-black uppercase">
                      <span>Initial: {item.initial}</span>
                      <span className="text-red-500/80">Monthly: {item.monthly}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-slate-800/60 space-y-6">
                <div className="flex items-center gap-3 text-xs text-slate-400 font-bold uppercase tracking-tight">
                  <ClockIcon size={16} className="text-red-500" />
                  <span>
                    Deployment: <strong className="text-white">{pkg.timeline}</strong>
                  </span>
                </div>
                <button
                  className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 border ${
                    pkg.highlight 
                      ? 'bg-red-600 border-red-500 text-white shadow-[0_10px_20px_rgba(228,35,39,0.3)] hover:brightness-110' 
                      : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  Configure {pkg.name}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-800/30 backdrop-blur-xl rounded-[3rem] border border-slate-800 p-8 md:p-12 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-2xl bg-red-600/10 flex items-center justify-center text-red-500 border border-red-500/20 shadow-inner">
                  <ShieldCheckIcon size={24} />
               </div>
               <h3 className="text-2xl font-black text-white tracking-tight">Enterprise Add-ons</h3>
            </div>
            <div className="h-[1px] flex-1 bg-slate-800 hidden md:block" />
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Enhanced Clinical Capabilities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {addons.map((addon, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.03)" }}
                className="flex items-center gap-4 p-6 rounded-3xl bg-slate-900/50 border border-slate-800 transition-all group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-lg">
                  <PlusIcon size={16} strokeWidth={3} />
                </div>
                <div className="text-left overflow-hidden">
                  <div className="text-xs font-black text-slate-200 leading-tight mb-2 uppercase tracking-tight truncate">{addon.name}</div>
                  <div className="text-xs font-black text-red-500 uppercase tracking-widest">{addon.price}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-slate-800/60 text-center sm:text-left">
            <div className="w-3 h-3 bg-red-600 rounded-full shadow-[0_0_12px_rgba(228,35,39,0.8)] animate-pulse" />
            <p className="text-[11px] text-slate-500 font-black uppercase tracking-widest leading-relaxed">
              Customized maintenance terms available for high-volume hospital groups. Contact our tech-lead for clinical integration analysis.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}