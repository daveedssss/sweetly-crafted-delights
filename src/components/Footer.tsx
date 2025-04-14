
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">Sweetly Crafted</h3>
            <p className="text-gray-300 mb-4">
              Indulge in exquisite pastries crafted with passion and precision by Dave Sebastien Ghermino,
              where every bite tells a story of tradition and innovation.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#menu" className="text-gray-300 hover:text-primary transition-colors">Menu</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-300">09942553507</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-300">davesebastienghermino@gmail.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-300">123 Pastry Lane, Bakery District</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>© {year} Sweetly Crafted Delights by Dave Sebastien Ghermino. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
