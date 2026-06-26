import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiCheckCircle, FiArrowRight, FiBriefcase, FiAward, FiTarget, FiLayers } from 'react-icons/fi';

const team = [
  { name: 'John Smith', role: 'Founder & CEO', experience: 'Visionary leader with 20+ years in the industry' },
  { name: 'Sarah Johnson', role: 'Project Manager', experience: 'Expert project coordinator with proven track record' },
  { name: 'Michael Chen', role: 'Lead Engineer', experience: 'Technical innovator leading our engineering team' },
  { name: 'Emily Davis', role: 'Customer Success', experience: 'Dedicated to ensuring every client is satisfied' },
];

const milestones = [
  { year: '1998', title: 'Company Founded', desc: 'Started with a vision to transform the industry' },
  { year: '2005', title: 'Regional Expansion', desc: 'Expanded operations across multiple regions' },
  { year: '2012', title: '500 Projects', desc: 'Celebrated milestone of completing 500 successful projects' },
  { year: '2018', title: 'Certification Achieved', desc: 'Obtained ISO 9001 and Safety certifications' },
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

export default function About() {
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
            🏢
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-10 left-10 text-6xl"
          >
            ⚙️
          </motion.div>
        </div>
        <div className="container-custom text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About ZAIN
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 bg-primary rounded mx-auto mb-4"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Your trusted partner for professional technical services in Oman since 1998.
            Building excellence one project at a time.
          </motion.p>
        </div>
      </section>

      {/* Company History */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 80 }}
            >
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              >
                Our Journey Since 1998
              </motion.h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="w-24 h-1 bg-primary rounded mb-6"
              ></motion.div>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                Founded in a small garage with two tools and a dream, our company has grown into a trusted name in the industry.
                What started as a small family operation has evolved into a comprehensive service provider serving thousands of clients.
              </p>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                We started by focusing on residential repairs and quickly expanded our expertise to commercial projects. Our commitment 
                to quality, safety, and customer satisfaction has allowed us to serve over 1,500 happy clients and complete more than 
                800 successful projects.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                We believe that every job, big or small, deserves our full attention and expertise. This philosophy has made us the 
                preferred choice for thousands of families and businesses.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary-custom inline-flex items-center gap-2"
              >
                Read Our Full Story <FiArrowRight />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 80 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="bg-gray-100 rounded-2xl p-4 shadow-xl"
              >
                <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <FiBriefcase className="text-gray-400 text-6xl mx-auto mb-4" />
                    <span className="text-gray-400 text-lg">Company History Image</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Journey</h2>
            <p className="text-gray-600">Key milestones in our growth and development.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border-l-4 border-primary"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="text-3xl font-bold text-primary mb-3"
                >
                  {milestone.year}
                </motion.div>
                <h3 className="font-bold text-lg text-secondary mb-2">{milestone.title}</h3>
                <p className="text-gray-600 text-sm">{milestone.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 shadow-lg border-l-4 border-primary"
            >
              <motion.div
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-4"
              >
                <FiTarget className="text-primary text-4xl" />
              </motion.div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver exceptional technical services that exceed customer expectations while maintaining the highest
                standards of safety, quality, and professionalism. We strive to be the most trusted name in the industry,
                creating lasting relationships built on reliability and excellence.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-8 shadow-lg border-l-4 border-secondary"
            >
              <motion.div
                animate={{ rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="inline-block mb-4"
              >
                <FiLayers className="text-secondary text-4xl" />
              </motion.div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading provider of integrated technical services in the region, recognized for our
                innovation, reliability, and commitment to sustainable development. We envision a future where
                our services make a positive impact on every community we serve.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Core Values</h2>
            <p className="text-gray-600">The principles that guide everything we do.</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: FiCheckCircle, title: 'Integrity', desc: 'We conduct our business with honesty and transparency in all dealings.' },
              { icon: FiAward, title: 'Excellence', desc: 'We strive for the highest quality in every aspect of our work.' },
              { icon: FiArrowRight, title: 'Safety', desc: 'We prioritize the wellbeing of our team, clients, and communities.' },
              { icon: FiTarget, title: 'Innovation', desc: 'We embrace new technologies and continuously improve our methods.' },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="inline-block mb-3"
                >
                  <value.icon className="text-primary text-4xl" />
                </motion.div>
                <h3 className="font-bold text-lg text-secondary mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet the Team */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Meet the Team</h2>
            <p className="text-gray-600">The experienced professionals behind our success.</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                <motion.div
                  animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:bg-primary/10 transition-all"
                >
                  <FiUser className="text-gray-400 text-6xl group-hover:text-primary transition-colors" />
                </motion.div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg text-secondary">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.experience}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="section-padding bg-gradient-to-r from-secondary to-[#1b4f72] text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            {[
              { number: '800+', label: 'Projects Completed' },
              { number: '1,500+', label: 'Happy Clients' },
              { number: '50+', label: 'Team Members' },
              { number: '25+', label: 'Years Experience' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
            </motion.div>
          </div>
      </section>
    </div>
  );
}