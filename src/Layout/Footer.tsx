import React from "react";
import { TwitterIcon, LinkedinIcon, GithubIcon, MailIcon, PhoneIcon } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  Platform: [
    "MediConnect OS",
    "AI Health Engine",
    "Data Network",
    "Security & Compliance",
    "Developer API"
  ],
  Solutions: [
    "Electronic Medical Records",
    "Practice Management",
    "Patient Engagement",
    "Medical Billing",
    "Telehealth"
  ],
  Industries: [
    "Hospital Systems",
    "Multi-Specialty Groups",
    "Primary Care",
    "Behavioral Health",
    "Urgent Care"
  ],
  Resources: [
    "Clinical Blog",
    "Case Studies",
    "Webinars",
    "Help Center",
    "API Documentation"
  ],
  Company: [
    "About Us",
    "Leadership",
    "Careers",
    "Newsroom",
    "Contact Sales"
  ]
};

export function Footer() {
  const brandRed = "#E42327";

  return (
    <footer className="bg-[#0f172a] pt-24 pb-12 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="mb-8">
              <img
                src="https://res.cloudinary.com/dkupkmm4o/image/upload/v1773902554/Medi-Connect-Logo_tdlayt.png"
                alt="MediConnect Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              The unified healthcare operating system built for modern care delivery. 
              Simplify clinical workflows, automate billing, and improve patient outcomes 
              with surgical precision.
            </p>

            <div className="flex items-center gap-5">
              {[
                { icon: <TwitterIcon size={18} />, href: "#" },
                { icon: <LinkedinIcon size={18} />, href: "https://www.linkedin.com/company/medi-connect1/" },
                { icon: <GithubIcon size={18} />, href: "#" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -3, color: brandRed }}
                  className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h4 className="text-[11px] font-black text-white uppercase tracking-[0.2em] mb-7">
                {category}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 hover:text-white transition-all duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-[2px] bg-red-600 mr-0 group-hover:mr-2 transition-all duration-300" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & Support Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 py-8 border-y border-slate-800/50">
           <div className="flex items-center gap-4 text-slate-400">
              <MailIcon size={18} style={{ color: brandRed }} />
              <span className="text-sm font-medium">pm@mediconnect.com.lk</span>
           </div>
           <div className="flex items-center gap-4 text-slate-400">
              <PhoneIcon size={18} style={{ color: brandRed }} />
              <span className="text-sm font-medium">+94 70 799 3375</span>
           </div>
           <div className="flex items-center lg:justify-end gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">All Systems Operational</span>
           </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
          <p className="text-slate-500 text-[12px] font-medium uppercase tracking-wider">
            © 2026 Medi Connect Private Limited. All rights reserved.
          </p>

          <div className="flex items-center gap-8 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}