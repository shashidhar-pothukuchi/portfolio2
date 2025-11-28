import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, Home } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates and team analytics.",
      tech: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "AI Content Generator",
      description: "ML-powered content generation platform with custom fine-tuned models.",
      tech: ["Python", "FastAPI", "React", "TensorFlow"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization dashboard for business intelligence.",
      tech: ["Vue.js", "D3.js", "Express", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  const experience = [
    {
      role: "Senior Software Developer",
      company: "Tech Corp",
      period: "2022 - Present",
      description: "Leading frontend development team, architecting scalable solutions, and mentoring junior developers."
    },
    {
      role: "Full Stack Developer",
      company: "StartUp Inc",
      period: "2021 - 2022",
      description: "Built and maintained multiple web applications, implemented CI/CD pipelines."
    },
    {
      role: "Software Developer",
      company: "Digital Agency",
      period: "2020 - 2021",
      description: "Developed client-facing applications and integrated third-party APIs."
    }
  ];

  return (
    <div className="min-h-screen bg-[#EFECE3] flex">
      {/* Vertical Navbar */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="bg-white rounded-full shadow-lg p-4 flex flex-col items-center gap-6">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#4A70A9] mb-2">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Developer" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {[
            { id: 'home', icon: Home },
            { id: 'about', icon: User },
            { id: 'experience', icon: Briefcase },
            { id: 'projects', icon: Code2 },
            { id: 'contact', icon: Mail }
          ].map(({ id, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              style={{
                padding: '8px',
                borderRadius: '9999px',
                transition: 'all 0.2s ease',
                backgroundColor: activeSection === id ? '#4A70A9' : 'transparent',
                color: activeSection === id ? 'white' : '#4A70A9',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                if (activeSection !== id) {
                  e.currentTarget.style.backgroundColor = '#f5f5f5';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== id) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <Icon size={20} />
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 lg:ml-32">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl w-full">
            <div className="mb-6">
              <span className="text-[#4A70A9] font-medium">Hello, I'm</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-black mb-6">
              John Doe
            </h1>
            <p className="text-2xl md:text-3xl text-[#4A70A9] mb-8">
              Full Stack Developer
            </p>
            <p className="text-lg text-gray-700 mb-12 max-w-2xl">
              Crafting elegant solutions to complex problems. Specialized in building 
              scalable web applications with modern technologies.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                style={{
                  padding: '12px 24px',
                  backgroundColor: 'white',
                  color: 'black',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f5f5f5';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                }}
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                style={{
                  padding: '12px 24px',
                  backgroundColor: 'white',
                  color: 'black',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f5f5f5';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                }}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl w-full">
            <h2 className="text-5xl font-bold text-black mb-12">About Me</h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Bio */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-black mb-4">Who I Am</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      I'm a passionate software developer with 4 years of experience in building 
                      web applications that make a difference. My journey in tech started with a 
                      curiosity about how things work, and it has evolved into a career dedicated 
                      to creating intuitive, performant, and scalable solutions.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-black mb-4">What I Do</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      I specialize in full-stack development, with a strong focus on modern 
                      JavaScript frameworks and cloud technologies. I believe in writing clean, 
                      maintainable code and following best practices to deliver exceptional user experiences.
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-[#EFECE3] rounded-xl p-6 text-center">
                      <p className="text-3xl font-bold text-[#4A70A9] mb-1">4+</p>
                      <p className="text-sm text-gray-600 font-medium">Years Experience</p>
                    </div>
                    <div className="bg-[#EFECE3] rounded-xl p-6 text-center">
                      <p className="text-3xl font-bold text-[#4A70A9] mb-1">20+</p>
                      <p className="text-sm text-gray-600 font-medium">Projects Completed</p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Skills */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-black mb-6">Technical Skills</h3>
                    
                    <div className="space-y-6">
                      {/* Frontend */}
                      <div>
                        <p className="text-sm font-semibold text-[#4A70A9] mb-3 uppercase tracking-wide">Frontend</p>
                        <div className="flex flex-wrap gap-2">
                          {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'].map((skill) => (
                            <span 
                              key={skill}
                              className="px-4 py-2 bg-[#EFECE3] text-black rounded-full text-sm font-medium hover:bg-[#8FABD4] hover:text-white transition-all duration-200 cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Backend */}
                      <div>
                        <p className="text-sm font-semibold text-[#4A70A9] mb-3 uppercase tracking-wide">Backend</p>
                        <div className="flex flex-wrap gap-2">
                          {['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'].map((skill) => (
                            <span 
                              key={skill}
                              className="px-4 py-2 bg-[#EFECE3] text-black rounded-full text-sm font-medium hover:bg-[#8FABD4] hover:text-white transition-all duration-200 cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* DevOps & Tools */}
                      <div>
                        <p className="text-sm font-semibold text-[#4A70A9] mb-3 uppercase tracking-wide">DevOps & Tools</p>
                        <div className="flex flex-wrap gap-2">
                          {['AWS', 'Docker', 'Git', 'CI/CD'].map((skill) => (
                            <span 
                              key={skill}
                              className="px-4 py-2 bg-[#EFECE3] text-black rounded-full text-sm font-medium hover:bg-[#8FABD4] hover:text-white transition-all duration-200 cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-4xl w-full">
            <h2 className="text-5xl font-bold text-black mb-12">Experience</h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-black">{exp.role}</h3>
                    <span className="text-[#4A70A9] font-medium">{exp.period}</span>
                  </div>
                  <p className="text-lg text-[#8FABD4] font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl w-full">
            <h2 className="text-5xl font-bold text-black mb-12">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-semibold text-black mb-4">{project.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-[#EFECE3] text-[#4A70A9] rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-[#4A70A9] text-[#4A70A9] rounded-lg hover:bg-[#4A70A9] hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#4A70A9] text-white rounded-lg hover:bg-[#8FABD4] hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
                    >
                      <ExternalLink size={18} />
                      Demo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-4xl w-full">
            <h2 className="text-5xl font-bold text-black mb-12">Get In Touch</h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="space-y-4">
                <a 
                  href="mailto:john.doe@example.com"
                  className="flex items-center gap-4 p-4 bg-[#EFECE3] rounded-lg hover:bg-[#8FABD4] hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                >
                  <Mail className="text-[#4A70A9] group-hover:text-white transition-colors duration-300" size={24} />
                  <span className="text-lg font-medium">john.doe@example.com</span>
                </a>
                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#EFECE3] rounded-lg hover:bg-[#8FABD4] hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                >
                  <Github className="text-[#4A70A9] group-hover:text-white transition-colors duration-300" size={24} />
                  <span className="text-lg font-medium">github.com/johndoe</span>
                </a>
                <a 
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#EFECE3] rounded-lg hover:bg-[#8FABD4] hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                >
                  <Linkedin className="text-[#4A70A9] group-hover:text-white transition-colors duration-300" size={24} />
                  <span className="text-lg font-medium">linkedin.com/in/johndoe</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 text-center text-gray-600">
          <p>© 2024 John Doe. Built with React & Tailwind CSS</p>
        </footer>
      </div>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-white rounded-full shadow-lg px-6 py-3 flex items-center gap-4">
          {[
            { id: 'home', icon: Home },
            { id: 'about', icon: User },
            { id: 'experience', icon: Briefcase },
            { id: 'projects', icon: Code2 },
            { id: 'contact', icon: Mail }
          ].map(({ id, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              style={{
                padding: '8px',
                borderRadius: '9999px',
                transition: 'all 0.2s ease',
                backgroundColor: activeSection === id ? '#4A70A9' : 'transparent',
                color: activeSection === id ? 'white' : '#4A70A9',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                if (activeSection !== id) {
                  e.currentTarget.style.backgroundColor = '#f5f5f5';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== id) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <Icon size={20} />
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Portfolio;