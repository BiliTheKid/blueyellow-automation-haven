import { motion } from "framer-motion";
import { Settings, Zap, BarChart } from "lucide-react";

const services = [
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Process Automation",
    description: "Streamline your workflows and eliminate repetitive tasks",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Smart Integration",
    description: "Connect your systems seamlessly with intelligent automation",
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Performance Analytics",
    description: "Track and optimize your automated processes in real-time",
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-primary-yellow/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
            Our Services
          </span>
          <h2 className="text-4xl font-bold text-primary mb-4">
            Comprehensive Automation Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our services can transform your business operations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-primary-light/10 p-4 rounded-lg inline-block mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};