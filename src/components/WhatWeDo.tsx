import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

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
            <div className="text-lg space-y-6 mr-auto ml-4 max-w-xl">
              <motion.div 
                className="flex items-center justify-end gap-3 text-primary hover:text-primary-light transition-colors group"
                whileHover={{ x: -5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="font-medium">להגדיל את ההכנסות באופן משמעותי</span>
                <ChevronLeft className="w-6 h-6 group-hover:text-primary-yellow transition-colors" />
              </motion.div>
              <motion.div 
                className="flex items-center justify-end gap-3 text-primary hover:text-primary-light transition-colors group"
                whileHover={{ x: -5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="font-medium">לקבל שליטה מלאה על הנתונים העסקיים</span>
                <ChevronLeft className="w-6 h-6 group-hover:text-primary-yellow transition-colors" />
              </motion.div>
              <motion.div 
                className="flex items-center justify-end gap-3 text-primary hover:text-primary-light transition-colors group"
                whileHover={{ x: -5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="font-medium">לישון טוב בלילה כשאתם יודעים שהכל מתנהל כמו שצריך</span>
                <ChevronLeft className="w-6 h-6 group-hover:text-primary-yellow transition-colors" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};