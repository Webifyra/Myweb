import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: '🛒',
      title: 'Amazon Services',
      description: 'Product listing, optimization, PPC campaigns, and account management',
      path: '/services/amazon',
      color: '#FF9900',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
    },
    {
      icon: '🛍️',
      title: 'Shopify Services',
      description: 'Store creation and comprehensive account management',
      path: '/services/shopify',
      color: '#96BF48',
      logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg'
    },
    {
      icon: '🎯',
      title: 'Meta Ads',
      description: 'Facebook & Instagram campaigns with advanced targeting',
      path: '/services/meta-ads',
      color: '#1877F2',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg'
    },
    {
      icon: '📱',
      title: 'Social Media Marketing',
      description: 'Content creation, scheduling, and growth management',
      path: '/services/social-media',
      color: '#E1306C',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png'
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Business websites, landing pages, and admin panels',
      path: '/services/web-development',
      color: '#61DAFB',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
    {
      icon: '🎬',
      title: 'UGC Content Creation',
      description: 'AI-based avatar reviews and personalized video content',
      path: '/services/ugc-content',
      color: '#FF0000',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#022877] mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business presence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.path}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={service.path} className="block group">
                <div className="bg-white rounded-xl p-8 shadow-lg hover-lift card-3d border border-gray-100 h-full">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden"
                    style={{ backgroundColor: `${service.color}20` }}
                  >
                    <img 
                      src={service.logo}
                      alt={`${service.title} logo`}
                      className="w-8 h-8 object-contain"
                      style={{ filter: `brightness(0) saturate(100%) invert(0%) sepia(100%) saturate(7500%) hue-rotate(${service.color === '#FF9900' ? '35deg' : service.color === '#96BF48' ? '80deg' : service.color === '#1877F2' ? '220deg' : service.color === '#E1306C' ? '320deg' : service.color === '#61DAFB' ? '180deg' : '0deg'}) brightness(1)` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 rounded-lg"></div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-[#022877] mb-4 group-hover:text-[#05ccc2] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-[#05ccc2] font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};