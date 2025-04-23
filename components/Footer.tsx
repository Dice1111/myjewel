import React from "react";
import Link from "next/link";
import { VscSend } from "react-icons/vsc";
import { Button } from "./ui/button";
import ProfileForm from "./ProfileForm";

// Arrays for different sections
const contactLinks = [
  "Book Appointment",
  "Visit Our Stores",
  "Email Us",
  "Contact Us",
  "Schedule a consultation",
];

const giftingLinks = [
  "Luxury Gift Wrapping",
  "Gift Cards",
  "Private & White–Glove Delivery",
];

const servicesLinks = [
  "Custom Jewelry Design",
  "Private Jewelry Consultations",
  "Jewelry Restoration & Care",
];

const Footer = () => {
  return (
    <footer className="pt-12 pb-8 px-4 sm:px-6 lg:px-8 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Contact Section */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
          <ul className="space-y-2">
            {contactLinks.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Gifting Section */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">THE ART OF GIFTING</h3>
          <ul className="space-y-2">
            {giftingLinks.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">BESPOKE & SERVICES</h3>
          <ul className="space-y-2">
            {servicesLinks.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Let’s Keep in Touch</h3>
          <ProfileForm />

          <div className="mt-6">
            <h4 className="font-semibold mb-2">Payment Methods</h4>
            <div className="flex space-x-4">
              <span className="bg-white text-black px-3 py-1 rounded">
                VISA
              </span>
              <span className="bg-white text-black px-3 py-1 rounded">Pay</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          © 2025, All Rights Reserved – MyJewel
        </div>
        <div className="flex space-x-6">
          <Link href="#" className="hover:text-gray-300 transition-colors">
            Terms & Conditions
          </Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">
            Live Mail
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
