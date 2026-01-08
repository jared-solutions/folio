import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SkillBar from '../components/SkillBar';
import { Download, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'HTML/CSS', percentage: 95 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'React.js', percentage: 85 },
    { name: 'PHP', percentage: 80 },
    { name: 'Python', percentage: 75 },
    { name: 'Java', percentage: 70 },
    { name: 'C/C++', percentage: 75 },
    { name: 'UI/UX Design', percentage: 80 }
  ];

  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Bytech agency.',
      period: '2024 - Present',
      description: 'Leading development of enterprise web applications, mentoring junior developers, and implementing DevOps practices.'
    },
   
    
    {
      title: 'Freelance Developer',
      company: 'Self-employed',
      period: '2023 - Present',
      description: 'Worked on various freelance projects, including e-commerce sites, portfolio websites, and custom web applications.'
    } 

  ];

  const education = [
    {
      degree: 'Diploma in Information Technology',
      institution: 'Kasarani KTVC',
      period: '2022 - 2025',
      description: 'Specialized in software engineering with focus on web technologies and databases.'
    },
    {
      degree: 'Full Stack Software Engineering',
      institution: 'Moringa School',
      period: '2024',
      description: 'Intensive bootcamp covering modern web development technologies and practices.'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* About Hero */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-2/5">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-full h-full border-4 border-portfolio-gold rounded-3xl"></div>
                  <img 
                    src="/uploads/image3.png" 
                    alt="Professional portrait" 
                    className="rounded-3xl w-full h-auto relative z-10 object-cover shadow-xl"
                  />
                </div>
              </div>
              
              <div className="md:w-3/5">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-portfolio-navy">About Me</h1>
                <div className="h-1 w-20 bg-portfolio-burgundy mb-6"></div>
                
                <p className="text-gray-700 mb-4">
                  I am Jared Mogonchi, a passionate full-stack developer with extensive experience in building web applications
                  and digital solutions. I've worked on various projects including cage management systems, rental platforms, 
                  car hire applications, gym management, spa and salon systems, and sacco systems.
                </p>
                
                <p className="text-gray-700 mb-6">
                  My technical skills span across HTML, CSS, JavaScript, React, C/C++, Python, Java, and PHP. I focus on creating 
                  responsive, user-friendly interfaces and robust backend systems that solve real-world problems.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/JARED MOGONCHI CV.docx"
                    download="Jared_Mogonchi_CV.docx"
                    className="btn-gradient px-6 py-2 rounded-full font-medium inline-flex items-center"
                  >
                    <Download size={18} className="mr-2" /> Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-portfolio-navy mb-4">My Skills</h2>
              <div className="h-1 w-20 bg-portfolio-burgundy mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  percentage={skill.percentage} 
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Experience Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-portfolio-navy mb-4">Work Experience</h2>
              <div className="h-1 w-20 bg-portfolio-burgundy mx-auto"></div>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md relative">
                  <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-portfolio-burgundy text-white flex items-center justify-center">
                    <Briefcase size={14} />
                  </div>
                  <div className="border-l-2 border-portfolio-burgundy pl-6 ml-0">
                    <h3 className="text-xl font-bold text-portfolio-navy">{exp.title}</h3>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-portfolio-burgundy font-medium">{exp.company}</span>
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
        <section className="section-padding">
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
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
