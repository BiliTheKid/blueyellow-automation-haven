import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 bg-primary-light/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-primary-yellow/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
              Contact Us
            </span>
            <h2 className="text-4xl font-bold text-primary mb-4">
              Let's Discuss Your Automation Needs
            </h2>
            <p className="text-gray-600">
              Get in touch with our team of automation experts
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Send us a message
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-light/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-light/50"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-light/50"
                    rows={4}
                    placeholder="How can we help you?"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:shadow-lg transition-shadow duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary-light" />
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">contact@automation.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary-light" />
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary-light" />
                  <div>
                    <h4 className="font-medium text-gray-900">Location</h4>
                    <p className="text-gray-600">
                      123 Automation Street
                      <br />
                      Tech City, TC 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};