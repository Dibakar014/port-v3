import React, { useState } from 'react';
import { 
  Layout, 
  Server, 
  Database, 
  ChevronRight, 
  Mail, 
  MapPin, 
  Phone, 
  ExternalLink,
  Menu,
  X,
  Github,
  Linkedin,
  Code2,
  CheckCircle2,
  Loader2
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mvzwvdon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-sky-200 selection:text-sky-900 bg-white">
      
      {/* Navigation - Sticky Glassmorphism */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo / Brand */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tighter text-slate-900 group">
                <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-white group-hover:bg-sky-600 transition-colors shadow-sm">
                  <span className="font-black text-lg leading-none">DC</span>
                </div>
                <span>DIBAKAR <span className="text-sky-500 font-light">CHAKMA</span></span>
              </a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-slate-600 hover:text-sky-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#about" className="text-slate-600 hover:text-sky-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#services" className="text-slate-600 hover:text-sky-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="#projects" className="text-slate-600 hover:text-sky-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                <a href="#contact" className="text-slate-600 hover:text-sky-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-slate-600 hover:text-sky-500 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" onClick={toggleMobileMenu} className="text-slate-600 hover:text-sky-500 hover:bg-sky-50 block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#about" onClick={toggleMobileMenu} className="text-slate-600 hover:text-sky-500 hover:bg-sky-50 block px-3 py-2 rounded-md text-base font-medium">About</a>
              <a href="#services" onClick={toggleMobileMenu} className="text-slate-600 hover:text-sky-500 hover:bg-sky-50 block px-3 py-2 rounded-md text-base font-medium">Services</a>
              <a href="#projects" onClick={toggleMobileMenu} className="text-slate-600 hover:text-sky-500 hover:bg-sky-50 block px-3 py-2 rounded-md text-base font-medium">Projects</a>
              <a href="#contact" onClick={toggleMobileMenu} className="text-slate-600 hover:text-sky-500 hover:bg-sky-50 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center min-h-[90vh] relative overflow-hidden">
          {/* Decorative background blob */}
          <div className="absolute top-20 right-0 -z-10 w-[600px] h-[600px] bg-sky-100/50 rounded-full blur-3xl opacity-50 transform translate-x-1/3 -translate-y-1/4"></div>
          
          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-sm font-medium mb-6">
              <Code2 size={16} />
              <span>Full-Stack Web Developer</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
              Building Modern, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Scalable Web Apps.</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
              I specialize in creating high-performance, responsive, and user-centric web applications using modern technologies like React, Node.js, and Tailwind CSS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-500/25 transition-all duration-200 hover:-translate-y-0.5"
              >
                View My Work
                <ChevronRight className="ml-2 -mr-1 w-5 h-5" />
              </a>
              <div className="flex gap-4">
                <a 
                  href="https://github.com" 
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-6 py-4 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-6 py-4 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services / Expertise Section */}
        <section id="services" className="py-24 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
              <p className="text-slate-600">Delivering end-to-end web solutions with a focus on clean code, performance, and scalable architecture.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-sky-300 transition-all group">
                <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center mb-6 text-sky-500 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                  <Layout size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Frontend Development</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Building pixel-perfect, responsive, and accessible user interfaces using modern JavaScript frameworks.
                </p>
                <ul className="space-y-2 text-sm text-slate-500 font-medium">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div> React & Next.js</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div> TypeScript</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div> Tailwind CSS</li>
                </ul>
              </div>

              {/* Service 2 */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-sky-300 transition-all group">
                <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center mb-6 text-sky-500 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                  <Server size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Backend Development</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Designing robust APIs and server-side logic to power complex web applications securely and efficiently.
                </p>
                <ul className="space-y-2 text-sm text-slate-500 font-medium">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div> Node.js & Express</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div> RESTful APIs & GraphQL</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div> Authentication (OAuth, JWT)</li>
                </ul>
              </div>

              {/* Service 3 */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-sky-300 transition-all group">
                <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center mb-6 text-sky-500 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                  <Database size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Database & Cloud</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Architecting scalable data models and deploying applications to modern cloud infrastructure.
                </p>
                <ul className="space-y-2 text-sm text-slate-500 font-medium">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div> PostgreSQL & MongoDB</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div> Prisma ORM</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div> Vercel, AWS, Docker</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Project Gallery - Bento Style */}
        <section id="projects" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Projects</h2>
                <p className="text-slate-600 max-w-2xl">A selection of recent web applications I've built from the ground up.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
              
              {/* Project 1 - Large */}
              <div className="group relative overflow-hidden rounded-3xl bg-slate-100 md:col-span-2 lg:col-span-2 border border-slate-200 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2426&auto=format&fit=crop" 
                  alt="SaaS Analytics Platform" 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-sky-500 text-white rounded-full shadow-sm">Next.js</span>
                    <span className="px-3 py-1 text-xs font-semibold bg-white/20 text-white backdrop-blur-md rounded-full">TypeScript</span>
                    <span className="px-3 py-1 text-xs font-semibold bg-white/20 text-white backdrop-blur-md rounded-full">Tailwind</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    DataPulse SaaS Platform <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-sky-400" />
                  </h3>
                  <p className="text-slate-200 line-clamp-2 max-w-xl">A full-stack analytics dashboard for marketing teams, featuring real-time data visualization, user authentication, and Stripe billing integration.</p>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group relative overflow-hidden rounded-3xl bg-slate-100 border border-slate-200 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2370&auto=format&fit=crop" 
                  alt="E-commerce Platform" 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-sky-500 text-white rounded-full shadow-sm">React</span>
                    <span className="px-3 py-1 text-xs font-semibold bg-white/20 text-white backdrop-blur-md rounded-full">Node.js</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    Lumina E-commerce <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-sky-400" />
                  </h3>
                  <p className="text-slate-200 line-clamp-2 text-sm">A high-performance headless e-commerce storefront with a custom CMS backend.</p>
                </div>
              </div>

              {/* Project 3 */}
              <div className="group relative overflow-hidden rounded-3xl bg-slate-100 border border-slate-200 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2376&auto=format&fit=crop" 
                  alt="Developer Tool" 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-sky-500 text-white rounded-full shadow-sm">Vue.js</span>
                    <span className="px-3 py-1 text-xs font-semibold bg-white/20 text-white backdrop-blur-md rounded-full">Firebase</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    DevSync Tool <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-sky-400" />
                  </h3>
                  <p className="text-slate-200 line-clamp-2 text-sm">A real-time collaborative code snippet manager for remote engineering teams.</p>
                </div>
              </div>

              {/* Project 4 - Large */}
              <div className="group relative overflow-hidden rounded-3xl bg-slate-100 md:col-span-2 lg:col-span-2 border border-slate-200 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2370&auto=format&fit=crop" 
                  alt="Team Collaboration App" 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-sky-500 text-white rounded-full shadow-sm">React Native</span>
                    <span className="px-3 py-1 text-xs font-semibold bg-white/20 text-white backdrop-blur-md rounded-full">GraphQL</span>
                    <span className="px-3 py-1 text-xs font-semibold bg-white/20 text-white backdrop-blur-md rounded-full">PostgreSQL</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    CollabSpace App <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-sky-400" />
                  </h3>
                  <p className="text-slate-200 line-clamp-2 max-w-xl">A cross-platform mobile and web application for team communication, featuring real-time messaging, file sharing, and task management.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Experience & Timeline */}
        <section id="about" className="py-24 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* About Text */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">About Me</h2>
                <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                  <p>
                    I am a dedicated Web Developer who loves turning complex problems into elegant, intuitive, and highly performant web applications. With a strong foundation in both frontend and backend technologies, I handle the entire development lifecycle.
                  </p>
                  <p>
                    My journey started with a curiosity for how things work on the internet, which quickly evolved into a passion for writing clean, maintainable code. I believe in continuous learning and staying up-to-date with the ever-evolving JavaScript ecosystem.
                  </p>
                  <p>
                    When I'm not coding, you can find me contributing to open-source projects, writing technical blog posts, or exploring the latest advancements in web architecture.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Experience</h3>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                  
                  {/* Timeline Item 1 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-sky-500 text-white shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-slate-900 text-lg">Senior Full-Stack Developer</h4>
                      </div>
                      <div className="text-sky-600 text-sm font-bold mb-3">TechNova Solutions • 2022 - Present</div>
                      <p className="text-slate-600 text-sm leading-relaxed">Leading the development of enterprise SaaS products. Architecting scalable microservices and mentoring junior developers.</p>
                    </div>
                  </div>

                  {/* Timeline Item 2 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-300 text-white shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-slate-900 text-lg">Frontend Engineer</h4>
                      </div>
                      <div className="text-sky-600 text-sm font-bold mb-3">Creative Pulse Agency • 2019 - 2022</div>
                      <p className="text-slate-600 text-sm leading-relaxed">Developed highly interactive and performant user interfaces for high-traffic e-commerce clients using React and Redux.</p>
                    </div>
                  </div>

                  {/* Timeline Item 3 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-300 text-white shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-slate-900 text-lg">Web Developer</h4>
                      </div>
                      <div className="text-sky-600 text-sm font-bold mb-3">Digital Startups Inc • 2017 - 2019</div>
                      <p className="text-slate-600 text-sm leading-relaxed">Built responsive landing pages, integrated third-party APIs, and managed database migrations for early-stage startups.</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Let's build something together</h2>
                <p className="text-slate-600 mb-10 max-w-md">
                  I'm currently available for freelance projects and open to new full-time opportunities. Send me a message and let's discuss your next web project.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-500 shrink-0 border border-sky-100">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold mb-1">Email</h4>
                      <a href="mailto:dibakarchakma02@gmail.com" className="text-slate-600 hover:text-sky-600 transition-colors">dibakarchakma02@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-500 shrink-0 border border-sky-100">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold mb-1">Location</h4>
                      <p className="text-slate-600">Ananda Bihar area, Tabalchari. Rangamati-4500, Rangamati Hill Tracts</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-500 shrink-0 border border-sky-100">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold mb-1">Phone</h4>
                      <a href="tel:+8801714410596" className="text-slate-600 hover:text-sky-600 transition-colors">+880171-441-0596</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden">
                
                {/* Success Overlay */}
                {submitStatus === 'success' && (
                  <div className="absolute inset-0 z-10 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-300">
                    <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-600">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                    <button 
                      onClick={() => setSubmitStatus('idle')}
                      className="mt-6 text-sky-500 font-medium hover:text-sky-600 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                )}

                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-slate-700">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-slate-700">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-bold text-slate-700">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-slate-700">Message</label>
                    <textarea 
                      id="message" 
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all resize-none"
                      placeholder="Tell me about your web project..."
                    ></textarea>
                  </div>
                  
                  {submitStatus === 'error' && (
                    <p className="text-red-500 text-sm font-medium">Something went wrong. Please try again.</p>
                  )}

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-sky-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg shadow-sky-500/30 transition-all duration-200 hover:-translate-y-0.5 disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 bg-slate-50 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Dibakar Chakma. All rights reserved.</p>
      </footer>
    </div>
  );
}
