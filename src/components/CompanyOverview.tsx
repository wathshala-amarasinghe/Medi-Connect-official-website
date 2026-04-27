import React from 'react';
import { motion } from 'framer-motion';
import { 
  BuildingIcon, 
  FileTextIcon,
  ShieldCheckIcon,
  DatabaseIcon,
  CloudIcon,
  CpuIcon,
  Code2Icon,
  LayersIcon,
  GlobeIcon,
  ActivityIcon,
  FingerprintIcon,
  LockIcon,
  SmartphoneIcon,
  UsersIcon,
  RocketIcon
} from 'lucide-react';


const downloadCompanyPDF = () => {
  const link = document.createElement("a");
  link.href = "../../Public/MediConnect-Corporate-Profile.pdf"; 
  link.download = "MediConnect-Corporate-Profile.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export function CompanyOverview() {
  return (
    <section className="relative py-32 bg-main overflow-hidden border-t border-border-brand transition-colors duration-500 font-body">
      
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, #64748b 1px, transparent 0)`, 
          backgroundSize: '48px 48px' 
        }} 
      />
      
      {/* Dynamic Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/[0.02] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card-bg border border-border-brand text-[var(--brand-red)] text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-xl">
              <BuildingIcon size={14} /> Corporate Overview
            </div>

            <h2 className="font-heading text-4xl md:text-6xl font-black text-content mb-8 tracking-tighter leading-[1.1]">
              Leading the <br />
              <span className="text-[var(--brand-red)]">Medical Digital Frontier.</span>
            </h2>

            <p className="text-xl text-muted leading-relaxed max-w-xl mb-10 font-medium">
              MediConnect is a pioneer in health-tech integration, dedicated to transforming regional clinics into high-efficiency digital ecosystems through surgical-grade software engineering.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-12">
               {[
                 { label: 'Regional Expertise', icon: <GlobeIcon size={14} /> },
                 { label: '24/7 Clinical Support', icon: <UsersIcon size={14} /> },
                 { label: 'Future-Proof Tech', icon: <RocketIcon size={14} /> },
                 { label: 'Surgical Efficiency', icon: <ActivityIcon size={14} /> }
               ].map((item) => (
                 <div key={item.label} className="flex items-center gap-3 text-content font-bold text-xs bg-card-bg/50 p-3 rounded-xl border border-border-brand/50">
                   <span className="text-[var(--brand-red)]">{item.icon}</span>
                   {item.label}
                 </div>
               ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadCompanyPDF}
              className="px-10 py-5 rounded-2xl text-white font-black uppercase tracking-[0.2em] text-xs transition-all shadow-2xl flex items-center gap-3 group font-heading"
              style={{ 
                backgroundColor: "var(--brand-red)",
                boxShadow: `0 15px 35px -10px rgba(228, 35, 39, 0.5)` 
              }}
            >
              Download Corporate Profile
              <FileTextIcon size={18} className="group-hover:translate-y-[-2px] transition-transform" />
            </motion.button>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="relative w-full aspect-square flex items-center justify-center">
            <div className="relative z-30">
              <motion.div 
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-slate-950 border-4 border-border-brand flex items-center justify-center shadow-[0_0_60px_rgba(228,35,39,0.25)] p-6"
              >
                 <img src="https://res.cloudinary.com/dkupkmm4o/image/upload/v1773902554/Medi-Connect-Logo_tdlayt.png" alt="MediConnect" className="w-full h-auto brightness-125" />
              </motion.div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              
              <OrbitRing 
                speed={25}
                radius={110}
                stackIcons={[
                  { icon: <DatabaseIcon />, color: "#336791", label: 'PostgreSQL' },
                  { icon: <FingerprintIcon />, color: "#22c55e", label: 'Biometrics' },
                  { icon: <LockIcon />, color: "#E42327", label: 'Encryption' }
                ]}
              />

              <OrbitRing 
                speed={35}
                radius={190}
                stackIcons={[
                  { icon: <LayersIcon />, color: "#61DAFB", label: 'React.js' },
                  { icon: <CpuIcon />, color: "#68A063", label: 'Node.js' },
                  { icon: <Code2Icon />, color: "#3178C6", label: 'TypeScript' },
                  { icon: <CloudIcon />, color: "#FF9900", label: 'AWS Cloud' }
                ]}
              />

              <OrbitRing 
                speed={50}
                radius={280}
                stackIcons={[
                  { icon: <GlobeIcon />, color: "#00b4d8", label: 'Global CDN' },
                  { icon: <ActivityIcon />, color: "#764ABC", label: 'Redux State' },
                  { icon: <DatabaseIcon />, color: "#47A248", label: 'MongoDB' },
                  { icon: <SmartphoneIcon />, color: "#3b82f6", label: 'Mobile Hub' }
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface OrbitRingProps {
  speed: number;
  radius: number;
  stackIcons: { icon: JSX.Element; color: string; label: string }[];
}

function OrbitRing({ speed, radius, stackIcons }: OrbitRingProps) {
  return (
    <div className="absolute flex items-center justify-center pointer-events-none">
      <div 
        className="absolute rounded-full border border-dashed border-border-brand/20"
        style={{ width: radius * 2, height: radius * 2 }}
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        style={{ width: radius * 2, height: radius * 2 }}
        className="relative flex items-center justify-center"
      >
        {stackIcons.map((item, index) => {
          const angle = (index / stackIcons.length) * 360;
          
          return (
            <div
              key={index}
              className="absolute flex items-center justify-center pointer-events-auto"
              style={{
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`
              }}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
                className="relative group/icon flex flex-col items-center"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.2, 
                    borderColor: item.color,
                    color: item.color,
                    boxShadow: `0 0 25px ${item.color}66`,
                    backgroundColor: "rgba(15, 23, 42, 0.95)"
                  }}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-card-bg border border-border-brand flex items-center justify-center text-muted shadow-2xl cursor-pointer backdrop-blur-xl transition-all duration-300"
                >
                  {React.cloneElement(item.icon, { size: 22, strokeWidth: 1.5 })}
                </motion.div>

                <div className="absolute top-[115%] left-1/2 -translate-x-1/2 pointer-events-none z-[100]">
                    <div className="px-3 py-1 bg-slate-950 border border-border-brand text-white text-[10px] font-black uppercase tracking-wider rounded-lg opacity-0 group-hover/icon:opacity-100 transition-all duration-300 transform translate-y-1 group-hover/icon:translate-y-0 shadow-2xl whitespace-nowrap">
                        {item.label}
                    </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}