import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAlertCircle, FiZap, FiDroplet, FiHome, FiTool, FiTrendingUp, FiCheckCircle, FiClock, FiMessageCircle, FiArrowRight, FiShield, FiInfo } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'fire-safety',
    title: 'Fire Safety',
    icon: FiAlertCircle,
    description: 'Complete fire safety solutions with certified professionals',
    services: [
      { title: 'Fire Safety Installation', desc: 'Complete installation of fire alarms, suppression systems, and emergency exits to ensure compliance and safety.' },
      { title: 'Safety Inspections', desc: 'Regular audits and inspections to identify potential hazards and ensure regulatory compliance.' },
      { title: 'Fire Alarm Monitoring', desc: '24/7 monitoring and alerting services for your fire safety systems.' },
      { title: 'Emergency Evacuation Planning', desc: 'Comprehensive evacuation plans tailored to your building layout.' },
    ],
  },
  {
    id: 'plumbing',
    title: 'Plumbing',
    icon: FiDroplet,
    description: 'Expert plumbing solutions for residential and commercial properties',
    services: [
      { title: 'Installation & Repair', desc: 'Expert plumbing services for residential and commercial properties, from leaks to complete system overhauls.' },
      { title: 'Emergency Services', desc: '24/7 emergency response for burst pipes, severe leaks, or water heater failures.' },
      { title: 'System Maintenance', desc: 'Preventive maintenance to keep your plumbing systems running efficiently.' },
      { title: 'Water Treatment Solutions', desc: 'Advanced water filtration and treatment systems for clean, safe water.' },
    ],
  },
  {
    id: 'electrical',
    title: 'Electrical',
    icon: FiZap,
    description: 'Professional electrical services with certified technicians',
    services: [
      { title: 'Electrical Installation', desc: 'Professional electrical wiring and installation for all types of properties.' },
      { title: 'Maintenance & Repairs', desc: 'Comprehensive electrical maintenance and repair services.' },
      { title: 'Panel Upgrades', desc: 'Modern electrical panel installations and upgrades for safety and efficiency.' },
      { title: 'Energy Audit & Optimization', desc: 'Analysis and optimization of your electrical systems to reduce costs.' },
    ],
  },
  {
    id: 'general',
    title: 'General Contracting',
    icon: FiTool,
    description: 'Comprehensive construction and renovation services',
    services: [
      { title: 'Renovations', desc: 'Transform your space with our expert renovation services, including kitchens, bathrooms, and offices.' },
      { title: 'Home Automation', desc: 'Smart home integration for security, lighting, and climate control systems.' },
      { title: 'Custom Builds', desc: 'Complete custom construction projects tailored to your specifications.' },
      { title: 'Project Management', desc: 'Full project oversight from planning through completion.' },
    ],
  },
];

const process = [
  {
    icon: FiMessageCircle,
    title: 'Consultation',
    desc: 'We start with a thorough consultation to understand your needs, budget, and timeline.',
    details: 'Our experts listen carefully to your requirements and provide honest recommendations.',
  },
  {
    icon: FiTrendingUp,
    title: 'Planning & Strategy',
    desc: 'Our experts create a detailed roadmap, including permits, materials, and project milestones.',
    details: 'We develop a comprehensive plan with clear timelines and cost estimates.',
  },
  {
    icon: FiClock,
    title: 'Execution',
    desc: 'Our team executes the plan with precision, maintaining clear communication throughout.',
    details: 'Professional execution with regular updates and adherence to schedules.',
  },
];

const benefits = [
  { icon: FiCheckCircle, title: 'Quality Assurance', desc: 'ISO certified processes ensuring highest standards' },
  { icon: FiShield, title: 'Safety First', desc: 'All work meets and exceeds safety regulations' },
  { icon: FiTrendingUp, title: 'Proven Track Record', desc: 'Over 800 successful projects completed' },
  { icon: FiClock, title: 'On-Time Delivery', desc: 'We respect deadlines and deliver on schedule' },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('fire-safety');
  const [expandedBenefit, setExpandedBenefit] = useState(null);
  const currentCategory = categories.find((c) => c.id === activeCategory);

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-r from-secondary to-[#1b4f72] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-10 right-10 text-6xl"
          >
            🔧
          </motion.div>
        </div>
        <div className="container-custom text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Professional Services
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 bg-primary rounded mx-auto mb-4"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Comprehensive solutions tailored to your specific needs. Quality you can trust, guaranteed.
          </motion.p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Category Info */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-8 bg-white rounded-2xl p-6 shadow-md"
          >
            <p className="text-gray-600 text-lg">{currentCategory?.description}</p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-secondary border-2 border-secondary hover:bg-secondary hover:text-white'
                }`}
              >
                <category.icon className="inline-block mr-2" />
                {category.title}
              </motion.button>
            ))}
          </div>

          {/* Services Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {currentCategory?.services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-t-4 border-primary group cursor-pointer"
                  >
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                      className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all"
                    >
                      {currentCategory && <currentCategory.icon className="text-primary text-2xl" />}
                    </motion.div>
                    <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all group-hover:text-primary"
                    >
                      Learn More <FiArrowRight />
                    </motion.button>
                  </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-1 bg-primary rounded mx-auto mb-4"
            ></motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Why Choose Us</h2>
            <p className="text-gray-600">Benefits that set us apart from the competition.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setExpandedBenefit(expandedBenefit === index ? null : index)}
                className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.15 }}
                >
                  <benefit.icon className="text-primary text-4xl mb-3" />
                </motion.div>
                <h3 className="font-bold text-lg text-secondary mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-1 bg-primary rounded mx-auto mb-4"
            ></motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">How We Get It Done</h2>
            <p className="text-gray-600">Our proven 3-step process ensures quality and efficiency.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.03, y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all relative"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-3xl"
                ></motion.div>
                <div className="relative z-10">
                  <step.icon className="text-primary text-4xl mb-4" />
                  <div className="inline-block mb-3 px-3 py-1 bg-primary/10 rounded-full">
                    <span className="text-primary font-bold">Step {index + 1}</span>
                  </div>
                  <h3 className="font-bold text-xl text-secondary mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-3">{step.desc}</p>
                  <p className="text-gray-500 text-sm italic">{step.details}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/contact" className="btn-primary-custom inline-flex items-center gap-2">
              Start Your Project Today <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* All Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-1 bg-primary rounded mx-auto mb-4"
            ></motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Complete Service List</h2>
            <p className="text-gray-600">Explore the comprehensive range of services we offer.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: FiAlertCircle, title: 'Fire Safety Installation' },
              { icon: FiAlertCircle, title: 'Fire Alarm Systems' },
              { icon: FiDroplet, title: 'Plumbing Services' },
              { icon: FiZap, title: 'Electrical Works' },
              { icon: FiTool, title: 'General Contracting' },
              { icon: FiHome, title: 'Home Automation' },
              { icon: FiTool, title: 'Renovations & Upgrades' },
              { icon: FiClock, title: '24/7 Emergency Service' },
              { icon: FiCheckCircle, title: 'Maintenance Contracts' },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, x: 5 }}
                className="bg-gray-50 rounded-xl p-5 shadow-md hover:shadow-lg transition-all flex items-center gap-4 border-l-4 border-primary"
              >
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                >
                  <service.icon className="text-primary text-2xl flex-shrink-0" />
                </motion.div>
                <span className="font-semibold text-secondary">{service.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-[#e67e22] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, linear: true }}
            className="absolute top-10 right-10 text-6xl"
          >
            💡
          </motion.div>
        </div>
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Every project is unique. Contact us to discuss your specific requirements and get a personalized quote.
            </p>
            <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all inline-flex items-center gap-2">
              Get in Touch <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}