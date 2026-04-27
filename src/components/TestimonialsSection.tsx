import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon, XIcon, PlayIcon, QuoteIcon } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  feedback: string;
  image?: string;        
  video?: string;        
  profileImage?: string; 
}

const testimonials: Testimonial[] = [
  {
    name: "Dr. Sarah Johnson",
    role: "Chief Medical Officer",
    feedback: "MediConnect transformed our hospital workflow. Patient data is now seamless across departments, saving hours every day.",
    video: "https://res.cloudinary.com/dkupkmm4o/video/upload/v1773902656/video-4_duf2wf.mp4",
    image: "/testimonial-1.jpg",
    profileImage: "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg",
  },
  {
    name: "James Lee",
    role: "Practice Manager",
    feedback: "The AI insights from MediConnect help us reduce claim denials and optimize revenue management in real-time.",
    image: "https://res.cloudinary.com/dkupkmm4o/image/upload/v1773902538/Image-4_j1uxws.jpg",
    profileImage: "https://artriva.com/media/k2/galleries/20/guy_port.jpg",
  },
  {
    name: "Emily Chen",
    role: "Pharmaceutical Lead",
    feedback: "MediConnect's interoperability features made collaborating with labs and government health systems effortless.",
    video: "https://res.cloudinary.com/dkupkmm4o/video/upload/v1773902615/video-3_b5y3sz.mp4",
    image: "/testimonial-3.jpg",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY9b_u54JNRxi87Sk4eVhIzrB3B8AJAWMNqw&s",
  },
  {
    name: "Dr. Mark Wilson",
    role: "Hospital Director",
    feedback: "The platform's analytics helped us improve patient engagement and reduce operational bottlenecks.",
    image: "/testimonial-4.jpg",
    profileImage: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Linda Torres",
    role: "Clinic Manager",
    feedback: "MediConnect simplified our scheduling and automated billing, saving us hours of manual work.",
    video: "https://res.cloudinary.com/dkupkmm4o/video/upload/v1773902606/video-2_cgobhf.mp4",
    image: "/testimonial-5.jpg",
    profileImage: "https://files.idyllic.app/files/static/3929122?width=256&optimizer=image",
  },
  {
    name: "Alex Kim",
    role: "Pharma Consultant",
    feedback: "Collaborating with labs and hospitals has never been easier. MediConnect ensures compliance and security.",
    image: "/testimonial-6.jpg",
    profileImage: "https://images.squarespace-cdn.com/content/v1/5f89ac532007455a7aaf0e44/1628074274915-RWWVIJE43YP0M83RK93D/Headshot+photograph+for+a+female+business+professional%27s+LinkedIn+profile%2C+grey+background+-+photographed+on+location_1.jpg",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVideo, setModalVideo] = useState<string | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setCardsPerPage(3);
      else if (window.innerWidth >= 768) setCardsPerPage(2);
      else setCardsPerPage(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? (totalPages - 1) * cardsPerPage : prev - cardsPerPage
    );

  const nextSlide = () =>
    setCurrentIndex((prev) =>
      prev + cardsPerPage >= testimonials.length ? 0 : prev + cardsPerPage
    );

  const openModal = (video?: string) => {
    if (video) {
      setModalVideo(video);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalVideo(null);
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + cardsPerPage
  );

  return (
    <section className="relative py-32 bg-slate-900 overflow-hidden border-t border-slate-800">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--brand-red)] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-[1px] bg-[var(--brand-red)]" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
                Voices of Excellence
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Trusted by <span className="text-[var(--brand-red)]">Industry Leaders.</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Real feedback from the professionals who are shaping the future of healthcare delivery.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="p-4 rounded-full border border-slate-700 bg-slate-800/50 text-white hover:border-[var(--brand-red)] transition-all shadow-xl group backdrop-blur-sm"
            >
              <ChevronLeftIcon size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="p-4 rounded-full border border-slate-700 bg-slate-800/50 text-white hover:border-[var(--brand-red)] transition-all shadow-xl group backdrop-blur-sm"
            >
              <ChevronRightIcon size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {visibleTestimonials.map((testimonial, idx) => (
              <motion.div
                key={`${currentIndex}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -10 }}
                className="relative group rounded-[2.5rem] border border-slate-800 bg-slate-800/30 backdrop-blur-xl p-8 flex flex-col hover:border-[var(--brand-red)]/30 transition-all duration-500 cursor-pointer animate-float"
                style={{ animationDelay: `${idx * 0.2}s` }}
                onClick={() => testimonial.video && openModal(testimonial.video)}
              >
                {/* Main Media */}
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-8 border border-slate-700/50 bg-slate-950 shadow-inner">
                  {testimonial.video ? (
                    <>
                      <video
                        src={testimonial.video}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700"
                        muted
                        loop
                        playsInline
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause();
                          e.currentTarget.currentTime = 0;
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-12 h-12 rounded-full bg-[var(--brand-red)] flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform">
                          <PlayIcon size={20} fill="currentColor" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="relative flex-1 flex flex-col">
                  <div className="relative mb-8">
                    <QuoteIcon size={32} className="text-[var(--brand-red)] opacity-20 absolute -top-4 -left-2 rotate-180" />
                    <p className="text-slate-300 leading-relaxed relative z-10 italic pl-6">
                      "{testimonial.feedback}"
                    </p>
                  </div>

                  {/* Profile */}
                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-700/50">
                    <div className="relative shrink-0">
                      <div className="w-12 h-12 rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 flex items-center justify-center shadow-lg">
                        {testimonial.profileImage ? (
                          <img
                            src={testimonial.profileImage}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-white font-bold text-sm">
                            {testimonial.name.charAt(0)}
                          </span>
                        )}
                      </div>
                      <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[var(--brand-red)] rounded-full border-2 border-slate-900 shadow-sm animate-status-red" />
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="font-bold text-white truncate transition-colors group-hover:text-[var(--brand-red)]">
                        {testimonial.name}
                      </h4>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 truncate">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isModalOpen && modalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-md flex items-center justify-center z-[100] p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative max-w-5xl w-full bg-black rounded-[2rem] overflow-hidden shadow-2xl border border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-20 bg-[var(--brand-red)] text-white p-2.5 rounded-full shadow-xl hover:brightness-110 transition-all"
              >
                <XIcon size={20} />
              </button>
              <video ref={modalVideoRef} src={modalVideo} controls autoPlay className="w-full aspect-video" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}