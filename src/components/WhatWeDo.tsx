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
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">מה אנחנו עושים</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-8 text-gray-600">
              אנחנו לא סתם יועצים - אנחנו בעלי עסקים בדיוק כמוכם. הקמנו, ניהלנו וצמחנו עם מותגים משלנו, ועברנו את כל האתגרים שאתם חווים היום. כשאנחנו אומרים שאנחנו מבינים את הכאב שלכם - זה מניסיון אישי.
            </p>
            <p className="text-lg leading-relaxed mb-12 text-gray-600">
              בזכות הדרך שעברנו, פיתחנו שיטות עבודה וכלים טכנולוגיים שיעזרו לכם:
            </p>
            <div className="flex flex-col items-center space-y-8 max-w-2xl mx-auto">
              <motion.div 
                className="flex items-center gap-4 text-primary hover:text-primary-light transition-colors group w-full justify-center"
                whileHover={{ x: -5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xl font-medium">להגדיל את ההכנסות באופן משמעותי</span>
                <ChevronLeft className="w-6 h-6 group-hover:text-primary-yellow transition-colors" />
              </motion.div>
              <motion.div 
                className="flex items-center gap-4 text-primary hover:text-primary-light transition-colors group w-full justify-center"
                whileHover={{ x: -5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xl font-medium">לקבל שליטה מלאה על הנתונים העסקיים</span>
                <ChevronLeft className="w-6 h-6 group-hover:text-primary-yellow transition-colors" />
              </motion.div>
              <motion.div 
                className="flex items-center gap-4 text-primary hover:text-primary-light transition-colors group w-full justify-center"
                whileHover={{ x: -5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xl font-medium">לעבוד חכם עם תהליכים אוטומטיים לחלוטין, בלי התעסקות מיותרת.</span>
                <ChevronLeft className="w-6 h-6 group-hover:text-primary-yellow transition-colors" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};