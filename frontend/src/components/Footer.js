// import React from 'react';
// import { FaFacebookF, FaInstagram, FaTwitter, FaMoneyCheckAlt } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import logo from '../../src/assets/footerlogo.png';

// const Footer = () => {
//   return (
//     <footer className="bg-[#435b7e] text-white pt-10 px-6">
//       <div className="max-w-7xl mx-auto">

//         {/* Top Row */}
//         <div className="flex flex-col md:flex-row justify-start md:justify-between items-center mb-8 gap-4">
//           <div className="flex gap-5">
//             <FaFacebookF className="hover:text-orange-500 cursor-pointer" />
//             <FaInstagram className="hover:text-orange-500 cursor-pointer" />
//             <FaTwitter className="hover:text-orange-500 cursor-pointer" />
//           </div>
//           <div className="flex gap-2 w-full justify-center md:justify-end">
//             <input
//               type="email"
//               placeholder="Enter your email..."
//               className="p-2 rounded-md text-black w-full sm:w-64 mb-2 md:mb-0"
//             />
//             <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
//               Subscribe
//             </button>
//           </div>
//         </div>

//         {/* Main Footer */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">

//           {/* Left Column (Logo + About) */}
//           <div className="flex flex-col items-center md:items-start space-y-3">
//             <img src={logo} alt="Logo" className="w-44 mb-2" />
//             <h3 className="text-xl font-bold mt-1">Spare Parts Hub</h3>
//             <p className="text-sm leading-relaxed text-center md:text-left">
//               We provide high-quality spare parts with fast shipping and affordable prices —
//               now with Cash on Delivery in major regions.
//             </p>
//             <div className="flex items-center gap-2 mt-3">
//               <FaMoneyCheckAlt size={28} />
//               <span className="text-sm">Cash on Delivery</span>
//             </div>
//           </div>

          // {/* Lists */}
          // <div className="text-center md:text-left">
          //   <h4 className="text-lg font-semibold mb-3">Customer Service</h4>
          //   <ul className="text-sm space-y-2">
          //     <li><Link to="/order" onClick={() => window.scrollTo({ top:0, behavior:'smooth'})}>My Orders</Link></li>
          //     <li><Link to="/helpcenter" onClick={() => window.scrollTo({ top:0, behavior:'smooth'})}>Help Center</Link></li>
          //     <li><Link to="/order" onClick={() => window.scrollTo({ top:0, behavior:'smooth'})}>Track My Order</Link></li>
          //     <li><Link to="/contact" onClick={() => window.scrollTo({ top:0, behavior:'smooth'})}>Store Location</Link></li>
          //   </ul>
          // </div>

          // <div className="text-center md:text-left">
          //   <h4 className="text-lg font-semibold mb-3">Pages</h4>
          //   <ul className="text-sm space-y-2">
          //     <li><Link to="/about" onClick={() => window.scrollTo({ top:0, behavior:'smooth'})}>About Us</Link></li>
          //     <li><Link to="/shop" onClick={() => window.scrollTo({ top:0, behavior:'smooth'})}>Shop</Link></li>
          //     <li><Link to="/blog" onClick={() => window.scrollTo({ top:0, behavior:'smooth'})}>Blog</Link></li>
          //     <li><Link to="/helpcenter" onClick={() => window.scrollTo({ top:0, behavior:'smooth'})}>Guides</Link></li>
          //     <li><Link to="/faq" onClick={() => window.scrollTo({ top:0, behavior:'smooth'})}>FAQ's</Link></li>
          //     <li><Link to="/contact" onClick={() => window.scrollTo({ top:0, behavior:'smooth'})}>Contact Us</Link></li>
          //   </ul>
          // </div>

//           <div className="text-center md:text-left">
//             <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
//             <ul className="text-sm space-y-2 text-gray-200">
//               <li>📍 Cempaka Wangi No 22, Karachi - Pakistan</li>
//               <li>📧 info@sparepartshubs.com</li>
//               <li>📞 +92 300-1234567</li>
//               <li>🕒 7 Days a week from 10 am to 6 pm</li>
//             </ul>
//           </div>

//         </div>

//         {/* Bottom */}
//         <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
//           © {new Date().getFullYear()} Spare Parts Hub. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;







import React, { useEffect, useState } from "react";
import axios from "../api/axios"; 
import logo from '../../src/logo/sparepartslogo.jpg';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,        
  FaLinkedinIn,
  FaYoutube,
  FaSnapchatGhost,
  FaWhatsapp,
  FaPinterestP,
  FaGithub,
  FaRedditAlien,
  FaTelegramPlane,
  FaDiscord,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import {
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";

import { Link } from "react-router-dom";

const iconMap = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  twitter: FaTwitter,
  x: FaXTwitter,
  youtube: FaYoutube,
  linkedin: FaLinkedinIn,
  snapchat: FaSnapchatGhost,
  whatsapp: FaWhatsapp,
  pinterest: FaPinterestP,
  tiktok: FaTiktok,
  redditalien: FaRedditAlien,
  github: FaGithub,
  discord: FaDiscord,
  telegram: FaTelegramPlane,
};

const Footer = () => {
  const [footer, setFooter] = useState(null);

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const res = await axios.get("/footer"); 
        setFooter(res.data);
      } catch (err) {
        console.error("Error fetching footer:", err);
      }
    };
    fetchFooter();
  }, []);

  if (!footer) {
    return (
      <footer className="bg-[#435b7e] text-white pt-10 px-6">
        <div className="text-center text-gray-300">Loading footer...</div>
      </footer>
    );
  }

  return (
    <footer className="bg-[#435b7e] text-white pt-10 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          
          {/* Social Icons (Admin controlled) */}
          <div className="flex gap-5">
            {footer.socialLinks?.map((social, idx) => {
              const Icon = iconMap[social.platform?.toLowerCase()];
              return Icon ? (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="hover:text-orange-500 cursor-pointer text-xl" />
                </a>
              ) : null;
            })}
          </div>

          {/* Subscribe Box (Fixed) */}
          <div className="flex gap-2 w-full md:w-auto justify-center">
            <input
              type="email"
              placeholder="Enter your email..."
              className="p-2 rounded-md text-black flex-1 sm:w-64"
            />
            <button
              className="bg-orange-500 text-white px-3 py-1.5 rounded-md hover:bg-orange-600 text-sm sm:text-base"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10 items-start">
          
          {/* About (Admin controlled) */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <img src={logo} alt="Logo" className="w-44 mb-2" />

            <h3 className="text-xl font-bold mt-1">{footer.about?.title}</h3>
            <p className="text-sm leading-relaxed text-center md:text-left">
              {footer.about?.description}
            </p>

            {footer.about?.cashOnDelivery && (
              <div className="flex items-center gap-2 mt-3">
                <FaMoneyCheckAlt  size={24} />
                <span className="text-sm">Cash on Delivery</span>
              </div>
            )}
          </div>

          {/* Customer Service (Fixed links) */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-3">Customer Service</h4>
            <ul className="text-sm space-y-2">
              <li><Link to="/order">My Orders</Link></li>
              <li><Link to="/helpcenter">Help Center</Link></li>
              <li><Link to="/order">Track My Order</Link></li>
              <li><Link to="/contact">Store Location</Link></li>
            </ul>
          </div>

          {/* Pages (Fixed links) */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-3">Pages</h4>
            <ul className="text-sm space-y-2">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/helpcenter">Guides</Link></li>
              <li><Link to="/faq">FAQ's</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info (Admin controlled) */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
            <ul className="text-sm space-y-2 text-gray-200">
              {footer.contact?.address && <li>📍 {footer.contact.address}</li>}
              {footer.contact?.email && <li>📧 {footer.contact.email}</li>}
              {footer.contact?.phone && <li>📞 {footer.contact.phone}</li>}
              {footer.contact?.workingHours && <li>🕒 {footer.contact.workingHours}</li>}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} {footer.about?.title || "Website"}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
