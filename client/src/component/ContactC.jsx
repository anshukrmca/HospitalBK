import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import image from '../assets/images/contact.jpg'


const ContactC = () => {
  return (
        <section className="bg-[#1c262f] text-white p-4 flex items-center" id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center" data-aos="fade-down">
              <img className="img-fluid" src={image} alt="contact" />
          </div>
          <div className="lg:pr-12 flex justify-center lg:justify-end items-center px-5" data-aos="fade-right">
            <div>
              <div className="text-center lg:text-lg lg:text-left py-4 pt-lg-0">
                <p>CONTACT</p>
                <h2 className="py-2 text-2xl font-semibold">Send your query</h2>
                <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos dicta mollitia totam explicabo obcaecati quia laudantium repudiandae.</p>
              </div>
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <input type="text" className="w-full p-2 rounded-md" placeholder="Enter name" />
                  </div>
                  <div>
                    <input type="tel" className="w-full p-2 rounded-md" placeholder="Enter phone number" />
                  </div>
                </div>
                <input type="email" className="w-full mt-2 p-2 rounded-md" placeholder="Enter email" />
                <textarea className="w-full mt-2 p-2 rounded-md" rows="4" placeholder="Enter your Message"></textarea>
              </div>
              <div className="my-3">
                <button className="btnCss">Submit</button>
              </div>
            </div>
          </div>
         
      </div>
    </section>
  )
}

export default ContactC