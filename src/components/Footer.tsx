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
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300">
              We help businesses automate their operations and achieve greater efficiency through cutting-edge technology solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#what-we-do" className="text-gray-300 hover:text-white">What We Do</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-white">How It Works</a></li>
              <li><a href="#why-us" className="text-gray-300 hover:text-white">Why Us</a></li>
              <li><a href="#our-tools" className="text-gray-300 hover:text-white">Our Tools</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300">
              Email: info@automationhaven.com<br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex justify-between items-center">
          <p className="text-gray-300">© 2024 AutomationHaven. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};