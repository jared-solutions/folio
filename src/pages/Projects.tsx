
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 'omilife',
      title: 'Omilife Healthcare Management System',
      description: 'A comprehensive medicine supply and pharmacy management system for efficient drug distribution, inventory tracking, sales management, and supplier coordination.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=500',
      tags: ['React', 'Django', 'MySQL', 'REST API'],
      category: 'web'
    },
    {
      id: 'mkulima',
      title: '🐔 Complete Financial Management for Kenyan Poultry Farmers 🥚',
      description: 'A comprehensive financial management system designed specifically for Kenyan poultry farmers. Includes expense tracking, income management, inventory control, and financial reporting.',
      image: '/uploads/cageG1.png',
      tags: ['React', 'PHP', 'MySQL', 'JavaScript'],
      category: 'web'
    },
    {
      id: 'rentconnect',
      title: 'RentConnect Website',
      description: 'A platform connecting landlords and tenants with seamless property management features. Includes booking, payment processing, and maintenance request tracking.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=500',
      tags: ['Next.js', 'Express', 'PostgreSQL'],
      category: 'web'
    },
    {
      id: 'car-hire',
      title: 'Car Hire Application',
      description: 'A comprehensive car rental solution with booking, payment, and fleet management capabilities. Features include GPS tracking, maintenance scheduling, and customer reviews.',
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=500',
      tags: ['React Native', 'Firebase', 'Stripe'],
      category: 'mobile'
    },
    {
      id: 'gym-system',
      title: 'Gym Management System',
      description: 'Complete solution for gym owners to manage memberships, schedule classes, track attendance, and process payments. Includes a member portal for booking and progress tracking.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=500',
      tags: ['React', 'Express', 'MySQL'],
      category: 'web'
    },
    {
      id: 'spa-salon',
      title: 'Spa & Salon Booking System',
      description: 'Full-featured platform for spa and salon businesses to manage appointments, staff schedules, inventory, and client relationships. Includes online booking and payment processing.',
      image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=500',
      tags: ['Vue.js', 'Laravel', 'PostgreSQL'],
      category: 'web'
    },
    {
      id: 'sacco-system',
      title: 'SACCO Management System',
      description: 'Comprehensive financial management system for Savings and Credit Cooperative Organizations. Features include member management, loan processing, savings tracking, and financial reporting.',
      image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=500',
      tags: ['Angular', 'Spring Boot', 'Oracle'],
      category: 'enterprise'
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-portfolio-navy mb-4">My Projects</h1>
              <div className="h-1 w-20 bg-portfolio-burgundy mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore my portfolio of web, mobile, and enterprise applications that 
                demonstrate my technical skills and problem-solving abilities.
              </p>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button 
                onClick={() => setFilter('all')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filter === 'all' 
                    ? 'bg-portfolio-burgundy text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Projects
              </button>
              <button 
                onClick={() => setFilter('web')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filter === 'web' 
                    ? 'bg-portfolio-burgundy text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Web
              </button>
              <button 
                onClick={() => setFilter('mobile')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filter === 'mobile' 
                    ? 'bg-portfolio-burgundy text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Mobile
              </button>
              <button 
                onClick={() => setFilter('enterprise')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filter === 'enterprise' 
                    ? 'bg-portfolio-burgundy text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Enterprise
              </button>
            </div>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
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
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No projects found with the selected filter.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
