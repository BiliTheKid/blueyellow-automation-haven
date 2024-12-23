import { Menu } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/036a3f73-14dd-4327-8e2c-010175478702.png" 
              alt="לוגו" 
              className="h-24 w-auto"
            />
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 md:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="hidden md:flex items-center gap-8">
            <a href="#what-we-do" className="text-gray-600 hover:text-primary">מה אנחנו עושים</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary">איך זה עובד</a>
            <a href="#why-us" className="text-gray-600 hover:text-primary">למה אנחנו</a>
            <a href="#our-tools" className="text-gray-600 hover:text-primary">הכלים שלנו</a>
            <a href="#contact" className="text-gray-600 hover:text-primary">צור קשר</a>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="py-2 space-y-2">
                <a href="#what-we-do" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">מה אנחנו עושים</a>
                <a href="#how-it-works" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">איך זה עובד</a>
                <a href="#why-us" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">למה אנחנו</a>
                <a href="#our-tools" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">הכלים שלנו</a>
                <a href="#contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">צור קשר</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};