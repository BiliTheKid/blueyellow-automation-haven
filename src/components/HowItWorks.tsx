import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "זיהוי הבעיה",
      description: "אנו מנתחים את תהליכי העסק שלכם כדי לזהות תחומים לשיפור",
    },
    {
      number: "02",
      title: "הגדרת פתרון מותאם אישית",
      description: "אנו מפתחים ומיישמים פתרונות אוטומציה מותאמים לצרכים שלכם",
    },
    {
      number: "03",
      title: "השקה ומעקב",
      description: "התחלת האוטומציה ומעקב אחר התוצאות בזמן אמת",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="how-it-works">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">איך זה עובד</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            תהליך פשוט בן שלושה שלבים מאפשר לכם להתחיל במהירות
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <span className="text-4xl font-bold text-primary-light/20 absolute top-4 right-4">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-primary-light" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};