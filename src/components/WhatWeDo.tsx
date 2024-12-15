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
            <p className="text-lg leading-relaxed mb-6">
              אנחנו לא סתם יועצים - אנחנו בעלי עסקים בדיוק כמוכם. הקמנו, ניהלנו וצמחנו עם מותגי משלנו, ועברנו את כל האתגרים שאתם חווים היום. כשאנחנו אומרים שאנחנו מבינים את הכאב שלכם - זה מניסיון אישי.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              בזכות הדרך שעברנו, פיתחנו שיטות עבודה וכלים טכנולוגיים שיעזרו לכם:
            </p>
            <ul className="text-lg space-y-4 text-right max-w-xl mx-auto">
              <li>להגדיל את ההכנסות באופן משמעותי</li>
              <li>לקבל שליטה מלאה על הנתונים העסקיים</li>
              <li>לישון טוב בלילה כשאתם יודעים שהכל מתנהל כמו שצריך</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};