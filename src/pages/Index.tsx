
import React from 'react';
import { ChevronDown, Code, Server, Globe, PenTool, ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { Link } from 'react-router-dom';

// Sample project data with technologies matching Jared's skills
const featuredProjects = [
  {
    id: 'omilife',
    title: 'Omilife Healthcare Management System',
    description: 'A comprehensive medicine supply and pharmacy management system for efficient drug distribution, inventory tracking, sales management, and supplier coordination.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=500',
    tags: ['React', 'Django', 'MySQL']
  },
  {
    id: 'rentconnect',
    title: 'RentConnect Website',
    description: 'A platform connecting landlords and tenants with seamless property management features.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=500',
    tags: ['JavaScript', 'HTML/CSS', 'Python']
  },
  {
    id: 'mkulima',
    title: '🐔 Complete Financial Management for Kenyan Poultry Farmers 🥚',
    description: 'A comprehensive financial management system designed specifically for Kenyan poultry farmers.',
    image: '/uploads/cageG1.png',
    tags: ['React', 'PHP', 'MySQL', 'JavaScript']
  }
];

const skills = [
  {
    icon: <Code size={36} />,
    title: 'Frontend Development',
    description: 'Creating responsive, interactive interfaces using modern web technologies like HTML, CSS, JavaScript and React.'
  },
  {
    icon: <Server size={36} />,
    title: 'Backend Development',
    description: 'Building robust server-side applications with PHP, Python, Java, and database technologies like MySQL.'
  },
  {
    icon: <Globe size={36} />,
    title: 'Full Stack Solutions',
    description: 'Developing end-to-end web applications with seamless integration between frontend and backend systems.'
  },
  {
    icon: <PenTool size={36} />,
    title: 'Software Engineering',
    description: 'Creating sophisticated software solutions using C/C++, Java and Python with best practices in software architecture.'
  }
];

interface IndexProps {
  guestName?: string;
}

const Index: React.FC<IndexProps> = ({ guestName = 'My Guest' }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground">
        <HeroSection guestName={guestName} />
        
        <div className="text-center mb-16">
          <button 
            onClick={() => scrollToSection('skills')}
            className="animate-bounce inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-md hover:shadow-lg transition-shadow"
            aria-label="Scroll down"
          >
            <ChevronDown size={24} />
          </button>
        </div>
        
        {/* Skills Section */}
        <section id="skills" className="section-padding bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">My Expertise</h2>
              <div className="h-1 w-20 bg-green-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border"
                >
                  <div className="text-green-500 mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-card-foreground">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Projects Section */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Featured Projects</h2>
              <div className="h-1 w-20 bg-green-500 mx-auto mb-4"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore some of my recent work. Each project represents unique challenges and solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard 
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/projects" 
                className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-full font-medium inline-flex items-center"
              >
                View All Projects <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section-padding bg-muted text-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm currently available for freelance projects, full-time positions, and consulting work.
              Let's create something amazing together!
            </p>
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full font-medium bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-colors inline-flex items-center"
            >
              Get In Touch <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Index;
