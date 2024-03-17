import React from "react";
import Layout from "../../component/Layout";
import Footer from "../../component/Footer";
import AboutC from "../../component/AboutC";
import Gallery from "../../component/Gallery";

const About = () => {
  return (
    <Layout>
      <AboutC />
      <p className="text-white text-3xl font-semibold text-center">Our Gallery</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-4 ">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, i) => (
          <Gallery key={i} />
        ))}
      </div>

      <Footer />
    </Layout>
  );
};

export default About;
