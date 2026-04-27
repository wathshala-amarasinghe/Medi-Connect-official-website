import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SearchIcon, ChevronDownIcon, MenuIcon, XIcon, PlusIcon, MinusIcon } from "lucide-react";

const navItems = [
  { name: "Platform", hasMegaMenu: true },
  { name: "Industries", hasMegaMenu: true },
  { name: "Resources", hasMegaMenu: true },
  { name: "Company", hasMegaMenu: false },
  { name: "Institute", hasMegaMenu: false },
  { name: "Pricing", hasMegaMenu: false },
];

const megaMenuContent = {
  Platform: [
    { title: "Core Platform", links: ["MediConnect OS", "AI Health Engine", "Data Network"] },
    { title: "Core Modules", links: ["Electronic Medical Records", "Practice Management", "Patient Engagement", "Medical Billing"] },
    { title: "Advanced Tools", links: ["Clinical AI Assistant", "Automation Tools", "Reporting & Analytics", "Interoperability"] },
    { title: "Platform Value", links: ["Security & Compliance", "Integrations", "Marketplace", "Developer API"] },
  ],
  Industries: [
    { title: "Hospital & Clinics", links: ["Multi-Specialty Hospitals", "Outpatient Clinics", "Dental Clinics", "Diagnostic Labs"] },
    { title: "Pharma & Labs", links: ["Pharmaceuticals", "Medical Labs", "Clinical Trials", "R&D"] },
    { title: "Government & NGOs", links: ["Public Health Systems", "NGO Health Initiatives", "Policy Tools"] },
    { title: "Specialized Care", links: ["Telemedicine", "Rehabilitation Centers", "Mental Health"] },
  ],
  Resources: [
    { title: "Documentation", links: ["API Docs", "Integration Guides", "User Manuals", "Release Notes"] },
    { title: "Learning Center", links: ["Tutorials", "Webinars", "Knowledge Base", "Best Practices"] },
    { title: "Community", links: ["Forum", "Events", "Developer Hub", "User Stories"] },
    { title: "Support", links: ["Help Desk", "Contact Support", "Service Status", "FAQs"] },
  ],
} as const;

type MegaMenuKeys = keyof typeof megaMenuContent;

interface HeaderProps {
  pricingRef: React.RefObject<HTMLDivElement>;
  companyRef: React.RefObject<HTMLDivElement>;
}

export function Header({ pricingRef, companyRef }: HeaderProps) {
  const [activeMenu, setActiveMenu] = useState<MegaMenuKeys | null>(null);
  const [activeSearch, setActiveSearch] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const scrollToPricing = () => {
    if (pricingRef.current) {
      pricingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToCompany = () => {
    if (companyRef.current) {
      companyRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b ${
        isScrolled
          ? "bg-slate-900/80 backdrop-blur-xl border-slate-800 shadow-xl"
          : "bg-slate-900 border-transparent shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24 gap-6">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.02 }} 
            className="flex items-center cursor-pointer shrink-0"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img src="https://res.cloudinary.com/dkupkmm4o/image/upload/v1773902554/Medi-Connect-Logo_tdlayt.png" alt="Medi Connect" className="h-8 lg:h-10 w-auto object-contain" />
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-1">
            {navItems.map((item) => {
              const isMegaMenu = item.hasMegaMenu && item.name in megaMenuContent;
              return (
                <div
                  key={item.name}
                  className="relative px-2"
                  onMouseEnter={() => isMegaMenu && setActiveMenu(item.name as MegaMenuKeys)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button
                    onClick={() => {
                      if (item.name === "Company") scrollToCompany();
                      if (item.name === "Pricing") scrollToPricing();
                    }}
                    className="flex items-center gap-1 text-[13px] font-bold uppercase tracking-wider text-slate-300 hover:text-white py-10 transition-colors whitespace-nowrap"
                  >
                    {item.name}
                    {item.hasMegaMenu && (
                      <ChevronDownIcon
                        size={14}
                        className={`transition-transform duration-300 ${activeMenu === item.name ? "text-[var(--brand-red)] rotate-180" : ""}`}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {isMegaMenu && activeMenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-[85%] left-1/2 -translate-x-1/2 min-w-[800px] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-10 grid grid-cols-4 gap-8 overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--brand-red)] opacity-[0.03] blur-3xl pointer-events-none" />
                        {megaMenuContent[item.name as MegaMenuKeys].map((section) => (
                          <div key={section.title}>
                            <h4 className="text-[11px] font-black text-[var(--brand-red)] uppercase tracking-widest mb-6">{section.title}</h4>
                            <ul className="space-y-4">
                              {section.links.map((link) => (
                                <li key={link}>
                                  <a href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-all flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-[2px] bg-[var(--brand-red)] mr-0 group-hover:mr-2 transition-all duration-300" />
                                    {link}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Right Actions (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            {/* Search */}
            <div className="relative flex items-center">
              <AnimatePresence>
                {activeSearch && (
                  <motion.div initial={{ width: 0, opacity: 0 }} animate={{ width: 200, opacity: 1 }} exit={{ width: 0, opacity: 0 }} className="overflow-hidden">
                    <input
                      type="text" autoFocus value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="w-full bg-slate-800 border border-slate-700 text-white text-sm px-4 py-2 rounded-l-xl focus:outline-none"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <button onClick={() => setActiveSearch(!activeSearch)} className={`p-2 transition-colors rounded-r-xl ${activeSearch ? "bg-slate-800 text-[var(--brand-red)]" : "text-slate-400 hover:text-white"}`}>
                {activeSearch ? <XIcon size={20} /> : <SearchIcon size={20} />}
              </button>
            </div>

            {/* Login Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 text-[15px] font-bold text-white px-6 py-3.5 rounded-2xl border border-white/10 hover:border-[var(--brand-red)]/50 hover:bg-white/5 transition-all whitespace-nowrap">
                Login <ChevronDownIcon size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute right-0 mt-3 w-48 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                <a href="#" className="block px-6 py-4 text-sm text-slate-400 hover:bg-slate-800 hover:text-white transition-all border-b border-slate-800">Patient Portal</a>
                <a href="#" className="block px-6 py-4 text-sm text-slate-400 hover:bg-slate-800 hover:text-white transition-all">Platform Portal</a>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-2xl text-[15px] font-bold text-white shadow-lg bg-[var(--brand-red)] transition-all"
              style={{ boxShadow: `0 10px 20px -5px rgba(228, 35, 39, 0.4)` }}
            >
              Request Demo
            </motion.button>
          </div>

          {/* Mobile Menu Icon */}
          <button className="lg:hidden p-2 text-white z-[110]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU CONTENT */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-slate-900 z-[105] flex flex-col"
          >
            <div className="flex-1 overflow-y-auto pt-24 px-6 pb-10 space-y-1">
              {navItems.map((item) => {
                const isExpanded = mobileExpandedItem === item.name;
                const hasSubMenu = item.hasMegaMenu && item.name in megaMenuContent;

                return (
                  <div key={item.name} className="border-b border-slate-800/50 last:border-none">
                    <button
                      className="flex items-center justify-between w-full py-5 text-base font-bold text-slate-300 hover:text-white uppercase tracking-wider transition-colors"
                      onClick={() => {
                        if (hasSubMenu) {
                          setMobileExpandedItem(isExpanded ? null : item.name);
                        } else {
                          if (item.name === "Company") scrollToCompany();
                          if (item.name === "Pricing") scrollToPricing();
                          setIsMobileMenuOpen(false);
                        }
                      }}
                    >
                      {item.name}
                      {hasSubMenu && (
                        isExpanded ? <MinusIcon size={18} className="text-[var(--brand-red)]" /> : <PlusIcon size={18} className="text-slate-500" />
                      )}
                    </button>

                    <AnimatePresence>
                      {hasSubMenu && isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-slate-900/50"
                        >
                          <div className="pb-6 space-y-6 pl-4 border-l border-slate-800 ml-1 mt-2">
                            {megaMenuContent[item.name as MegaMenuKeys].map((section) => (
                              <div key={section.title} className="space-y-3">
                                <h4 className="text-[11px] font-black text-[var(--brand-red)] uppercase tracking-widest opacity-80">
                                  {section.title}
                                </h4>
                                <ul className="space-y-4">
                                  {section.links.map((link) => (
                                    <li key={link}>
                                      <a
                                        href="#"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-[16px] text-slate-400 active:text-white block"
                                      >
                                        {link}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Mobile Actions */}
              <div className="pt-10 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                   <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest ml-1">Portal Login</p>
                   <button className="w-full py-4 text-white font-bold border border-white/10 rounded-xl bg-slate-800/50 text-left px-4 flex justify-between items-center">
                    Patient Portal <PlusIcon size={16} className="opacity-50"/>
                   </button>
                   <button className="w-full py-4 text-white font-bold border border-white/10 rounded-xl bg-slate-800/50 text-left px-4 flex justify-between items-center">
                    Doctor Portal <PlusIcon size={16} className="opacity-50"/>
                   </button>
                </div>
                <button 
                  className="w-full py-4 text-white font-bold rounded-xl shadow-lg mt-2"
                  style={{ backgroundColor: "var(--brand-red)" }}
                >
                  Request Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}