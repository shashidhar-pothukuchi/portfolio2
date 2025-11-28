import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, Home, Sun, Moon, GraduationCap } from 'lucide-react';
import profilePic from './assets/picture.jpg';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('light');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = ['Full Stack Developer', 'AI Engineer'];

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'education', 'projects', 'contact'];
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
      title: "Smart Grocery Management Application",
      description: "Spearheaded the development of a full-stack MERN grocery inventory management system. Integrated React Router for navigation and React-Bootstrap for a responsive UI. Utilized Node.js with Express for server-side logic and Axios for API communication. Deployed with NoSQL MongoDB database using Mongo Atlas.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Axios"],
      github: "https://github.com/shashidhar-pothukuchi",
      demo: "https://www.psds.dev"
    },
    {
      title: "XV6 Operating System Feature Implementation",
      description: "Developed OS level shell commands (ls, uniq, find, cat, nice, ps) and handled kernel level programs. Implemented process scheduling (FIFO, priority), system calls (sleep, sbrk), and lazy allocation handling page faults. Improved file system capacity and scalability.",
      tech: ["C", "Unix", "Kernel", "OS"],
      github: "https://github.com/shashidhar-pothukuchi",
      demo: "https://www.psds.dev"
    },
    {
      title: "Spring Portfolio Application",
      description: "Architected a microservice-based REST MVC portfolio application using Spring Boot. Implemented Dependency Injection, IOC, Spring Data JPA, and Feign Client. Developed REST APIs with JUnit testing and Swagger documentation.",
      tech: ["Spring Boot", "Java", "Microservices", "REST API"],
      github: "https://github.com/shashidhar-pothukuchi",
      demo: "https://www.psds.dev"
    },
    {
      title: "Aspect-Based Sentiment Analysis",
      description: "Built a full-stack web application for product sentiment analysis using Amazon reviews. Used NLTK and Sci-kit Learn for NLP. Backend with Flask and Node.js for scraping, frontend with React and Material-UI.",
      tech: ["Python", "Flask", "React", "NLP", "Node.js"],
      github: "https://github.com/shashidhar-pothukuchi",
      demo: "https://www.psds.dev"
    }
  ];

  const experience = [
    {
      role: "Software Developer",
      company: "Tata Consultancy Services (State Street Bank)",
      period: "Dec 2024 – Present",
      points: [
        "Working on integrating a stateless orchestration engine (10M msgs/hr, 10× throughput), responsible for developing its real-time monitoring dashboard similar to Camunda Operate and Kibana using React, Spring, GraphQL, Elasticsearch, Kibana, and BPMN.js.",
        "Architected and delivered AI modules powered by Azure AI and RAG for automated file processing, embedded an AI‑driven chat wizard; leading a team of 5, accelerating feature delivery by 40% and accelerating migration by 30%.",
        "Designed and shipped unstructured file parsing support to the system, developed a rule‑based parser interface integrating via gRPC, Spring Boot, Hibernate, Postgres, AKS, and Azure Blob Storage, while leading a 3‑member team through production rollout.",
        "Automated workflow maintenance and cleanup by creating Camunda BPMN processes, implementing service tasks to invoke Java microservices, and developing Java gRPC client–server components to audit and remove legacy or unused workflows, eliminating 40% of unused flows and boosting overall system efficiency.",
        "Authored documentation and test suites (unit, smoke, integration) and built CI/CD pipelines (Azure ADO, Harness) for multi‑environment deployments."
      ]
    },
    {
      role: "AI Research Assistant",
      company: "University of South Florida",
      period: "Dec 2023 – May 2024",
      points: [
        "Developed a multilayered model using BERT and GPT2-XL from Hugging Face using python3, and pytorch to extract golden events from textbook data, resulting in a 40% improvement in data accuracy and delivering precise event prediction results.",
        "Optimized the base implementation, reducing the overall prediction time by 60%. Optimized the processing time by developing GPU-accelerated code.",
        "Designed and developed the Language GRASP lab website, designing user interface using HTML, CSS, JavaScript, and Bootstrap."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Cognizant (Walgreens)",
      period: "Nov 2020 – June 2022",
      points: [
        "Contributed to software development for a major US-based pharmaceutical company, resolved production defects and critical issues, reducing 30% of overall defects in the newly designed system.",
        "Leveraged Java 11, Spring Boot, Spring Batch, Hibernate and Gradle for dependency management, ORM mapping and building RESTful APIs. Used React.js for designing interactive frontend Single Page Application, utilizing React Router and Redux.",
        "Performed unit tests using JUnit and Mockito, logged application events using Log4j, used Swagger API documentation, and Postman for testing and validating API endpoints. Worked on configuration scripts and installing certifications.",
        "Successfully designed and implemented RESTful microservices architecture, integrating with Azure CI/CD pipelines and k8 clusters, realizing a significant 15% operational efficiency improvement."
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      university: "University of South Florida",
      location: "Tampa, FL",
      period: "Aug 2022 – May 2024",
      gpa: "4.0",
      achievements: ["Deep Learning", "Cloud Computing", "Data Mining", "AI"]
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      university: "Matrusri Engineering College, OU",
      location: "Hyderabad, India",
      period: "Aug 2016 - June 2020",
      gpa: "3.79",
      achievements: ["WES Accredited"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F6F2] dark:bg-[#121212] flex transition-colors duration-300">
      {/* Vertical Navbar */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="bg-white dark:bg-[#1E1E1E] rounded-full shadow-lg p-4 flex flex-col items-center gap-6 transition-colors duration-300">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#4A70A9] mb-2">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {[
            { id: 'home', icon: Home },
            { id: 'about', icon: User },
            { id: 'experience', icon: Briefcase },
            { id: 'education', icon: GraduationCap },
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
              className="hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Icon size={20} />
            </button>
          ))}

          <div className="w-full h-px bg-gray-200 dark:bg-gray-700 my-2"></div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-[#4A70A9] hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 lg:ml-32">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-6xl w-full">
            <div className="mb-6">
              <span className="text-[#4A70A9] font-medium">Hello, I'm</span>
            </div>
            <h1 className="font-bold text-black dark:text-white mb-6 transition-colors duration-300">
              <div className="text-3xl md:text-5xl mb-2">Sai Durga Shashidhar</div>
              <div className="text-4xl md:text-6xl">Pothukuchi</div>
            </h1>
            <div className="h-12 md:h-16 overflow-hidden mb-8">
              <p
                key={currentRoleIndex}
                className="text-2xl md:text-3xl text-[#4A70A9] animate-slideIn"
              >
                {roles[currentRoleIndex]}
              </p>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl transition-colors duration-300">
              Software Developer with expertise in Full Stack Development, Cloud Computing, and AI.
              Passionate about building scalable, high-performance applications and integrating cutting-edge technologies.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-white dark:bg-[#1E1E1E] text-black dark:text-white rounded-lg font-medium shadow-sm hover:shadow-md hover:bg-gray-50 dark:hover:bg-[#2A2A2A] transition-all duration-200"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-white dark:bg-[#1E1E1E] text-black dark:text-white rounded-lg font-medium shadow-sm hover:shadow-md hover:bg-gray-50 dark:hover:bg-[#2A2A2A] transition-all duration-200"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl w-full">
            <h2 className="text-5xl font-bold text-black dark:text-white mb-12 transition-colors duration-300">About Me</h2>
            <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 shadow-sm transition-colors duration-300">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Bio */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-black dark:text-white mb-4 transition-colors duration-300">Who I Am</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                      I am a Software Developer with over 4 years of experience in architecting and delivering scalable solutions.
                      My expertise spans across Java, Python, and JavaScript ecosystems, with a strong focus on Cloud platforms like Azure and AWS.
                      I have a proven track record of optimizing system performance, integrating AI-driven solutions, and leading teams to successful project delivery.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-black dark:text-white mb-4 transition-colors duration-300">What I Do</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                      I specialize in full-stack development, utilizing modern frameworks like React, Spring Boot, and Node.js.
                      I am experienced in designing microservices architectures, implementing CI/CD pipelines, and leveraging AI models to solve complex business problems.
                    </p>
                  </div>

                  {/* Quick Stats */}
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-[#F7F6F2] dark:bg-[#2A2A2A] rounded-xl p-6 text-center transition-colors duration-300">
                      <p className="text-3xl font-bold text-[#4A70A9] mb-1">4+</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium transition-colors duration-300">Years Experience</p>
                    </div>
                    <div className="bg-[#F7F6F2] dark:bg-[#2A2A2A] rounded-xl p-6 text-center transition-colors duration-300">
                      <p className="text-3xl font-bold text-[#4A70A9] mb-1">20+</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium transition-colors duration-300">Projects Completed</p>
                    </div>
                    <div className="bg-[#F7F6F2] dark:bg-[#2A2A2A] rounded-xl p-6 text-center transition-colors duration-300">
                      <p className="text-3xl font-bold text-[#4A70A9] mb-1">4.0</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium transition-colors duration-300">GPA (Masters)</p>
                    </div>
                    <div className="bg-[#F7F6F2] dark:bg-[#2A2A2A] rounded-xl p-6 text-center transition-colors duration-300">
                      <p className="text-3xl font-bold text-[#4A70A9] mb-1">100%</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium transition-colors duration-300">Commitment</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-black dark:text-white mb-4 transition-colors duration-300">My Approach</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                      I believe in writing clean, maintainable code and following best practices. I thrive in collaborative environments and enjoy mentoring junior developers to build high-performing teams.
                    </p>
                  </div>
                </div>

                {/* Right Column - Skills */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-black dark:text-white mb-6 transition-colors duration-300">Technical Skills</h3>

                    <div className="space-y-6">
                      {/* Languages */}
                      <div>
                        <p className="text-sm font-semibold text-[#4A70A9] mb-3 uppercase tracking-wide">Languages</p>
                        <div className="flex flex-wrap gap-2">
                          {['Java', 'Python', 'C++', 'SQL', 'JavaScript'].map((skill) => (
                            <span
                              key={skill}
                              className="px-4 py-2 bg-[#F7F6F2] dark:bg-[#2A2A2A] text-black dark:text-white rounded-full text-sm font-medium hover:bg-[#8FABD4] hover:text-white transition-all duration-200 cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Tools & Frameworks */}
                      <div>
                        <p className="text-sm font-semibold text-[#4A70A9] mb-3 uppercase tracking-wide">Tools & Frameworks</p>
                        <div className="flex flex-wrap gap-2">
                          {['Spring Boot', 'Spring Batch', 'Angular', 'React.js', 'PyTorch', 'TensorFlow', 'Hibernate', 'RESTful APIs', 'gRPC', 'GraphQL', 'Apache Kafka'].map((skill) => (
                            <span
                              key={skill}
                              className="px-4 py-2 bg-[#F7F6F2] dark:bg-[#2A2A2A] text-black dark:text-white rounded-full text-sm font-medium hover:bg-[#8FABD4] hover:text-white transition-all duration-200 cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Data */}
                      <div>
                        <p className="text-sm font-semibold text-[#4A70A9] mb-3 uppercase tracking-wide">Data</p>
                        <div className="flex flex-wrap gap-2">
                          {['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Kibana', 'FlywayDB', 'Apache Spark'].map((skill) => (
                            <span
                              key={skill}
                              className="px-4 py-2 bg-[#F7F6F2] dark:bg-[#2A2A2A] text-black dark:text-white rounded-full text-sm font-medium hover:bg-[#8FABD4] hover:text-white transition-all duration-200 cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Cloud Platforms */}
                      <div>
                        <p className="text-sm font-semibold text-[#4A70A9] mb-3 uppercase tracking-wide">Cloud Platforms</p>
                        <div className="flex flex-wrap gap-2">
                          {['Azure AKS', 'Azure ADO', 'AWS EC2', 'Docker', 'Kubernetes', 'EKS', 'Jira', 'Gradle', 'Maven', 'Harness CI/CD', 'IBM RTC', 'Git'].map((skill) => (
                            <span
                              key={skill}
                              className="px-4 py-2 bg-[#F7F6F2] dark:bg-[#2A2A2A] text-black dark:text-white rounded-full text-sm font-medium hover:bg-[#8FABD4] hover:text-white transition-all duration-200 cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Testing */}
                      <div>
                        <p className="text-sm font-semibold text-[#4A70A9] mb-3 uppercase tracking-wide">Testing</p>
                        <div className="flex flex-wrap gap-2">
                          {['JUnit', 'Mockito', 'Puppeteer', 'Postman', 'Swagger', 'Log4j'].map((skill) => (
                            <span
                              key={skill}
                              className="px-4 py-2 bg-[#F7F6F2] dark:bg-[#2A2A2A] text-black dark:text-white rounded-full text-sm font-medium hover:bg-[#8FABD4] hover:text-white transition-all duration-200 cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Design Methodologies */}
                      <div>
                        <p className="text-sm font-semibold text-[#4A70A9] mb-3 uppercase tracking-wide">Design Methodologies</p>
                        <div className="flex flex-wrap gap-2">
                          {['Microservices', 'Agile (Scrum)', 'MVC', 'Object‑Oriented Design', 'Design Patterns (Factory, Saga)'].map((skill) => (
                            <span
                              key={skill}
                              className="px-4 py-2 bg-[#F7F6F2] dark:bg-[#2A2A2A] text-black dark:text-white rounded-full text-sm font-medium hover:bg-[#8FABD4] hover:text-white transition-all duration-200 cursor-default"
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
          <div className="max-w-6xl w-full">
            <h2 className="text-5xl font-bold text-black dark:text-white mb-12 transition-colors duration-300">Experience</h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-black dark:text-white transition-colors duration-300">{exp.role}</h3>
                    <span className="text-[#4A70A9] font-medium">{exp.period}</span>
                  </div>
                  <p className="text-lg text-[#8FABD4] font-medium mb-3">{exp.company}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl w-full">
            <h2 className="text-5xl font-bold text-black dark:text-white mb-12 transition-colors duration-300">Education</h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-[#4A70A9]">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-black dark:text-white mb-2 transition-colors duration-300">{edu.degree}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <p className="text-xl text-[#4A70A9] font-semibold">{edu.university}</p>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">{edu.location}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:text-right">
                      <span className="inline-block px-4 py-2 bg-[#4A70A9] text-white rounded-lg font-medium mb-2">{edu.period}</span>
                      <p className="text-[#4A70A9] font-semibold">GPA: {edu.gpa}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide transition-colors duration-300">Achievements</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-[#F7F6F2] dark:bg-[#2A2A2A] text-black dark:text-white rounded-full text-sm font-medium transition-colors duration-300"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl w-full">
            <h2 className="text-5xl font-bold text-black dark:text-white mb-12 transition-colors duration-300">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-semibold text-black dark:text-white mb-4 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#F7F6F2] dark:bg-[#2A2A2A] text-[#4A70A9] rounded-full text-sm font-medium transition-colors duration-300"
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
          <div className="max-w-6xl w-full">
            <h2 className="text-5xl font-bold text-black dark:text-white mb-12 transition-colors duration-300">Get In Touch</h2>
            <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 shadow-sm transition-colors duration-300">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-300">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:shashidhar.pothukuchi@gmail.com"
                  className="flex items-center gap-4 p-4 bg-[#F7F6F2] dark:bg-[#2A2A2A] rounded-lg hover:bg-[#8FABD4] hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                >
                  <Mail className="text-[#4A70A9] group-hover:text-white transition-colors duration-300" size={24} />
                  <span className="text-lg font-medium text-black dark:text-white group-hover:text-white transition-colors duration-300">shashidhar.pothukuchi@gmail.com</span>
                </a>
                <a
                  href="https://github.com/shashidhar-pothukuchi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#F7F6F2] dark:bg-[#2A2A2A] rounded-lg hover:bg-[#8FABD4] hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                >
                  <Github className="text-[#4A70A9] group-hover:text-white transition-colors duration-300" size={24} />
                  <span className="text-lg font-medium text-black dark:text-white group-hover:text-white transition-colors duration-300">github.com/shashidhar-pothukuchi</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/shashidhar-psd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#F7F6F2] dark:bg-[#2A2A2A] rounded-lg hover:bg-[#8FABD4] hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                >
                  <Linkedin className="text-[#4A70A9] group-hover:text-white transition-colors duration-300" size={24} />
                  <span className="text-lg font-medium text-black dark:text-white group-hover:text-white transition-colors duration-300">linkedin.com/in/shashidhar-psd</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 text-center text-gray-600 dark:text-gray-400 transition-colors duration-300">
          <p>© 2024 Sai Durga Shashidhar Pothukuchi. Built with React & Tailwind CSS</p>
        </footer>
      </div>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-white dark:bg-[#1E1E1E] rounded-full shadow-lg px-6 py-3 flex items-center gap-4 transition-colors duration-300">
          {[
            { id: 'home', icon: Home },
            { id: 'about', icon: User },
            { id: 'experience', icon: Briefcase },
            { id: 'education', icon: GraduationCap },
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
              className="hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Icon size={20} />
            </button>
          ))}

          <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-2"></div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-[#4A70A9] hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Portfolio;