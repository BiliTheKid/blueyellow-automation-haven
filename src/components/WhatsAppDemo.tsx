import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const WhatsAppDemo = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const conversation = [
    "👋 שלום! כיצד אוכל לעזור לך היום?",
    "אשמח לקבוע בדיקת תחזוקה.",
    "אשמח לעזור! מה התאריך המועדף עליך?",
    "יום שלישי הבא אחר הצהריים יהיה מעולה.",
    "מצוין! קבעתי לך בדיקת תחזוקה ליום שלישי הבא בשעה 14:00. תקבל אישור בקרוב.",
    "תודה רבה! זה היה פשוט. 😊",
  ];

  useEffect(() => {
    const addMessage = (index: number) => {
      if (index < conversation.length) {
        setMessages((prev) => [...prev, conversation[index]]);
        setTimeout(() => addMessage(index + 1), 1500);
      }
    };

    addMessage(0);
    return () => setMessages([]);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          תמיכת WhatsApp אוטומטית
        </h2>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
          <div className="bg-[#25D366] text-white p-4 rounded-t-lg">
            <h3 className="text-lg font-semibold">בוט אוטומציה</h3>
          </div>
          <div className="h-96 overflow-y-auto p-4 bg-[#E5DDD5]">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-4 ${
                  index % 2 === 0
                    ? 'text-left'
                    : 'text-right'
                }`}
              >
                <div
                  className={`inline-block p-3 rounded-lg max-w-[80%] ${
                    index % 2 === 0
                      ? 'bg-white'
                      : 'bg-[#DCF8C6] ml-auto'
                  }`}
                >
                  {message}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppDemo;