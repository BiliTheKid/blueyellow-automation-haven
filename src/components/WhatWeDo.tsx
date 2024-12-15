import { motion } from "framer-motion";
import { Zap, Settings, Users } from "lucide-react";

export const WhatWeDo = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automation Solutions",
      description: "We streamline your business processes with cutting-edge automation tools",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Integration Services",
      description: "Seamlessly connect your favorite tools and platforms",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Engagement",
      description: "Enhance your customer relationships through automated communication",
    },
  ];

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
          <p className="text-gray-600 max-w-2xl mx-auto">
            We specialize in creating automated solutions that help businesses grow and operate more efficiently
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-primary-light/10 p-3 rounded-lg inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};