import { motion } from "framer-motion";

export const OurTools = () => {
  const tools = [
    {
      name: "Salesforce",
      description: "CRM Integration",
      icon: "https://www.salesforce.com/news/wp-content/uploads/sites/3/2021/05/Salesforce-logo.jpg",
    },
    {
      name: "ManyChat",
      description: "Chat Automation",
      icon: "https://assets.website-files.com/5daaade3e3e3f04da71daa8e/5daaade3e3e3f0b11f1daa9c_manychat_logo_square.png",
    },
    {
      name: "WordPress",
      description: "Content Management",
      icon: "https://s.w.org/style/images/about/WordPress-logotype-standard.png",
    },
    {
      name: "Google Drive",
      description: "Cloud Storage",
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg",
    },
    {
      name: "Telegram",
      description: "Messaging Platform",
      icon: "https://telegram.org/img/t_logo.png",
    },
    {
      name: "HubSpot",
      description: "Marketing Automation",
      icon: "https://www.hubspot.com/hubfs/assets/hubspot.com/style-guide/brand-guidelines/guidelines_the-logo.svg",
    },
    {
      name: "Zapier",
      description: "Workflow Automation",
      icon: "https://cdn.zapier.com/zapier/images/logos/zapier-logo.png",
    },
    {
      name: "Airtable",
      description: "Database Management",
      icon: "https://www.airtable.com/images/favicon/apple-touch-icon.png",
    },
    {
      name: "Slack",
      description: "Team Communication",
      icon: "https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png",
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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