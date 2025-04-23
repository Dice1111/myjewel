import Link from "next/link";
import { FaApplePay } from "react-icons/fa";
import { GrAmex } from "react-icons/gr";
import { LiaFacebook, LiaInstagram } from "react-icons/lia";
import { RiVisaFill } from "react-icons/ri";
import { SiMastercard } from "react-icons/si";
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
          <p className="text-md font-semibold mb-4">CONTACT US</p>
          <ul className="space-y-2">
            {contactLinks.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors text-sm"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Gifting Section */}
        <div className="mb-8 md:mb-0">
          <p className="text-md font-semibold mb-4">THE ART OF GIFTING</p>
          <ul className="space-y-2">
            {giftingLinks.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors text-sm"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div className="mb-8 md:mb-0">
          <p className="text-md font-semibold mb-4">BESPOKE & SERVICES</p>
          <ul className="space-y-2">
            {servicesLinks.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors text-sm"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <p className="text-md font-semibold mb-4">Let’s Keep in Touch</p>
          <ProfileForm />

          <div className="mt-6">
            <h4 className="font-semibold mb-2">Payment Methods</h4>
            <div className="flex space-x-4">
              <div className="bg-white text-black px-3 py-1 rounded border-1">
                <RiVisaFill size={30} />
              </div>
              <div className="bg-white text-black px-3 py-1 rounded border-1">
                <SiMastercard size={30} />
              </div>
              <div className="bg-white text-black px-3 py-1 rounded border-1">
                <GrAmex size={30} />
              </div>
              <div className="bg-white text-black px-3 py-1 rounded border-1">
                <FaApplePay size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left text-sm">
          © 2025, All Rights Reserved – MyJewel
        </div>
        <div className="flex space-x-6 text-sm">
          <Link href="#" className="hover:text-gray-300 transition-colors">
            Terms & Conditions
          </Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">
            Site Mail
          </Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">
            <LiaFacebook size={25} />
          </Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">
            <LiaInstagram size={25} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
