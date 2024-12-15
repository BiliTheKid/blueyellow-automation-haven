import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">אודותינו</h3>
            <p className="text-gray-300">
              אנו עוזרים לעסקים לאוטמט את הפעילות שלהם ולהשיג יעילות גבוהה יותר באמצעות פתרונות טכנולוגיים מתקדמים.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li><a href="#what-we-do" className="text-gray-300 hover:text-white">מה אנחנו עושים</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-white">איך זה עובד</a></li>
              <li><a href="#why-us" className="text-gray-300 hover:text-white">למה אנחנו</a></li>
              <li><a href="#our-tools" className="text-gray-300 hover:text-white">הכלים שלנו</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">צור קשר</h3>
            <p className="text-gray-300" dir="ltr">
              Email: info@automationhaven.com<br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex justify-between items-center">
          <p className="text-gray-300">© 2024 AutomationH. כל הזכויות שמורות.</p>
          <button
            onClick={scrollToTop}
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            aria-label="גלול למעלה"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};