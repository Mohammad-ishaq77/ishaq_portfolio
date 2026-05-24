import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-scroll';
import * as FramerMotion from 'framer-motion';
import {
  FaArrowRight,
  FaBars,
  FaChevronUp,
  FaCode,
  FaEnvelope,
  FaExternalLinkAlt,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaMoon,
  FaSun,
  FaTimes,
} from 'react-icons/fa';
import {
  SiExpress,
  SiFigma,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si';

const ThemeContext = createContext();
const { motion, useScroll, useSpring } = FramerMotion;
void motion;

const personalDetails = {
  name: 'Mohammad Ishaq',
  role: 'Full Stack Developer',
  tagline: 'I build fast, polished web products with thoughtful interfaces and reliable MERN architecture.',
  email: 'khanishaqk88@gmail.com',
  location: 'Kashmir, India',
  linkedinUrl: 'https://linkedin.com/in/mohammad-ishaq-khan-97970030a',
  githubUrl: 'https://github.com/Mohammad-ishaq77',
  resumeLink: '/Mohammad_Ishaq%20Khan_FlowCV_Resume.pdf',
  profileImg: '/profile.jpeg',
};

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const skills = [
  { name: 'React', icon: SiReact, desc: 'Reusable interfaces, stateful flows, and smooth SPA experiences.' },
  { name: 'Node.js', icon: SiNodedotjs, desc: 'REST APIs, authentication, and server-side business logic.' },
  { name: 'MongoDB', icon: SiMongodb, desc: 'Flexible schemas, aggregation, and production-ready data models.' },
  { name: 'Express.js', icon: SiExpress, desc: 'Clean routing, middleware, and backend service structure.' },
  { name: 'JavaScript', icon: SiJavascript, desc: 'Modern ES syntax, browser APIs, async flows, and tooling.' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, desc: 'Responsive systems with sharp visual consistency.' },
  { name: 'Git/GitHub', icon: SiGit, desc: 'Version control, collaboration, and deployment workflows.' },
];

const education = [
  {
    institution: 'GCET Kashmir',
    degree: 'B.Tech Computer Science',
    year: '2022 - 2026',
    desc: 'Focused on software engineering, database systems, and full stack web development.',
  },
  {
    institution: 'Govt. Higher Secondary',
    degree: 'Higher Secondary (Science)',
    year: '2020 - 2022',
    desc: 'Physics, Chemistry, Mathematics, and Computer Science foundation.',
  },
];

const services = [
  {
    title: 'Frontend Engineering',
    icon: SiReact,
    desc: 'Responsive React experiences with polished motion, reusable UI, and performance-minded structure.',
    stack: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Backend Development',
    icon: SiNodedotjs,
    desc: 'API-first backend systems with authentication, data models, and practical deployment patterns.',
    stack: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Interface Design',
    icon: SiFigma,
    desc: 'Clean product screens, visual hierarchy, and modern developer-focused portfolio design.',
    stack: ['UI/UX', 'Figma', 'Responsive'],
  },
];

const projects = [
  {
    title: 'NotesVault',
    desc: 'Secure cloud-based notes management with real-time sync, rich text editing, and collaborative features.',
    tags: ['MERN', 'Socket.io', 'JWT', 'Redux'],
    link: 'https://notesvaultapp.vercel.app/',
    github: personalDetails.githubUrl,
    image: '/notesvault.png',
  },
  {
    title: 'Office Management System',
    desc: 'Enterprise dashboard for employee tracking, task management, analytics, and role-based access.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    link: 'https://o-management.vercel.app/',
    github: personalDetails.githubUrl,
    image: '/OM.jpg',
  },
  {
    title: 'ShopSphere',
    desc: 'Ecommerce interface with product browsing, cart flow, and a clean shopping experience.',
    tags: ['React', 'Ecommerce', 'Cart', 'Tailwind'],
    link: 'https://shopsphere-frontend-kppz.vercel.app/',
    github: personalDetails.githubUrl,
    image: '/e_commerce.jpg',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const GlowBackground = () => {
  const { isDark } = useContext(ThemeContext);

  return (
  <div className={`fixed inset-0 -z-10 overflow-hidden ${isDark ? 'bg-[#020617]' : 'bg-[#f8fafc]'}`}>
    <div className={`absolute inset-0 ${
      isDark
        ? 'bg-[radial-gradient(circle_at_18%_16%,rgba(16,185,129,0.22),transparent_30%),radial-gradient(circle_at_78%_12%,rgba(245,158,11,0.16),transparent_32%),radial-gradient(circle_at_50%_86%,rgba(20,184,166,0.18),transparent_34%)]'
        : 'bg-[radial-gradient(circle_at_18%_16%,rgba(16,185,129,0.18),transparent_30%),radial-gradient(circle_at_78%_12%,rgba(245,158,11,0.16),transparent_32%),radial-gradient(circle_at_50%_86%,rgba(20,184,166,0.14),transparent_34%)]'
    }`} />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />
    <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-[#020617]/20 via-[#020617]/70 to-[#020617]' : 'bg-gradient-to-b from-white/20 via-white/55 to-slate-50'}`} />
  </div>
  );
};

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-emerald-300 via-teal-300 to-amber-300"
    />
  );
};

const SectionHeading = ({ eyebrow, title, subtitle }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.35 }}
    className="mx-auto mb-12 max-w-3xl text-center"
  >
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">{eyebrow}</p>
    <h2 className="text-3xl font-black text-white sm:text-5xl">{title}</h2>
    <p className="mt-4 text-base leading-8 text-slate-400 sm:text-lg">{subtitle}</p>
  </motion.div>
);

const NeonButton = ({ href, children, variant = 'primary', icon: Icon, download }) => {
  const base = 'group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300';
  const styles =
    variant === 'primary'
      ? 'bg-emerald-300 text-slate-950 shadow-[0_0_32px_rgba(16,185,129,0.28)] hover:bg-amber-200 hover:shadow-[0_0_42px_rgba(245,158,11,0.28)]'
      : 'border border-emerald-300/30 bg-white/5 text-emerald-100 backdrop-blur-xl hover:border-amber-200 hover:bg-emerald-300/10 hover:text-white';

  return (
    <motion.a href={href} download={download} whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`${base} ${styles}`}>
      {Icon && <Icon className="text-base" />}
      {children}
      {variant === 'primary' && <FaArrowRight className="transition-transform group-hover:translate-x-1" />}
    </motion.a>
  );
};

const Navbar = () => {
  const { activeSection, isDark, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border px-4 shadow-2xl backdrop-blur-2xl transition-all duration-300 ${
          scrolled ? 'border-emerald-300/25 bg-slate-950/70 shadow-emerald-950/40' : 'border-white/10 bg-white/5'
        }`}
      >
        <Link to="home" smooth duration={600} offset={-96} className="flex cursor-pointer items-center gap-3">
          <span className="rounded-full border border-emerald-300/35 bg-emerald-300/10 px-4 py-2 text-sm font-black text-emerald-100 shadow-[0_0_24px_rgba(16,185,129,0.2)]">
            Mohammad Ishaq
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth
              spy
              duration={650}
              offset={-90}
              className={`relative cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                activeSection === item.toLowerCase() ? 'text-slate-950' : 'text-slate-300 hover:text-white'
              }`}
            >
              {activeSection === item.toLowerCase() && (
                <motion.span layoutId="active-nav" className="absolute inset-0 rounded-full bg-emerald-300 shadow-[0_0_24px_rgba(16,185,129,0.42)]" />
              )}
              <span className="relative">{item}</span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-emerald-300/40 hover:bg-emerald-300/10"
            aria-label="Toggle color mode"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-3 max-w-6xl rounded-[28px] border border-emerald-300/20 bg-slate-950/90 p-3 shadow-2xl shadow-emerald-950/40 backdrop-blur-2xl md:hidden"
        >
          {navLinks.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth
              duration={650}
              offset={-90}
              onClick={() => setOpen(false)}
              className="block cursor-pointer rounded-2xl px-4 py-3 font-semibold text-slate-200 hover:bg-emerald-300/10 hover:text-emerald-200"
            >
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
};

const Hero = () => (
  <section id="home" className="relative min-h-screen px-4 pb-20 pt-28 sm:px-6 lg:px-8">
    <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.82fr]">
      <motion.div variants={stagger} initial="hidden" animate="visible" className="relative z-10">
        <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-300/20 bg-white/5 px-4 py-2 text-sm font-semibold text-emerald-200 backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(16,185,129,0.9)]" />
          Available for frontend and MERN work
        </motion.div>

        <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-emerald-200 via-teal-200 to-amber-200 bg-clip-text text-transparent">
            my portfolio
          </span>
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
          Hi, I am {personalDetails.name}, a {personalDetails.role} from {personalDetails.location}. {personalDetails.tagline}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row">
          <NeonButton href="#projects" icon={FaCode}>View Projects</NeonButton>
          <NeonButton href={personalDetails.resumeLink} icon={FaFileDownload} variant="secondary" download>
            Download Resume
          </NeonButton>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4">
          {[
            { href: personalDetails.githubUrl, icon: FaGithub, label: 'GitHub' },
            { href: personalDetails.linkedinUrl, icon: FaLinkedin, label: 'LinkedIn' },
            { href: `mailto:${personalDetails.email}`, icon: FaEnvelope, label: 'Email' },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.05 }}
              className="grid h-12 w-12 place-items-center rounded-full border border-emerald-300/20 bg-white/5 text-emerald-100 backdrop-blur-xl transition-all hover:border-amber-200 hover:bg-emerald-300/10 hover:shadow-[0_0_24px_rgba(16,185,129,0.24)]"
              aria-label={social.label}
            >
              <social.icon />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.25 }} className="relative mx-auto w-full max-w-sm lg:max-w-md">
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative rounded-[34px] border border-emerald-300/25 bg-white/10 p-3 shadow-[0_0_70px_rgba(16,185,129,0.18)] backdrop-blur-2xl"
        >
          <div className="absolute -inset-1 rounded-[38px] bg-gradient-to-br from-emerald-300/30 via-teal-500/20 to-amber-300/25 blur-xl" />
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950">
            <img src={personalDetails.profileImg} alt={personalDetails.name} className="aspect-[4/5] w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">Developer Portfolio</p>
              <p className="mt-2 text-2xl font-black text-white">{personalDetails.role}</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-8 left-4 rounded-3xl border border-amber-300/25 bg-slate-950/85 px-5 py-4 text-white shadow-[0_0_34px_rgba(245,158,11,0.2)] backdrop-blur-xl sm:-bottom-10 sm:-left-4"
        >
          <p className="text-3xl font-black text-emerald-200">7+</p>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Core Skills</p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="About"
        title="Built for clean products and confident execution"
        subtitle="I combine frontend polish with backend structure, turning ideas into complete web experiences that feel smooth, focused, and useful."
      />

      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div variants={fadeUp} className="rounded-[32px] border border-white/10 bg-white/[0.07] p-8 shadow-2xl shadow-emerald-950/30 backdrop-blur-2xl">
            <h3 className="text-2xl font-black text-white">A practical builder with a visual edge</h3>
            <p className="mt-4 leading-8 text-slate-300">
              I enjoy building interfaces that look premium but still stay usable. My work leans toward responsive React screens,
              MERN applications, clean APIs, and small details that make a product feel more alive.
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              My current focus is building developer-friendly apps with strong UI, clean component structure, and reliable backend
              integration.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {education.map((item) => (
              <motion.article key={item.degree} variants={fadeUp} className="rounded-[28px] border border-emerald-300/15 bg-slate-950/55 p-6 shadow-xl shadow-emerald-950/20 backdrop-blur-xl">
                <p className="text-sm font-bold text-emerald-200">{item.year}</p>
                <h4 className="mt-3 text-xl font-black text-white">{item.degree}</h4>
                <p className="mt-1 font-semibold text-amber-100">{item.institution}</p>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.desc}</p>
              </motion.article>
            ))}
          </div>
      </motion.div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="px-4 py-24 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Skills"
        title="Services and tech stack"
        subtitle="A developer-focused skill surface with glowing cards, strong hierarchy, and responsive spacing."
      />

      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10 grid gap-6 lg:grid-cols-3">
        {services.map((service) => (
          <motion.article
            key={service.title}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className="group rounded-[30px] border border-emerald-300/15 bg-white/[0.07] p-7 shadow-2xl shadow-emerald-950/20 backdrop-blur-2xl transition-all duration-300 hover:border-amber-200/50 hover:shadow-[0_0_46px_rgba(16,185,129,0.18)]"
          >
            <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-emerald-300/15 to-amber-300/15 text-2xl text-emerald-200">
              <service.icon />
            </div>
            <h3 className="text-2xl font-black text-white">{service.title}</h3>
            <p className="mt-4 leading-7 text-slate-400">{service.desc}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {service.stack.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-emerald-100">
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <motion.article
            key={skill.name}
            variants={fadeUp}
            whileHover={{ y: -6, scale: 1.01 }}
            className="group rounded-[24px] border border-white/10 bg-slate-950/55 p-5 backdrop-blur-xl transition-all hover:border-emerald-300/45 hover:bg-emerald-300/5"
          >
            <skill.icon className="text-3xl text-emerald-200 transition-transform group-hover:scale-110" />
            <h4 className="mt-4 text-lg font-black text-white">{skill.name}</h4>
            <p className="mt-2 text-sm leading-6 text-slate-400">{skill.desc}</p>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Projects"
        title="Project showcase"
        subtitle="Project cards keep the glowing visual language while giving screenshots, stacks, and calls to action enough room to breathe."
      />

      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex snap-x gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className="group min-w-[86%] snap-center overflow-hidden rounded-[32px] border border-emerald-300/15 bg-white/[0.07] shadow-2xl shadow-emerald-950/25 backdrop-blur-2xl transition-all duration-300 hover:border-amber-200/50 sm:min-w-[420px] lg:min-w-0"
          >
            <div className="relative overflow-hidden">
              <img src={project.image} alt={project.title} className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-black text-white">{project.title}</h3>
              <p className="mt-3 min-h-24 leading-7 text-slate-400">{project.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-emerald-300/15 bg-emerald-300/5 px-3 py-1 text-xs font-bold text-emerald-100">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-emerald-300 px-4 py-3 text-sm font-black text-slate-950 transition hover:bg-amber-200">
                  Live <FaExternalLinkAlt />
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-black text-white transition hover:border-emerald-300/50 hover:bg-emerald-300/10">
                  Code <FaGithub />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Contact"
        title="Let us build something sharp"
        subtitle="A clear contact surface with glowing inputs, direct links, and enough contrast to feel premium without getting noisy."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-[32px] border border-emerald-300/20 bg-white/[0.07] p-8 shadow-2xl shadow-emerald-950/30 backdrop-blur-2xl">
          <h3 className="text-3xl font-black text-white">Open to opportunities and collaborations.</h3>
          <p className="mt-5 leading-8 text-slate-300">
            Send a message for projects, internships, freelance work, or anything that needs a clean web interface and reliable full stack thinking.
          </p>
          <div className="mt-8 grid gap-4">
            <a href={`mailto:${personalDetails.email}`} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/45 p-4 text-slate-200 transition hover:border-emerald-300/40 hover:bg-emerald-300/5">
              <FaEnvelope className="text-emerald-200" /> {personalDetails.email}
            </a>
            <a href={personalDetails.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/45 p-4 text-slate-200 transition hover:border-emerald-300/40 hover:bg-emerald-300/5">
              <FaLinkedin className="text-emerald-200" /> LinkedIn
            </a>
            <a href={personalDetails.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/45 p-4 text-slate-200 transition hover:border-emerald-300/40 hover:bg-emerald-300/5">
              <FaGithub className="text-emerald-200" /> GitHub
            </a>
          </div>
        </motion.div>

        <motion.form variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-[32px] border border-emerald-300/20 bg-slate-950/60 p-6 shadow-2xl shadow-emerald-950/30 backdrop-blur-2xl sm:p-8">
          {[
            { label: 'Name', type: 'text', placeholder: 'Your name' },
            { label: 'Email', type: 'email', placeholder: 'you@example.com' },
          ].map((field) => (
            <label key={field.label} className="mb-5 block">
              <span className="mb-2 block text-sm font-bold text-emerald-100">{field.label}</span>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="w-full rounded-3xl border border-white/10 bg-white/[0.06] px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/60 focus:shadow-[0_0_28px_rgba(16,185,129,0.16)]"
              />
            </label>
          ))}
          <label className="mb-6 block">
            <span className="mb-2 block text-sm font-bold text-emerald-100">Message</span>
            <textarea
              rows="6"
              placeholder="Tell me about your idea..."
              className="w-full resize-none rounded-3xl border border-white/10 bg-white/[0.06] px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/60 focus:shadow-[0_0_28px_rgba(16,185,129,0.16)]"
            />
          </label>
          <button type="button" className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-emerald-300 px-6 py-4 font-black text-slate-950 transition hover:bg-amber-200 hover:shadow-[0_0_38px_rgba(16,185,129,0.28)]">
            Send Message <FaPaperPlane className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent md:hidden" />
      <p className="text-sm text-slate-500">Copyright {new Date().getFullYear()} {personalDetails.name}. Built with React, Tailwind, and Framer Motion.</p>
      <div className="flex items-center gap-3">
        {[FaGithub, FaLinkedin, FaEnvelope].map((Icon, index) => (
          <a key={index} href={index === 0 ? personalDetails.githubUrl : index === 1 ? personalDetails.linkedinUrl : `mailto:${personalDetails.email}`} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-emerald-300/40 hover:text-emerald-200">
            <Icon />
          </a>
        ))}
        <Link to="home" smooth duration={650} className="grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-emerald-300 text-slate-950 transition hover:bg-amber-200" aria-label="Back to top">
          <FaChevronUp />
        </Link>
      </div>
    </div>
  </footer>
);

function Practice() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(true);

  const contextValue = useMemo(
    () => ({
      activeSection,
      isDark,
      toggleTheme: () => setIsDark((value) => !value),
    }),
    [activeSection, isDark],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] },
    );

    navLinks.forEach((link) => {
      const node = document.getElementById(link.toLowerCase());
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={`portfolio-shell min-h-screen scroll-smooth font-sans selection:bg-emerald-300/30 selection:text-white ${isDark ? 'portfolio-dark text-slate-200' : 'portfolio-light text-slate-800'}`}>
        <GlowBackground />
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

export default Practice;
