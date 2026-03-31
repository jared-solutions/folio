import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Download, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const skills = [
    { 
      name: 'Backend Development', 
      items: ['Spring Boot (Java)', 'Django', 'Node.js', 'REST API Development', 'Microservices'] 
    },
    { 
      name: 'Frontend Development', 
      items: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3'] 
    },
    { 
      name: 'Database & Storage', 
      items: ['MySQL'] 
    },
    { 
      name: 'Security & Architecture', 
      items: ['JWT Authentication', 'Role-Based Access Control (RBAC)'] 
    },
    { 
      name: 'DevOps & Tools', 
      items: ['Linux', 'Git', 'Postman', 'Deployment (VPS/Cloud, SSL, DNS)'] 
    },
    { 
      name: 'Additional Skills', 
      items: ['M-Pesa Integration', 'Blockchain Basics (Ethereum/Hyperledger)', 'Unit Testing', 'Payment Integrations', 'API Testing', 'Team Collaboration'] 
    }
  ];

  const experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'MedicinaChain – HealthTech Startup',
      location: 'Nairobi, Kenya',
      period: 'Jan 2026 – Present',
      description: 'Contribute to development of a secure healthcare platform connecting patients, providers, and pharmacies. Build responsive frontend modules using React.js. Design and implement RESTful APIs using Spring Boot, Django, and Node.js. Implement JWT-based authentication and role-based access control. Optimize backend performance for multi-user environments. Develop Python-based log monitoring tools for proactive error detection. Support production deployment, SSL configuration, and Linux server maintenance. Debug production issues and improve system reliability. Tech Stack: React.js, Django, Spring Boot, Node.js, MySQL, JWT, Linux.'
    },
    {
      title: 'Independent Full-Stack Developer',
      company: 'Freelance & Contract Projects',
      location: 'Remote – Kenya & International',
      period: 'Jan 2023 – Oct 2025',
      description: 'NyumbaLink – Rental Management Platform: Architected and developed a full property management system. Implemented role-based access control and secure REST APIs. Omilife Web Platform: Built a production-ready e-commerce and automation platform. Developed authentication systems and automated workflows. Created REST APIs for internal and third-party integrations. Hardware Store POS & Inventory Management System: Engineered an offline-first POS with inventory tracking and stock automation. Integrated M-Pesa Till payment verification for transaction reconciliation. Implemented multi-branch reporting, user roles, and audit logging. Tech Stack: React.js, Django, Node.js, Python, MySQL, REST APIs.'
    },
    {
      title: 'IT Support Intern',
      company: 'Nairobi County Government – City Hall',
      location: 'Nairobi, Kenya',
      period: 'May 2024 – Aug 2024',
      description: 'Provided technical system support for county operations. Assisted the digital communications team in designing promotional materials, event programs, and digital magazine content for official county functions and public engagement initiatives. Gained hands-on experience with government IT infrastructure and workflow optimization.'
    }
  ];

  // const education = [
    // {
    //   degree: 'Diploma in Information Technology',
    //   institution: 'Kasarani KTVC',
    //   period: '2022 - 2025',
    //   description: 'Specialized in software engineering with focus on web technologies and databases.'
    // },
    // {
    //   degree: 'Full Stack Software Engineering',
    //   institution: 'Moringa School',
    //   period: '2024',
    //   description: 'Intensive bootcamp covering modern web development technologies and practices.'
    // }
    // ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* About Hero */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-2/5 max-w-sm mx-auto md:mx-0">
                <img 
                  src="/uploads/image3.png" 
                  alt="Professional portrait" 
                  className="rounded-3xl w-full object-cover shadow-xl"
                />
              </div>
              
              <div className="md:w-3/5">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">About Me</h1>
                <div className="h-1 w-20 bg-green-600 mb-6"></div>
                
                <p className="text-gray-700 mb-4">
                  I am Jared Mogonchi, a Full-Stack Software Engineer based in Nairobi, Kenya, with experience building secure, scalable, and production-ready systems across healthcare and business platforms.
                </p>
                
                <p className="text-gray-700 mb-6">
                  I specialize in backend development using Spring Boot, Django, and Node.js, designing REST APIs, implementing authentication systems, and optimizing applications for multi-user environments. I have contributed to real-world platforms, including a healthcare system at MedicinaChain, where I work on backend services, system monitoring, and performance improvements. In addition to my professional experience, I have developed and deployed multiple full-stack solutions such as rental management systems, POS and inventory platforms, and business automation tools. I focus on building reliable systems that solve real operational problems while maintaining performance, security, and scalability.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/JARED MOGONCHI CV.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gradient px-6 py-2 rounded-full font-medium inline-flex items-center"
                  >
                    <Download size={18} className="mr-2" /> View CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Technical Skills</h2>
              <div className="h-1 w-20 bg-green-600 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-600 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h3 className="text-lg font-bold text-green-700 mb-4 border-b border-gray-100 pb-2">{skill.name}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-slate-600 text-sm flex items-start">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Experience Section */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Work Experience</h2>
              <div className="h-1 w-20 bg-green-600 mx-auto"></div>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-green-600">
                  <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center">
                    <Briefcase size={14} />
                  </div>
                  <div className="border-l-2 border-green-600 pl-6 ml-0">
                    <h3 className="text-xl font-bold text-slate-800">{exp.title}</h3>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-green-700 font-medium">{exp.company}</span>
                      <span className="text-sm text-gray-500">{exp.location}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">{exp.period}</span>
                    </div>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Education Section */}
        {/* <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-portfolio-navy mb-4">Education</h2>
              <div className="h-1 w-20 bg-portfolio-burgundy mx-auto"></div>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md relative">
                  <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-portfolio-burgundy text-white flex items-center justify-center">
                    <GraduationCap size={14} />
                  </div>
                  <div className="border-l-2 border-portfolio-burgundy pl-6 ml-0">
                    <h3 className="text-xl font-bold text-portfolio-navy">{edu.degree}</h3>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-portfolio-burgundy font-medium">{edu.institution}</span>
                      <span className="text-sm text-gray-500">{edu.period}</span>
                    </div>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
};

export default About;
