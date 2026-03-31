
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xjgknzgp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-portfolio-navy mb-4">Get In Touch</h1>
              <div className="h-1 w-20 bg-portfolio-burgundy mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                I'm interested in freelance opportunities, full-time positions, and interesting projects.
                If you have any questions or want to discuss potential collaborations, feel free to reach out!
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <h2 className="text-2xl font-bold text-portfolio-navy mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-portfolio-burgundy/10 p-3 rounded-full mr-4">
                        <Mail className="text-portfolio-burgundy" size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-portfolio-navy mb-1">Email</h3>
                        <p className="text-gray-600">ombongijared2@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-portfolio-burgundy/10 p-3 rounded-full mr-4">
                        <Phone className="text-portfolio-burgundy" size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-portfolio-navy mb-1">Phone</h3>
                        <p className="text-gray-600">+254 710 464 858</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-portfolio-burgundy/10 p-3 rounded-full mr-4">
                        <MapPin className="text-portfolio-burgundy" size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-portfolio-navy mb-1">Location</h3>
                        <p className="text-gray-600">Nairobi, Kenya</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <img 
                      src="/uploads/image2.png" 
                      alt="Professional portrait" 
                      className="rounded-lg w-48 object-cover shadow"
                    />
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <form
                  action="https://formspree.io/f/xjgknzgp"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
                >
                  <h2 className="text-2xl font-bold text-portfolio-navy mb-6">Send Me a Message</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        minLength={2}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-burgundy bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Your email"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        pattern="[0-9+\s\-]{10,}"
                        minLength={10}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-burgundy"
                      placeholder="Message subject"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-burgundy resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gradient px-8 py-3 rounded-lg font-medium inline-flex items-center"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Message <Send size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="h-[400px] bg-gray-100 mt-12">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853771843!2d36.707308359992174!3d-1.3028617927512838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1710293188180!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
