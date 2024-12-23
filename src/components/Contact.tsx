import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("contact_leads")
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "ההודעה נשלחה!",
        description: "נחזור אליכם בקרוב.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      toast({
        variant: "destructive",
        title: "שגיאה",
        description: "שליחת ההודעה נכשלה. אנא נסו שוב.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-20 bg-primary-light/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-primary-yellow/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
              צור קשר
            </span>
            <h2 className="text-4xl font-bold text-primary mb-4">
              צרו קשר עכשיו
            </h2>
            <p className="text-gray-600">
              קבלו ייעוץ ראשוני חינם ותראו בדיוק איך אוטומציה יכולה להצמיח את העסק שלכם
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                שלחו לנו הודעה
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    שם
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-light/50"
                    placeholder="השם שלך"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    אימייל
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-light/50"
                    placeholder="your@email.com"
                    dir="ltr"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    הודעה
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-light/50"
                    rows={4}
                    placeholder="כיצד נוכל לעזור לך?"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:shadow-lg transition-shadow duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "שולח..." : "שלח הודעה"}
                </motion.button>
              </form>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                פרטי התקשרות
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary-light ml-4" />
                  <div>
                    <h4 className="font-medium text-gray-900">אימייל</h4>
                    <p className="text-gray-600" dir="ltr">operation@ad-astra.io</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary-light ml-4" />
                  <div>
                    <h4 className="font-medium text-gray-900">טלפון</h4>
                    <p className="text-gray-600" dir="ltr">0528624812</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary-light ml-4" />
                  <div>
                    <h4 className="font-medium text-gray-900">מיקום</h4>
                    <p className="text-gray-600">
                      ישראל טל 5
                      <br />
                      תל אביב
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};