import { motion } from "framer-motion";

export const OurTools = () => {
  const tools = [
    {
      name: "CRM Integration",
      description: "Connect with popular CRM platforms",
      icon: "https://cdn-icons-png.flaticon.com/512/3059/3059997.png",
    },
    {
      name: "Python Automation",
      description: "Powerful backend processing",
      icon: "https://www.python.org/static/community_logos/python-logo-generic.svg",
    },
    {
      name: "ManyChat",
      description: "Advanced chat automation",
      icon: "https://assets.website-files.com/5daaade3e3e3f04da71daa8e/5daaade3e3e3f0b11f1daa9c_manychat_logo_square.png",
    },
    {
      name: "WhatsApp Business",
      description: "Direct customer communication",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="our-tools">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Our Tools</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We use industry-leading tools and technologies to power your automation
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <img src={tool.icon} alt={tool.name} className="w-16 h-16 mx-auto mb-4 object-contain" />
              <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
              <p className="text-gray-600 text-sm">{tool.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};