import React from "react";
import { FaArrowRight } from "react-icons/fa";
import image from "../assets/images/about.jpg";

const AboutC = () => {
  return (
    <div>
      <section
        className="md:flex items-center bg-[#212d37] text-white p-5"
        id="about"
      >
        <div className="md:w-1/2 mb-8 text-gray-300" data-aos="fade-right">
          <p>ABOUT US</p>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            We are top Medical service company
          </h1>
          <p className="py-2 para-light">
            "We Are a Top Medical Service Company: A Brief Summary" As a premier
            medical service company, we prioritize excellence in healthcare
            provision and patient-centric care. With a commitment to delivering
            exceptional medical services, we stand as a leading name in the
            industry. Here's a concise overview of our core values and
            offerings.
          </p>
          <p className="py-2 para-light">
          Beyond providing medical services, we actively engage with the community to promote health awareness, preventive care, and overall well-being. Through educational initiatives, outreach programs, and partnerships, we strive to make a positive impact on the communities we serve.
          </p>
          <div className="my-3">
            <button className="btnCss" href="#your-link">
              Learn More <FaArrowRight className="inline ml-1" />
            </button>
          </div>
        </div>
        <div className="md:w-1/2 text-center" data-aos="fade-down">
          <img className="" src={image} alt="about" />
        </div>
      </section>
    </div>
  );
};

export default AboutC;
