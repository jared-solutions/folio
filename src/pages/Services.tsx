import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Code, Smartphone, Server, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies. From responsive landing pages to complex web platforms.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Focused', 'Cross-browser Compatible'],
      priceRange: 'Custom Quote'
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android using React Native and modern frameworks.',
      features: ['Cross-platform', 'Native Performance', 'App Store Ready', 'Offline Support'],
      priceRange: 'Custom Quote'
    },
    {
      icon: <Server size={40} />,
      title: 'Backend Development',
      description: 'Robust server-side solutions with secure APIs, database design, and scalable architecture.',
      features: ['RESTful APIs', 'Database Design', 'Security First', 'Scalable Architecture'],
      priceRange: 'Custom Quote'
    },
    {
      icon: <Users size={40} />,
      title: 'Consultation & Code Review',
      description: 'Technical consulting, code reviews, architecture planning, and development guidance for your projects.',
      features: ['Architecture Planning', 'Code Reviews', 'Best Practices', 'Mentoring'],
      priceRange: 'Custom Quote'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We discuss your project requirements, goals, and vision to understand your needs.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Create detailed project plans, timelines, and technology recommendations.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build your solution with regular updates and transparent communication.'
    },
    {
      step: '04',
      title: 'Launch',
      description: 'Deploy your project and provide training and ongoing support.'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-green-600 to-slate-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Services</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Professional web and mobile development services to bring your ideas to life.
              From concept to deployment, I deliver high-quality solutions that drive results.
            </p>
            <Link
              to="/contact"
              className="bg-white dark:bg-slate-800 text-green-600 px-8 py-3 rounded-full font-medium inline-flex items-center hover:bg-gray-100 transition-colors"
            >
              Start Your Project <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">What I Offer</h2>
              <div className="h-1 w-20 bg-green-600 mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Comprehensive development services tailored to your needs, delivered with expertise and attention to detail.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100 dark:border-slate-700">
                  <div className="text-green-600 mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 dark:text-gray-400">
                          <CheckCircle size={16} className="text-green-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500">Pricing:</p>
                    <p className="text-2xl font-bold text-green-600">{service.priceRange}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-gray-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">How I Work</h2>
              <div className="h-1 w-20 bg-green-600 mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A transparent, collaborative process that ensures your project is delivered on time and exceeds expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-slate-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together. I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-green-600 hover:bg-green-600/90 text-white px-8 py-3 rounded-full font-medium inline-flex items-center justify-center transition-colors"
              >
                Get In Touch <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                to="/projects"
                className="bg-transparent border-2 border-white text-white hover:bg-white dark:bg-slate-800 hover:text-slate-800 dark:text-white px-8 py-3 rounded-full font-medium inline-flex items-center justify-center transition-colors"
              >
                View My Work
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;