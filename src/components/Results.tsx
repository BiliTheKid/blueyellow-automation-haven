import { motion } from "framer-motion";

export const Results = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Solutions Inc.",
      content: "The automation solutions provided have transformed our customer service operations. We've seen a 40% increase in response efficiency.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    },
    {
      name: "Michael Chen",
      company: "Global Retail Co.",
      content: "Implementing their WhatsApp automation has helped us maintain 24/7 customer support without increasing our team size.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-white" id="results">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how our partners have achieved remarkable results with our automation solutions
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};