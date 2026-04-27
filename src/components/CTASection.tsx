import React, { useRef, FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRightIcon, 
  MapPinIcon, 
  PhoneIcon, 
  MailIcon, 
  ShieldCheckIcon,
  AlertCircleIcon,
  GlobeIcon
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export function CTASection() {
  const formRef = useRef<HTMLFormElement>(null);
  
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const validateForm = (formData: FormData) => {
    const newErrors: { [key: string]: boolean } = {};
    const email = formData.get('user_email') as string;
    const name = formData.get('user_name') as string;
    const org = formData.get('organization') as string;
    const msg = formData.get('message') as string;

    if (!name) newErrors.user_name = true;
    if (!org) newErrors.organization = true;
    if (!msg) newErrors.message = true;
    if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.user_email = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    
    if (!validateForm(formData)) {
      toast.error("Please fill in all fields correctly.", {
        style: { 
          background: "var(--background)", 
          color: "var(--text-main)", 
          border: "1px solid var(--brand-red)" 
        }
      });
      return;
    }

    const loadingToast = toast.loading("Connecting to medical experts...");

    emailjs.sendForm(
      'service_2v40e99',
      'template_44tuhog',
      formRef.current,
      '0QJwOVpS2S-qHZYdO'
    )
    .then(() => {
      toast.dismiss(loadingToast);
      toast.success("Consultation request sent! Our team will contact you shortly.", {
        style: { 
          background: "var(--background)", 
          color: "var(--text-main)", 
          border: "1px solid var(--accent-green)" 
        },
        iconTheme: { primary: "var(--accent-green)", secondary: "#fff" }
      });
      formRef.current?.reset();
      setErrors({});
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      toast.dismiss(loadingToast);
      toast.error(`System Error: ${error.text || "Connection failed"}`, {
        style: { 
          background: "var(--background)", 
          color: "var(--text-main)", 
          border: "1px solid var(--brand-red)" 
        }
      });
    });
  };

  const getInputStyle = (fieldName: string) => `
    w-full bg-slate-900/50 border rounded-2xl px-5 py-4 text-white text-sm transition-all outline-none
    placeholder:text-slate-600 font-body
    ${errors[fieldName] 
      ? "border-red-500 shadow-[0_0_10px_rgba(224,35,39,0.2)]" 
      : "border-slate-700 focus:border-white focus:ring-1 focus:ring-white/20"}
  `;

  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden border-t border-slate-800">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(228,35,39,0.03)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-[0.2em] mb-8 font-body">
              <GlobeIcon size={14} /> Regional Operations
            </div>

            <h2 className="font-heading text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
              Modernize your clinic with <br />
              <span className="text-[var(--brand-red)]">tailored medical tech.</span>
            </h2>

            <div className="relative w-full h-72 bg-slate-800 rounded-[2.5rem] border border-slate-700 overflow-hidden mb-10 group shadow-2xl">
              <iframe 
                src="https://www.google.com/maps?q=93+Kynsey+Rd,+Colombo+08,+Sri+Lanka&output=embed"
                className="absolute inset-0 w-full h-full border-0 opacity-70 grayscale group-hover:grayscale-0 transition-all duration-700 contrast-[1.1]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <span className="relative flex h-16 w-16">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-40"></span>
                  <div className="relative inline-flex rounded-full h-16 w-16 bg-red-600 border-4 border-slate-900 items-center justify-center text-white shadow-2xl">
                    <MapPinIcon size={24} />
                  </div>
                </span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 font-body">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[var(--brand-red)] shrink-0 shadow-lg">
                  <MapPinIcon size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Corporate HQ</p>
                  <p className="text-sm text-slate-300 font-bold leading-relaxed">No 93, Kynsey Rd, <br /> Colombo 08, Sri Lanka</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[var(--brand-red)] shrink-0 shadow-lg">
                  <PhoneIcon size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Technical Support</p>
                  <p className="text-sm text-slate-300 font-bold leading-relaxed">+94 70 799 3375 <br /> Available 24/7 for Clients</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 rounded-[2rem] bg-slate-800/30 border border-slate-700/50 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-[var(--accent-green)] shrink-0">
                <ShieldCheckIcon size={20} />
              </div>
              <div>
                <p className="text-xs text-white font-bold mb-1 font-heading">AES-256 Enterprise Security</p>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed font-body">
                  Your data is protected by AES-256 encryption and is fully HIPAA & GDPR compliant. We ensure total clinical privacy.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800/40 backdrop-blur-2xl rounded-[3rem] border border-slate-700 p-8 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
          >
            <div className="mb-10">
              <h3 className="font-heading text-2xl font-bold text-white mb-2">Talk to a Solutions Expert</h3>
              <p className="font-body text-slate-400 text-sm">Find the perfect software module for your healthcare organization.</p>
            </div>

            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2 flex justify-between font-body">
                    Full Name {errors.user_name && <AlertCircleIcon size={12} className="text-red-500" />}
                  </label>
                  <input type="text" name="user_name" placeholder="Dr. Sunil Perera" className={getInputStyle('user_name')} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2 flex justify-between font-body">
                    Hospital/Clinic {errors.organization && <AlertCircleIcon size={12} className="text-red-500" />}
                  </label>
                  <input type="text" name="organization" placeholder="Organization Name" className={getInputStyle('organization')} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2 flex justify-between font-body">
                  Work Email {errors.user_email && <AlertCircleIcon size={12} className="text-red-500" />}
                </label>
                <div className="relative">
                  <input type="email" name="user_email" placeholder="contact@medical-center.com" className={getInputStyle('user_email')} />
                  <MailIcon size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-600" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2 flex justify-between font-body">
                  Clinical Requirements {errors.message && <AlertCircleIcon size={12} className="text-red-500" />}
                </label>
                <textarea name="message" rows={4} placeholder="E.g. ERP, Billing, Patient Portal needs..." className={getInputStyle('message') + " resize-none"}></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 rounded-2xl text-white font-black uppercase tracking-[0.2em] text-xs transition-all shadow-xl flex items-center justify-center gap-3 group font-heading"
                style={{ 
                  backgroundColor: "var(--brand-red)",
                  boxShadow: `0 15px 30px -5px rgba(228, 35, 39, 0.4)` 
                }}
              >
                Launch Consultation 
                <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}