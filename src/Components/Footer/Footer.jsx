import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../../assets/logo-footer.png"

function Footer() {
  return (
    <footer className="bg-[#050B24] text-gray-300 relative z-5 top-20 -mt-32 pt-8 pb-6 w-full">


              <div className="flex justify-center mt-12 mb-10">
        <img src={logo} alt="Logo" className="h-16" />
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 px-6">
        
        
        {/* About Us */}
        <div>
          <h3 className="text-white font-semibold mb-3">About Us</h3>
          <p className="text-sm">
            We are a passionate team dedicated to providing the best services to our customers.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mx-auto">
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 mx-auto text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-white font-semibold mb-3">Subscribe</h3>
          <p className="text-sm mb-3">Subscribe to our newsletter for the latest updates.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none"
            />
            <button className="px-4 py-2 rounded-r-md font-medium text-white bg-gradient-to-r from-yellow-400 to-pink-400 hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>


      {/* Bottom Bar */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        ©2024 Your Company All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
