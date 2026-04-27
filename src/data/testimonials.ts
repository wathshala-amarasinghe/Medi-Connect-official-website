export interface Testimonial {
  name: string;
  role: string;
  feedback: string;
  image?: string;        
  video?: string;        
  profileImage?: string; 
}

export const testimonials: Testimonial[] = [
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
