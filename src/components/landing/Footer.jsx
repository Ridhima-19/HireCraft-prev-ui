import { FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-8 space-y-6">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Left side: Logo */}
          <h1 className="text-blue-600 font-bold text-lg mb-4 md:mb-0">Hirecraft</h1>

          {/* Right side: Social icons */}
          <div className="flex items-center space-x-5">
            <a href="#" className="text-black-900 hover:text-blue-600 transition-colors">
              <FaLinkedin size={28} />
            </a>
            <a href="#" className="text-black-900 hover:text-pink-500 transition-colors">
              <FaInstagram size={28} />
            </a>
            <a href="#" className="text-black-900 hover:text-red-600 transition-colors">
              <FaYoutube size={28} />
            </a>
          </div>
        </div>

        {/* Bottom row: copyright + links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm pt-4 border-t border-gray-100">
          <p>© 2025 Hirecraft | All Rights Reserved</p>
          <div className="flex space-x-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
