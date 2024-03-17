import React from "react";
import {
  FaClinicMedical,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaCaretRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <section className="bg-[#1c262f] text-light p-4 text-white" data-aos='fade-right'>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="py-4">
              <FaClinicMedical className="text-amber-500" />
              <p className="py-3 text-gray-400">
                <strong className="text-amber-500 text-2xl">
                  NEW B.K HOSPITAL
                </strong>{" "}
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                animi repudiandae explicabo esse maxime, impedit rem
                voluptatibus amet error quas.
              </p>
              <div className="flex">
                <div className="me-3">
                  <a href="#your-link">
                    <FaFacebookF className="text-white hover:text-[#0ee951]" />
                  </a>
                </div>
                <div className="me-3">
                  <a href="#your-link">
                    <FaTwitter className="text-white hover:text-[#0ee951]" />
                  </a>
                </div>
                <div className="me-3">
                  <a href="#your-link">
                    <FaInstagram className="text-white hover:text-[#0ee951]" />
                  </a>
                </div>
              </div>
            </div>

            <div className="py-4 py-md-5">
              <div>
                <h4 className="py-2">Quick Links</h4>
                <div className="flex items-center py-2">
                  <FaCaretRight />
                  <a href="#about" className="ms-3 hover:text-[#0ee951]">
                    <p>About</p>
                  </a>
                </div>
                <div className="flex items-center py-2">
                  <FaCaretRight />
                  <a href="#" className="ms-3 hover:text-[#0ee951]">
                    <p>Services</p>
                  </a>
                </div>
                <div className="flex items-center py-2">
                  <FaCaretRight />
                  <a href="#" className="ms-3 hover:text-[#0ee951]">
                    <p>Plans</p>
                  </a>
                </div>
                <div className="flex items-center py-2">
                  <FaCaretRight />
                  <a href="#" className="ms-3 hover:text-[#0ee951]">
                    <p>Contact</p>
                  </a>
                </div>
              </div>
            </div>

            <div className="py-4 py-md-5">
              <div>
                <h4 className="py-2">Departments</h4>
                <div className="flex items-center py-2">
                  <FaCaretRight />
                  <a href="privacy.html" className="ms-3 hover:text-[#0ee951]">
                    <p>Privacy</p>
                  </a>
                </div>
                <div className="flex items-center py-2">
                  <FaCaretRight />
                  <a href="terms.html" className="ms-3 hover:text-[#0ee951]">
                    <p>Terms</p>
                  </a>
                </div>
                <div className="flex items-center py-2">
                  <FaCaretRight />
                  <a href="#your-link" className="ms-3 hover:text-[#0ee951]">
                    <p>Disclaimer</p>
                  </a>
                </div>
                <div className="flex items-center py-2">
                  <FaCaretRight />
                  <a href="#your-link" className="ms-3 hover:text-[#0ee951]">
                    <p>FAQ</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center text-xl bg-gray-600/20">
        @copyright by Anshu 2024
      </div>
    </div>
  );
};

export default Footer;
