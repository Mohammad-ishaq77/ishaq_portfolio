import React, { useState, useContext, createContext, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  FaGithub, FaLinkedin, FaEnvelope, 
  FaCode, FaFileDownload, FaArrowRight, FaMapMarkerAlt,
  FaSun, FaMoon, FaBars, FaTimes, FaDatabase, FaServer,
  FaExternalLinkAlt, FaChevronDown
} from 'react-icons/fa';
import { 
  SiCplusplus, SiHtml5, SiCss3, SiJavascript, 
  SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiExpress, 
  SiPostman, SiRedux, SiGit, SiFigma
} from 'react-icons/si';

// --- THEME CONTEXT ---
const ThemeContext = createContext();

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "backOut" } }
};

// --- DATA CONFIGURATION ---
const personalDetails = {
  name: "Mohammad Ishaq",
  tagline: "Full Stack Developer & UI/UX Enthusiast",
  email: "khanishaqk88@gmail.com",
  location: "Kashmir, India",
  linkedinUrl: "https://linkedin.com/in/mohammad-ishaq-khan-97970030a", 
  githubUrl: "https://github.com/Mohammad-ishaq77", 
  resumeLink: "/Mohammad_Ishaq%20Khan_FlowCV_Resume.pdf", 
  profileImg: "/profile.jpeg",
};

const skills = [
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500", bg: "bg-green-500/10" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-100", bg: "bg-gray-500/10" },
  { name: "React", icon: SiReact, color: "text-blue-400", bg: "bg-cyan-500/10" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500", bg: "bg-green-500/10" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-teal-400", bg: "bg-teal-500/10" },
  { name: "SQL", icon: FaDatabase, color: "text-blue-400", bg: "bg-blue-500/10" },
  { name: "C/C++", icon: SiCplusplus, color: "text-blue-600", bg: "bg-blue-600/10" },
  { name: "Git/GitHub", icon: SiGit, color: "text-cyan-500", bg: "bg-cyan-500/10" },
  { name: "Postman", icon: SiPostman, color: "text-cyan-500", bg: "bg-cyan-500/10" },
];

const education = [
  {
    institution: "GCET Kashmir",
    degree: "B.Tech Computer Science",
    year: "2022 - 2026",
    desc: "Specializing in Software Engineering, Database Systems, and Advanced Web Technologies.",
    
  },
  {
    institution: "Govt. Higher Secondary",
    degree: "Higher Secondary (Science)",
    year: "2020 - 2022",
    desc: "Major in Physics, Chemistry, Mathematics with Computer Science.",
    
  },
];

const projects = [
  {
    title: "NotesVault",
    desc: "Secure cloud-based notes management with real-time sync, rich text editing, and collaborative features.",
    tags: ["MERN", "Socket.io", "JWT", "Redux"],
    link: "https://notesvaultapp.vercel.app/",
    image: "/notesvault.png",
    featured: true
  },
  {
    title: "Office Management System",
    desc: "Enterprise dashboard for employee tracking, task management, and analytics with role-based access.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    link: "https://o-management.vercel.app/",
    image: "/OM.jpg",
    featured: true
  },
  {
    title: "ShopSphere",
    desc: "Basic ecommerce application with product browsing, cart flow, and a clean shopping experience.",
    tags: ["React", "Ecommerce", "Cart", "Tailwind"],
    link: "https://shopsphere-frontend-kppz.vercel.app/",
    image: "/e_commerce.jpg",
    featured: false
  },
];

// --- COMPONENTS ---

const AnimatedBackground = () => {
  const { isDark } = useContext(ThemeContext);
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base Gradient */}
      <div className={`absolute inset-0 transition-colors duration-700 ${
        isDark 
          ? 'bg-black' 
          : 'bg-slate-50'
      }`} />
      
      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className={`absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-30 ${
            isDark ? 'bg-blue-600' : 'bg-blue-400'
          }`}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className={`absolute top-1/2 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            isDark ? 'bg-blue-700' : 'bg-blue-500'
          }`}
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className={`absolute -bottom-40 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            isDark ? 'bg-cyan-600' : 'bg-cyan-400'
          }`}
        />
      </div>

      {/* Grid Pattern */}
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]`} />
      
      {/* Radial Gradient Overlay */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950' 
          : 'bg-gradient-to-b from-transparent via-slate-50/50 to-slate-50'
      }`} />
    </div>
  );
};

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 origin-left z-[60]"
      style={{ scaleX }}
    />
  );
};

const Navbar = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? isDark 
              ? 'bg-black/85 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
              : 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                I
              </div>
              <span className={`font-bold text-xl tracking-tight ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Er Ishaq
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((item, index) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  offset={-80}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors cursor-pointer group ${
                    isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-500 group-hover:w-1/2 transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className={`p-2.5 rounded-xl transition-all ${
                  isDark 
                    ? 'bg-white/5 text-yellow-400 hover:bg-white/10' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
              </motion.button>

              <motion.a
                href={personalDetails.resumeLink}
                download="Mohammad_Ishaq_Khan_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
              >
                <FaFileDownload size={16} />
                Resume
              </motion.a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden p-2 rounded-lg ${isDark ? 'text-white' : 'text-gray-900'}`}
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed inset-x-0 top-20 z-40 md:hidden ${
              isDark ? 'bg-black/95 backdrop-blur-xl' : 'bg-white/95 backdrop-blur-xl'
            } border-b ${isDark ? 'border-white/10' : 'border-gray-200'}`}
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isDark 
                      ? 'text-gray-300 hover:bg-white/5 hover:text-white' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  const { isDark } = useContext(ThemeContext);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center lg:text-left z-10"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500">
                {personalDetails.name.split(' ')[0]}
              </span>
              <br />
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                {personalDetails.name.split(' ').slice(1).join(' ')}
              </span>
            </motion.h1>

            <motion.h2 
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-gray-400 mb-8 font-light"
            >
              {personalDetails.tagline}
            </motion.h2>

            <motion.p 
              variants={fadeInUp}
              className={`text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Final-year Computer Science student crafting digital experiences with modern web technologies. 
              Passionate about building scalable applications that make a difference.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
              <Link to="projects" smooth={true} offset={-80}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl font-semibold shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all flex items-center gap-3"
                >
                  View Projects
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              
              <Link to="contact" smooth={true} offset={-80}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 rounded-2xl font-semibold border-2 transition-all ${
                    isDark 
                      ? 'border-white/20 text-white hover:bg-white/5' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Get in Touch
                </motion.button>
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-6 justify-center lg:justify-start">
              {[
                { icon: FaGithub, href: personalDetails.githubUrl, label: "GitHub" },
                { icon: FaLinkedin, href: personalDetails.linkedinUrl, label: "LinkedIn" },
                { icon: FaEnvelope, href: `mailto:${personalDetails.email}`, label: "Email" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-xl transition-all ${
                    isDark 
                      ? 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10' 
                      : 'bg-gray-100 text-gray-600 hover:text-blue-500 hover:bg-blue-950/40'
                  }`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ 
                x: mousePosition.x, 
                y: mousePosition.y 
              }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              className="relative"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full blur-3xl opacity-30 scale-110" />
              
              {/* Main Image Container */}
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full p-1 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500">
                <div className={`w-full h-full rounded-full overflow-hidden ${
                  isDark ? 'bg-neutral-950' : 'bg-white'
                }`}>
                  <img 
                    src={personalDetails.profileImg} 
                    alt="Profile" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute -top-4 -right-4 px-4 py-2 rounded-2xl backdrop-blur-xl border shadow-xl ${
                  isDark 
                    ? 'bg-neutral-950/80 border-white/10 text-white' 
                    : 'bg-white/80 border-gray-200 text-gray-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  <SiReact className="text-blue-400 animate-spin-slow" size={20} />
                  <span className="font-semibold text-sm">React</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className={`absolute -bottom-4 -left-4 px-4 py-2 rounded-2xl backdrop-blur-xl border shadow-xl ${
                  isDark 
                    ? 'bg-neutral-950/80 border-white/10 text-white' 
                    : 'bg-white/80 border-gray-200 text-gray-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  <SiNodedotjs className="text-green-500" size={20} />
                  <span className="font-semibold text-sm">Node.js</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <FaChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};

const SectionHeading = ({ title, subtitle, align = "center" }) => {
  const { isDark } = useContext(ThemeContext);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-16 ${align === 'center' ? 'text-center' : ''}`}
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium mb-4"
      >
        {subtitle}
      </motion.span>
      <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      <div className="mt-4 flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full" />
      </div>
    </motion.div>
  );
};

const About = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="Education & Journey" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className={`p-8 rounded-3xl border backdrop-blur-xl ${
              isDark 
                ? 'bg-white/5 border-white/10' 
                : 'bg-white border-gray-200 shadow-xl'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Quick Facts
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Years Coding", value: "3+" },
                  { label: "Projects", value: "15+" },
                  { label: "Technologies", value: "12+" },
                  { label: "Coffee/Day", value: "∞" }
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-2xl bg-gradient-to-br from-blue-950/5 to-neutral-950/5 border border-blue-500/10">
                    <div className="text-3xl font-bold text-blue-500 mb-1">{stat.value}</div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className={`relative p-6 rounded-2xl border transition-all group ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-blue-500/50' 
                    : 'bg-white border-gray-200 shadow-lg hover:shadow-xl hover:border-blue-500/30'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {edu.institution}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-semibold">
                    {edu.grade}
                  </span>
                </div>
                <p className="text-blue-500 font-medium mb-2">{edu.degree}</p>
                <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {edu.desc}
                </p>
                <div className={`text-xs font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                  {edu.year}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Tech Stack" subtitle="Technologies I Work With" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ 
                scale: 1.1, 
                rotateY: 10,
                transition: { type: "spring", stiffness: 300 }
              }}
              className={`group relative p-6 rounded-2xl border backdrop-blur-sm transition-all cursor-pointer ${
                isDark 
                  ? 'bg-white/5 border-white/10 hover:border-white/20' 
                  : 'bg-white border-gray-200 hover:shadow-xl hover:border-blue-500/30'
              }`}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.bg} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative flex flex-col items-center gap-3">
                <skill.icon className={`text-4xl ${skill.color} transition-transform group-hover:scale-110`} />
                <span className={`font-semibold text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

const Projects = () => {
  const { isDark } = useContext(ThemeContext);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Projects" subtitle="Some Things I've Built" />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative rounded-3xl overflow-hidden border transition-all duration-500 ${
                isDark 
                  ? 'bg-white/5 border-white/10 hover:border-blue-500/50' 
                  : 'bg-white border-gray-200 hover:shadow-2xl hover:border-blue-500/30'
              } ${project.featured ? 'md:col-span-2' : ''}`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${project.featured ? 'h-64 md:h-80' : 'h-48'}`}>
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  isDark ? 'from-slate-950 via-slate-950/50 to-transparent' : 'from-white via-white/50 to-transparent'
                } z-10 opacity-60`} />
                
                {project.image ? (
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center ${
                    isDark ? 'bg-neutral-950' : 'bg-gray-100'
                  }`}>
                    <FaCode size={48} className="text-gray-600" />
                  </div>
                )}

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-bold shadow-lg">
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="relative z-20 p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className={`p-2 rounded-xl transition-colors ${
                      isDark ? 'bg-white/10 text-white hover:bg-blue-500' : 'bg-gray-100 text-gray-600 hover:bg-blue-500 hover:text-white'
                    }`}
                  >
                    <FaExternalLinkAlt size={18} />
                  </motion.a>
                </div>

                <p className={`mb-6 line-clamp-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDark 
                          ? 'bg-white/5 text-gray-300 border border-white/10' 
                          : 'bg-gray-100 text-gray-600 border border-gray-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href={personalDetails.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border transition-all ${
              isDark 
                ? 'border-white/20 text-white hover:bg-white/5' 
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <FaGithub size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-1"
        >
          <div className={`relative rounded-[2.3rem] p-8 md:p-16 text-center overflow-hidden ${
            isDark ? 'bg-black/90' : 'bg-white/95'
          }`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
            </div>

            <div className="relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`text-4xl md:text-6xl font-bold mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                Let's Build Something{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                  Amazing
                </span>
                {' '}Together
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`text-lg mb-10 max-w-2xl mx-auto ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
                I'll try my best to get back to you!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              >
                <motion.a
                  href={`mailto:${personalDetails.email}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl font-semibold shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-3"
                >
                  <FaEnvelope size={20} />
                  Send Email
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href={personalDetails.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 rounded-2xl font-semibold border-2 transition-all flex items-center justify-center gap-3 ${
                    isDark 
                      ? 'border-white/20 text-white hover:bg-white/5' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <FaLinkedin size={20} />
                  LinkedIn
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center gap-2 text-gray-500"
              >
                <FaMapMarkerAlt className="text-blue-500" />
                <span>{personalDetails.location}</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { isDark } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-8 border-t ${
      isDark ? 'border-white/10 bg-black' : 'border-gray-200 bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
            © {currentYear} {personalDetails.name}. Crafted with React, Tailwind & Framer Motion.
          </p>
          
          <div className="flex items-center gap-6">
            {[
              { icon: FaGithub, href: personalDetails.githubUrl },
              { icon: FaLinkedin, href: personalDetails.linkedinUrl },
              { icon: FaEnvelope, href: `mailto:${personalDetails.email}` }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className={`transition-colors ${
                  isDark ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-gray-900'
                }`}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={`relative min-h-screen font-sans antialiased selection:bg-blue-500/30 ${
        isDark ? 'bg-black text-gray-200' : 'bg-slate-50 text-gray-800'
      }`}>
        <AnimatedBackground />
        <ScrollProgress />
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;


