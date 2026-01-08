
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import ScrollToTop from '../components/ScrollToTop';

interface ProjectData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  features: string[];
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  gallery?: string[];
}

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjectData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Sample project data (in a real app, this would come from an API)
  const projects: ProjectData[] = [
    {
      id: 'omilife',
      title: 'Omilife Healthcare Management System',
      description: 'A comprehensive medicine supply and pharmacy management system for efficient drug distribution.',
      longDescription: 'Omilife is a specialized platform designed for medicine suppliers and pharmacies to manage the entire supply chain of pharmaceutical products. The system handles drug inventory tracking, supplier management, distribution logistics, sales monitoring, and regulatory compliance. Built to optimize the medicine supply process, it ensures timely delivery of medications while maintaining accurate records and financial tracking.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000',
      tags: ['React', 'Django', 'MySQL', 'REST API'],
      features: [
        'Medicine inventory tracking and stock management',
        'Supplier coordination and order management',
        'Drug distribution logistics and delivery tracking',
        'Sales monitoring and revenue analytics',
        'Regulatory compliance and documentation',
        'Pharmacy network management',
        'Real-time stock alerts and reorder automation',
        'Financial reporting for supply chain operations'
      ],
      technologies: [
        'React.js for dynamic and responsive frontend',
        'Django framework for robust backend development',
        'MySQL database for secure data storage',
        'REST API for seamless data communication',
        'Material UI for modern user interface components',
        'Authentication and authorization systems',
        'Data encryption and security measures',
        'Scalable architecture for healthcare environments'
      ],
      demoUrl: 'https://omilife.co.ke',
      githubUrl: 'https://github.com/jared-solutions/omilife',
      gallery: [
        'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800',
        'https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=800',
        'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800'
      ]
    },
    {
      id: 'mkulima',
      title: '🐔 Complete Financial Management for Kenyan Poultry Farmers 🥚',
      description: 'A comprehensive financial management system designed specifically for Kenyan poultry farmers.',
      longDescription: 'Mkulima is a complete financial management platform tailored for Kenyan poultry farmers. The system helps farmers track expenses, manage income, control inventory, generate financial reports, and optimize their poultry farming operations. Built with the specific needs of Kenyan farmers in mind, it includes features for feed management, vaccination tracking, sales recording, and profit analysis.',
      image: '/uploads/cageG1.png',
      tags: ['React', 'PHP', 'MySQL', 'JavaScript'],
      features: [
        'Expense tracking and categorization',
        'Income management and recording',
        'Inventory control for feed and supplies',
        'Financial reporting and analytics',
        'Sales tracking and profit analysis',
        'Vaccination and health record management',
        'Mobile-responsive design for farm use',
        'Data export and backup capabilities'
      ],
      technologies: [
        'React.js for the frontend interface',
        'PHP for server-side processing and backend logic',
        'MySQL database for structured data storage',
        'JavaScript for interactive client-side features',
        'Chart.js for financial data visualizations',
        'Responsive design for mobile and desktop access',
        'RESTful API architecture',
        'Secure authentication and data validation'
      ],
      demoUrl: 'https://mkulima-00-afex7yfau-jareds-projects-118e8880.vercel.app/',
      githubUrl: 'https://github.com/jared-solutions/mkulima',
      gallery: [
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800'
      ]
    },
    {
      id: 'rentconnect',
      title: 'RentConnect Website',
      description: 'A platform connecting landlords and tenants with seamless property management features.',
      longDescription: 'RentConnect is a comprehensive property management platform that bridges the gap between landlords and tenants. The platform streamlines the entire rental process from property listing to lease management, rent collection, and maintenance requests. With user-friendly interfaces for both landlords and tenants, RentConnect aims to make property renting and management a hassle-free experience.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000',
      tags: ['React', 'PHP', 'MySQL'],
      features: [
        'Property listing and search functionality',
        'Online application and screening process',
        'Digital lease signing and management',
        'Secure rent payment processing',
        'Maintenance request system',
        'Landlord dashboard with financial reporting',
        'Tenant portal for managing all aspects of their rental'
      ],
      technologies: [
        'HTML5 and CSS3 for structure and styling',
        'JavaScript and React for dynamic UI components',
        'PHP for server-side processing',
        'MySQL database for data management',
        'Responsive design with Tailwind CSS',
        'File storage for documents and images',
        'Payment processing integration',
        'Email notification system'
      ],
      demoUrl: 'https://jared-solutions.github.io/Rentconnect/',
      githubUrl: 'https://github.com/jared-solutions/rentconnect',
      gallery: [
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800',
        'https://images.unsplash.com/photo-1556566229-3e3b153f4c57?q=80&w=800',
        'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=800'
      ]
    },
    {
      id: 'car-hire',
      title: 'Car Hire Application',
      description: 'A comprehensive car rental solution with booking, payment, and fleet management capabilities.',
      longDescription: 'The Car Hire Application is a full-featured platform designed to revolutionize the car rental experience. This system serves both rental companies and customers by providing an intuitive booking process, flexible payment options, and robust fleet management tools. The application prioritizes user experience with a sleek interface while ensuring administrative control and operational efficiency.',
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1000',
      tags: ['React Native', 'Firebase', 'Stripe'],
      features: [
        'Intuitive vehicle search and booking system',
        'Real-time availability calendar',
        'Secure payment processing with multiple options',
        'Driver verification and digital contracts',
        'GPS tracking and geofencing for fleet monitoring',
        'Maintenance scheduling and history tracking',
        'Customer review and loyalty program system'
      ],
      technologies: [
        'HTML5 and CSS3 for the web interface',
        'JavaScript with React for frontend development',
        'Python for backend services and data processing',
        'RESTful API architecture',
        'Firebase for real-time database and authentication',
        'Stripe for payment processing',
        'Google Maps API for location services',
        'Responsive design for mobile and desktop access'
      ],
      demoUrl: 'https://carhire-app-demo.com',
      githubUrl: 'https://github.com/jared-solutions/car-hire-app',
      gallery: [
        'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=800',
        'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800',
        'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800'
      ]
    },
    {
      id: 'gym-system',
      title: 'Gym Management System',
      description: 'Complete solution for gym owners to manage memberships, schedule classes, track attendance, and process payments.',
      longDescription: 'The Gym Management System is an all-in-one solution designed to streamline operations for fitness centers and gyms. This comprehensive platform helps gym owners manage memberships, schedule classes, track member attendance, process payments, and generate insightful reports. The system also includes a member portal where users can book classes, track their fitness progress, and manage their accounts.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000',
      tags: ['React', 'PHP', 'MySQL'],
      features: [
        'Membership management with different subscription tiers',
        'Class scheduling and attendance tracking',
        'Equipment inventory and maintenance tracking',
        'Staff scheduling and payroll integration',
        'Member portal with progress tracking',
        'Mobile app for check-ins and class bookings',
        'Comprehensive reporting dashboard'
      ],
      technologies: [
        'React for frontend development',
        'PHP for backend API',
        'MySQL database for structured data',
        'Caching and session management',
        'Authentication system',
        'Data visualization for analytics',
        'Progressive Web App capabilities'
      ],
      demoUrl: 'https://gym-system-demo.com',
      githubUrl: 'https://github.com/jared-solutions/gym-management',
      gallery: [
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800',
        'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800',
        'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=800'
      ]
    },
    {
      id: 'spa-salon',
      title: 'Spa & Salon Booking System',
      description: 'Full-featured platform for spa and salon businesses to manage appointments, staff schedules, inventory, and client relationships.',
      longDescription: 'The Spa & Salon Booking System is a comprehensive management platform tailored to the specific needs of wellness and beauty businesses. This solution streamlines appointment scheduling, staff management, inventory control, and client relationship management. With a focus on delivering exceptional customer experiences, the system offers online booking, automated reminders, loyalty programs, and detailed reporting to optimize business operations.',
      image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1000',
      tags: ['React', 'PHP', 'MySQL'],
      features: [
        '24/7 online booking system with real-time availability',
        'Staff scheduling with workload optimization',
        'Service and product inventory management',
        'Client profiles with service history and preferences',
        'Package and gift card management',
        'Automated appointment reminders via email and SMS',
        'Detailed financial and operational reporting'
      ],
      technologies: [
        'React frontend for reactive interfaces',
        'PHP for backend logic',
        'MySQL database for relational data',
        'Caching for frequently accessed data',
        'File storage for images and documents',
        'SMS notification system',
        'Responsive design for all device types'
      ],
      demoUrl: 'https://spa-salon-demo.com',
      githubUrl: 'https://github.com/jared-solutions/spa-salon-system',
      gallery: [
        'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=800',
        'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=800',
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800'
      ]
    },
    {
      id: 'sacco-system',
      title: 'SACCO Management System',
      description: 'Comprehensive financial management system for Savings and Credit Cooperative Organizations.',
      longDescription: 'The SACCO Management System is a robust financial platform specifically designed for Savings and Credit Cooperative Organizations. This enterprise-grade solution helps SACCOs manage member accounts, process loans, track savings, handle dividends, and generate regulatory reports. With a focus on security, accuracy, and compliance, the system provides both administrative tools for staff and self-service features for members.',
      image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=1000',
      tags: ['React', 'Java', 'MySQL'],
      features: [
        'Member registration and account management',
        'Savings accounts with multiple product types',
        'Loan application, approval, and management workflow',
        'Automated dividend calculation and distribution',
        'Regulatory compliance reporting',
        'Member self-service portal',
        'Integrated accounting system',
        'Audit trail and security controls'
      ],
      technologies: [
        'React frontend framework for dynamic UIs',
        'Java for backend services',
        'MySQL database for enterprise-grade data storage',
        'Message queuing system',
        'Report generation for financial statements',
        'Authentication and security measures',
        'Scalable deployment architecture'
      ],
      demoUrl: 'https://sacco-system-demo.com',
      githubUrl: 'https://github.com/jared-solutions/sacco-system',
      gallery: [
        'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=800',
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800',
        'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=800'
      ]
    }
  ];
  
  useEffect(() => {
    // Simulate fetching project data
    setIsLoading(true);
    setTimeout(() => {
      const foundProject = projects.find(p => p.id === id) || null;
      setProject(foundProject);
      setIsLoading(false);
    }, 500);
  }, [id]);
  
  if (isLoading) {
    return (
      <>
        <Navbar />
        <main className="pt-20 min-h-screen bg-background text-foreground">
          <div className="container mx-auto px-4 py-12">
            <div className="flex justify-center items-center h-64">
              <div className="animate-pulse text-green-500">Loading project details...</div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  
  if (!project) {
    return (
      <>
        <Navbar />
        <main className="pt-20 min-h-screen bg-background text-foreground">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground mb-4">Project Not Found</h1>
              <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist or has been removed.</p>
              <Link 
                to="/projects" 
                className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded-full font-medium inline-flex items-center"
              >
                <ArrowLeft size={18} className="mr-2" /> Back to Projects
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-background">
        {/* Hero Section */}
        <section 
          className="relative h-[40vh] md:h-[50vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{project.title}</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-sm font-medium px-3 py-1 rounded-full bg-green-500/20 text-green-400 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xl text-white/90 max-w-3xl">{project.description}</p>
            </div>
          </div>
        </section>
        
        {/* Project Details */}
        <section className="py-16 bg-background text-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.longDescription}
                  </p>
                </div>
                
                {project.gallery && (
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-6">Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.gallery.map((image, index) => (
                        <div key={index} className="rounded-lg overflow-hidden shadow-md">
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="w-full h-auto"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Features</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Technologies</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {project.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-card p-6 rounded-lg shadow-md sticky top-28 border border-border">
                  <h3 className="text-xl font-bold text-card-foreground mb-6 pb-4 border-b border-border">Project Information</h3>

                  <div className="space-y-6">
                    {/* Project Status */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-card-foreground">Status</span>
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-400">
                        Completed
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-500 hover:bg-green-600 w-full py-3 rounded-lg font-medium inline-flex items-center justify-center text-black transition-colors"
                        >
                          <ExternalLink size={18} className="mr-2" />
                          Live Demo
                        </a>
                      )}
                    </div>

                    <div className="pt-6 border-t border-border">
                      <h4 className="font-medium text-card-foreground mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="text-sm px-3 py-1 rounded-full bg-muted text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Link 
                to="/projects" 
                className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full font-medium inline-flex items-center text-black"
              >
                <ArrowLeft size={18} className="mr-2" /> Back to Projects
              </Link>
            </div>
          </div>
        </section>
        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetail;
