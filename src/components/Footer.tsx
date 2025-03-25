import { BiBook } from "react-icons/bi";
import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="bg-gray-100 py-10 px-6 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-2">
              <span className="bg-orange-500 text-white p-2 rounded-full">
                <BiBook className="w-6 h-6 text-white"/>
              </span>
              <h2 className="text-xl font-bold">
                E-<span className="text-orange-500">Book</span>
              </h2>
            </div>
            <p className="text-gray-600 mt-3">
              Explore a wide range of e-books and resources to enhance your learning experience.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="https://www.facebook.com" target="_blank" className="text-gray-700 hover:text-orange-500 text-xl"><FaFacebook className="w-6 h-6 text-blue-600"/></a>
              <a href="https://x.com" target="_blank" className="text-gray-700 hover:text-orange-500 text-xl"><FaTwitter className="w-6 h-6 text-blue-400"/></a>
              <a href="https://github.com" target="_blank" className="text-gray-700 hover:text-orange-500 text-xl"><FaGithub className="w-6 h-6 "/></a>
              <a href="https://www.youtube.com" target="_blank" className="text-gray-700 hover:text-orange-500 text-xl"><FaYoutube className="w-6 h-6 text-red-600"/></a>
            </div>
          </div>
  
          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="text-gray-600 space-y-2">
              <li><a href="#" className="hover:text-orange-500">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500">Services</a></li>
              <li><a href="#" className="hover:text-orange-500">Our Customers</a></li>
              <li><a href="#" className="hover:text-orange-500">Portfolio</a></li>
              <li><a href="#" className="hover:text-orange-500">Blog</a></li>
            </ul>
          </div>
  
          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="text-gray-600 space-y-2">
              <li><a href="#" className="hover:text-orange-500">Blog</a></li>
              <li><a href="#" className="hover:text-orange-500">Webinar & Events</a></li>
              <li><a href="#" className="hover:text-orange-500">Podcast</a></li>
              <li><a href="#" className="hover:text-orange-500">E-book & Guides</a></li>
            </ul>
          </div>
  
          {/* Contact Us */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-600">Our Mobile Number</p>
            <p className="text-orange-600 font-semibold">+0123 4234943234</p>
            <p className="text-gray-600 mt-3">Our Email</p>
            <p className="text-orange-600 font-semibold">example@gmail.com</p>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="mt-10 border-t pt-6 text-left text-gray-600">
          <p>Copyright © 2025 Amr Ashraf. All rights reserved</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  