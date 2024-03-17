import React from 'react'
import { FaLaptopHouse, FaWifi } from 'react-icons/fa'
import image from '../assets/images/hero.jpg'

const HeroSection = () => {
    return (
        <div id='home'>
            <section className="p-4  text-white bg-cover bg-center bg-fixed" style={{backgroundImage: `url(${image})`}}>
                <div className="md:w-1/2 py-5" data-aos="fade-right">
                    <h1 className="md:text-5xl text-3xl leading-tight">Best <span className="text-[#0ee951]">Healthcare</span><br />
                        Solution In Your City</h1>
                    <p className="para para-light py-3">What truly sets our healthcare solution apart is the dedicated team of healthcare professionals who are committed to delivering personalized care with empathy and compassion. Whether it's a routine check-up or a complex medical procedure, patients can trust in the expertise and dedication of our healthcare providers. !</p>
                    <div className="flex items-center">
                        <p className="p-2"><FaLaptopHouse className="text-[#0ee951] text-3xl"/></p>
                        <p>Emergency Contact : <strong className="text-red-400">9097333335</strong> </p>
                    </div>
                    <div className="flex items-center">
                        <p className="p-2"><FaWifi className="text-[#0ee951] text-3xl"/></p>
                        <p>Services 24 X 7</p>
                    </div>
                    <div className="my-3">
                        {/* I'm assuming the ASP.NET LinkButton is being replaced by a regular button */}
                        <button className="btnCss">Make an Appointment...!</button>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default HeroSection