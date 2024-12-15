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
          <h2 className="text-4xl font-bold text-primary mb-4">מה אנחנו עושים</h2>
          <div className="max-w-3xl mx-auto text-gray-600">
            <p className="text-lg leading-relaxed">
              כמו בעבר שלנו, לא רק שעזרנו לחברות מסחר אלקטרוני להצליח בניהול ותפעול העסקים שלהן... היו לנו גם מותגים משלנו... אנחנו מודעים לאתגרים הרבים ולאופן שבו הטכנולוגיה יכולה לעזור לכם, בעלי העסקים, להרוויח יותר כסף, להיות מרוצים יותר והכי חשוב - לדעת מה קורה בעסק שלכם.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};