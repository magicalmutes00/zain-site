import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheck, FiInfo, FiAlertCircle, FiArrowRight } from 'react-icons/fi';

const contactMethods = [
  {
    icon: FiPhone,
    title: 'Call Us',
    description: 'Available 24/7 for emergencies',
    items: [
      { label: 'Main Line:', value: '+968 - 92144367' },
      { label: 'Emergency:', value: '+968 - 92144367' },
      { label: 'Office:', value: '+968 - 71744429' },
    ],
  },
  {
    icon: FiMail,
    title: 'Email Us',
    description: 'We respond within 2 hours',
    items: [
      { label: 'General:', value: 'info@zaintechoman.com' },
      { label: 'Projects:', value: 'zainprojectsoman@gmail.com' },
      { label: 'Support:', value: 'support@zaintechoman.com' },
    ],
  },
  {
    icon: FiMapPin,
    title: 'Visit Us',
    description: 'Stop by our office anytime',
    items: [
      { label: 'City:', value: 'Barka, South Al Batinah' },
      { label: 'Postal:', value: 'PO Box: 124, Code: 122' },
      { label: 'Landmark:', value: 'Near ROP Barka' },
    ],
  },
];

const faqItems = [
  {
    q: 'How quickly can you respond to emergency calls?',
    a: 'We respond to emergency calls within 15-30 minutes during business hours and within 1 hour during off-hours.',
  },
  {
    q: 'Do you provide free consultations?',
    a: 'Yes! We offer free consultations for all new projects to understand your requirements and provide accurate quotes.',
  },
  {
    q: 'What areas do you service?',
    a: 'We service Barka and surrounding areas in South Al Batinah, with special arrangements for other regions.',
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Yes, we offer flexible payment plans for large projects. Contact us to discuss options.',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter a message';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', service: '', message: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="pt-20">
      {/* Emergency Hotline Banner */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-red-500 to-red-600 text-white py-6 relative overflow-hidden"
      >
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 opacity-10"
        >
          <div className="text-6xl">🚨</div>
        </motion.div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FiPhone className="text-3xl" />
              </motion.div>
              <div>
                <h3 className="font-bold text-xl">24/7 Emergency Hotline</h3>
                <p className="opacity-90 text-sm">Immediate assistance for urgent service requests</p>
              </div>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="tel:+96892144367"
              className="bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all"
            >
              Call Now: +968 - 92144367
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Success Message */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-green-500 text-white py-4 text-center"
          >
            <div className="container-custom flex items-center justify-center gap-3">
              <FiCheck className="text-2xl" />
              <div>
                <p className="font-bold">Thank you! Your message has been sent successfully.</p>
                <p className="text-sm opacity-90">We will contact you shortly.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Section */}
      <section className="section-padding bg-gradient-to-r from-secondary to-[#1b4f72] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, linear: true }}
            className="absolute top-10 right-10 text-6xl"
          >
            💬
          </motion.div>
        </div>
        <div className="container-custom text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get In Touch
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 150 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 bg-primary rounded mx-auto mb-4"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Have a project in mind? We're here to help! Reach out to us for consultations, quotes, or emergency assistance.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Contact Information</h2>
            <p className="text-gray-600">Multiple ways to reach us - choose what works best for you.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.02, y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <method.icon className="text-primary text-3xl" />
                  </div>
                </motion.div>
                <h3 className="font-bold text-xl text-secondary mb-2">{method.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                <div className="space-y-2">
                  {method.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex justify-between items-center"
                    >
                      <span className="text-gray-600 text-sm">{item.label}</span>
                      <span className="font-semibold text-primary">{item.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 border-l-4 border-primary"
            >
              <h2 className="text-2xl font-bold text-secondary mb-2">Send us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-secondary font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                  />
                  <AnimatePresence>
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-red-500 text-sm mt-1 flex items-center gap-1"
                      >
                        <FiAlertCircle size={14} /> {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-secondary font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                  />
                  <AnimatePresence>
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-red-500 text-sm mt-1 flex items-center gap-1"
                      >
                        <FiAlertCircle size={14} /> {errors.email}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Service */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-secondary font-semibold mb-2">Interested Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  >
                    <option value="">Select a service...</option>
                    <option value="fire-safety">Fire Safety Installation</option>
                    <option value="plumbing">Plumbing & Water Systems</option>
                    <option value="electrical">Electrical Works</option>
                    <option value="general">General Contracting</option>
                    <option value="maintenance">Maintenance Services</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-secondary font-semibold mb-2">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, specific requirements, timeline, or any questions..."
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none`}
                  ></textarea>
                  <AnimatePresence>
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-red-500 text-sm mt-1 flex items-center gap-1"
                      >
                        <FiAlertCircle size={14} /> {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary to-[#e67e22] text-white py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend /> Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Location & Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Location Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden h-80"
              >
                <div className="bg-secondary text-white px-6 py-4 flex items-center gap-2">
                  <FiMapPin className="text-primary text-xl" />
                  <span className="font-bold">Our Location</span>
                </div>
                <div
                  className="h-80 w-full bg-cover bg-center flex items-center justify-center relative"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)',
                  }}
                >
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="relative z-10 text-center text-white">
                    <FiMapPin className="text-6xl text-primary mx-auto mb-2" />
                    <p className="font-bold text-lg">Barka, South Al Batinah</p>
                  </div>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-6 border-l-4 border-primary"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FiClock className="text-primary text-2xl" />
                  <h3 className="font-bold text-lg text-secondary">Working Hours</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-between"
                  >
                    <span className="font-semibold">Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-between"
                  >
                    <span className="font-semibold">Saturday:</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-between text-red-500"
                  >
                    <span className="font-semibold">Sunday:</span>
                    <span>Closed</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="flex justify-between pt-2 border-t text-primary font-semibold"
                  >
                    <span>24/7 Emergency:</span>
                    <span>+968 - 92144367</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Info Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl shadow-lg p-6 border-l-4 border-primary"
              >
                <div className="flex items-center gap-3 mb-3">
                  <FiInfo className="text-primary text-xl" />
                  <h3 className="font-bold text-lg text-secondary">Quick Tip</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  For the fastest response to emergencies, please call us directly at <span className="font-bold text-primary">+968 - 92144367</span>. 
                  For non-urgent inquiries, email us or fill out this form, and we'll respond within 2 hours.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Can't find what you're looking for? Reach out to us directly.</p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left font-semibold text-secondary flex items-center justify-between hover:bg-gray-50 transition-all"
                >
                  <span>{item.q}</span>
                  <motion.div
                    animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiArrowRight className="text-primary" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {expandedFAQ === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4 text-gray-600 border-t"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}