import { motion } from "framer-motion";

export const Results = () => {
  const testimonials = [
    {
      name: "ירדן זלוף",
      company: "אלמנטס בניה בע\"מ",
      content: "פתרונות האוטומציה שסופקו שינו את פעילות שירות הלקוחות שלנו. ראינו עלייה של 40% ביעילות התגובה.",
      image: "/lovable-uploads/56ce3c55-b288-46b8-9d97-65053dd47b8f.png",
    },
    {
      name: "אביב חכם",
      company: "הבית ברחוב מנדלי מוס בע\"מ",
      content: "יישום האוטומציה של WhatsApp עזר לנו לשמור על תמיכת לקוחות 24/7 מבלי להגדיל את הצוות שלנו.",
      image: "/lovable-uploads/4e3629be-8a17-43b0-813f-4654adba5457.png",
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
          <h2 className="text-4xl font-bold text-primary mb-4">סיפורי הצלחה</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ראו כיצד השותפים שלנו השיגו תוצאות מרשימות עם פתרונות האוטומציה שלנו
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