import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiShield, FiAward, FiClock, FiTool, FiHome, FiTruck, FiSettings, FiArrowRight, FiUsers, FiCheckCircle, FiStar, FiTrendingUp } from 'react-icons/fi';
import Hero from '../components/Hero';

const services = [
  { icon: FiTool, title: 'General Contracting', desc: 'Full-service construction management from start to finish.' },
  { icon: FiHome, title: 'Renovations', desc: 'Modernizing and upgrading your existing spaces with minimal disruption.' },
  { icon: FiTruck, title: 'Logistics', desc: 'Efficient supply chain and delivery solutions tailored for industry.' },
  { icon: FiSettings, title: 'Maintenance', desc: 'Reliable ongoing support and repair services for all infrastructure.' },
];

const policies = [
  {
    icon: FiAward,
    title: 'Quality Policy',
    desc: 'We are dedicated to providing products and services that consistently meet or exceed customer requirements and applicable regulatory standards.',
    btnText: 'Read Full Policy',
  },
  {
    icon: FiShield,
    title: 'Safety Policy',
    desc: 'We maintain a safe workplace for employees, visitors, and contractors, and we comply with all relevant health and safety regulations.',
    btnText: 'Safety Guidelines',
  },
];

const stats = [
  { icon: FiUsers, label: 'Happy Clients', value: '1,500+' },
  { icon: FiCheckCircle, label: 'Projects Completed', value: '800+' },
  { icon: FiTrendingUp, label: 'Years of Experience', value: '9+' },
  { icon: FiStar, label: 'Client Satisfaction', value: '98%' },
];

const testimonials = [
  {
    name: 'Ahmed Al-Mansouri',
    role: 'Business Owner',
    text: 'Exceptional service and professionalism. They completed our office renovation ahead of schedule and within budget.',
    rating: 5,
  },
  {
    name: 'Fatima Al-Zahra',
    role: 'Homeowner',
    text: 'The team was responsive, courteous, and incredibly skilled. I would definitely recommend them to anyone.',
    rating: 5,
  },
  {
    name: 'Mohammed Al-Balushi',
    role: 'Facility Manager',
    text: 'Outstanding maintenance services. Their team keeps our facility running smoothly 24/7.',
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function Home() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  return (
    <div className="bg-pattern">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-secondary to-[#1b4f72] text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="inline-block mb-3"
                >
                  <stat.icon className="text-4xl text-primary" />
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-1 bg-primary rounded mx-auto mb-4"
            ></motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Who We Are</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Since 2015, we have been delivering top-tier services to our community.
              Our ethos is built on a foundation of integrity and hard work. We believe
              in transparent communication and exceeding expectations. With over 800 successful projects,
              we've earned the trust of businesses and homeowners throughout the region.
            </p>
          </motion.div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: FiShield, title: 'Safety First', desc: 'Our top priority is ensuring a safe environment for everyone involved.' },
              { icon: FiAward, title: 'Quality Matters', desc: 'We adhere to strict quality control standards on every project.' },
              { icon: FiClock, title: 'On-Time Reliability', desc: 'We respect your time and deliver projects within the agreed timeline.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="text-primary text-3xl" />
                </div>
                <h3 className="font-bold text-xl text-secondary mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Commitment</h2>
            <p className="text-gray-600">
              Established policies to guide our operations and ensure customer satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {policies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <policy.icon className="text-primary text-4xl mb-4" />
                <h3 className="font-bold text-xl text-secondary mb-3">{policy.title}</h3>
                <p className="text-gray-600 mb-4">{policy.desc}</p>
                <button className="text-primary font-semibold hover:underline flex items-center gap-2">
                  {policy.btnText} <FiArrowRight />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Core Services</h2>
            <p className="text-gray-600">
              Comprehensive solutions designed to meet your specific business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="card-futuristic"
              >
                <div className="p-6 text-center h-full flex flex-col">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center border-t-4 border-primary">
                    <service.icon className="text-primary text-2xl" />
                  </div>
                  <h3 className="font-bold text-lg text-secondary mb-2">{service.title}</h3>
                  <p className="text-gray-600 flex-grow">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link to="/services" className="btn-primary-custom inline-flex items-center gap-2">
              View All Services <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Remove duplicate */}
      
      {/* Testimonials Section */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Client Testimonials</h2>
            <p className="text-gray-600">
              Hear what our satisfied clients have to say about working with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setSelectedTestimonial(index)}
                className="bg-gray-50 rounded-2xl p-8 cursor-pointer transition-all hover:shadow-lg border-l-4 border-primary"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-primary text-lg"
                    >
                      ★
                    </motion.span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="border-t pt-4"
                >
                  <p className="font-bold text-secondary">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: '15+', label: 'Years Experience' },
              { number: '1,500+', label: 'Happy Clients' },
              { number: '800+', label: 'Projects Completed' },
              { number: '50+', label: 'Expert Team Members' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-[#e67e22] rounded-3xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Contact us today for a free consultation. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all">
                Get a Quote
              </Link>
              <Link to="/about" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-all">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}