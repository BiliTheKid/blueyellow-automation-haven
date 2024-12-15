import { motion } from "framer-motion";

export const WhatWeDo = () => {
  return (
    <section className="py-20 bg-white" id="what-we-do">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">What We Do</h2>
          <div className="max-w-3xl mx-auto text-gray-600 space-y-6">
            <p className="text-lg leading-relaxed">
              As in our past, not only did we help ecom companies succeed in managing and operating their businesses...we also had our own brands...we are aware of the many challenges and how technology can help you business owners earn more money, have more satisfaction and most importantly know what is happening in your business.
            </p>
            <p className="text-lg font-medium text-primary">
              Automated WhatsApp Support Example
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};