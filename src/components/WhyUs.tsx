import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const WhyUs = () => {
  const benefits = [
    "מומחיות מובילה בתחום האוטומציה",
    "תמיכת לקוחות 24/7",
    "פתרונות מותאמים אישית",
    "יכולות אינטגרציה מלאות",
    "הוכחת הצלחה מוכחת",
    "חדשנות ועדכונים מתמשכים",
  ];

  return (
    <section className="py-20 bg-white" id="why-us">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">למה לבחור בנו?</h2>
            <p className="text-gray-600 mb-8">
              אנו משלבים מומחיות, חדשנות ומסירות כדי לספק את פתרונות האוטומציה הטובים ביותר עבור העסק שלכם
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="text-primary-light w-5 h-5" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
              alt="שיתוף פעולה בצוות"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};