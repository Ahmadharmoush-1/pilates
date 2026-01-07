import { Phone, MessageCircle, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/96170698298", "_blank");
  };

  return (
    <footer className="bg-charcoal text-ivory py-16">
      <div className="luxury-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-medium mb-4">
              Dr <span className="text-gold">Alaa</span> El Cheikh
            </h3>
            <p className="text-ivory/60 leading-relaxed mb-6 max-w-md">
              Experience world-class cosmetic dentistry with Dr. Alaa El Cheikh. 
              Transforming smiles with precision, artistry, and luxury.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-ivory/60 hover:text-gold transition-colors">
                  About Dr. Alaa
                </a>
              </li>
              <li>
                <a href="#services" className="text-ivory/60 hover:text-gold transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-ivory/60 hover:text-gold transition-colors">
                  Before & After
                </a>
              </li>
              <li>
                <a href="#booking" className="text-ivory/60 hover:text-gold transition-colors">
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-ivory/60">
                Beirut – Badaro<br />
                Center Badaro 5193
              </li>
              <li>
                <a
                  href="tel:+96170698298"
                  className="text-ivory/60 hover:text-gold transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  +961 70 698 298
                </a>
              </li>
              <li>
                <button
                  onClick={handleWhatsApp}
                  className="text-ivory/60 hover:text-gold transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ivory/40 text-sm">
            © {new Date().getFullYear()} Dr Alaa El Cheikh. All rights reserved.
          </p>
          <p className="text-ivory/40 text-sm">
            Dr. Alaa El Cheikh – Cosmetic & Esthetic Dentist
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
