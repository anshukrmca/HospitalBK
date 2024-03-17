import React from 'react'
import { FaUserMd, FaProcedures, FaMicroscope, FaAmbulance } from 'react-icons/fa';
import image from '../assets/images/about.jpg'

const Work = () => {
    return (
        <>
            <section className="md:flex gap-4 w-full  text-white p-4 worKDiv" style={{width:'100%'}}>
                    <div className="w-full" data-aos="zoom-in">
                        <img className="" src={image} alt="work" />
                    </div>
                    <div className="w-full px-4 py-3" data-aos="">
                            <p>OUR WORK</p>
                            <h2 className="text-2xl lg:text-2xl py-2">Best Medical Care For Yourself and Your Family</h2>
                            <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos dicta mollitia totam explicabo obcaecati quia laudantium repudiandae.</p>
                            <div className="grid grid-cols-2 lg:grid-cols-4 mt-8 gap-5" data-aos='zoom-in'>
                                <div className="flex lg:block items-center gap-4 justify-start">
                                    <FaUserMd className="text-3xl text-green-700 mb-3" />
                                    <h6 className="mb-0">Qualified<small className="block text-green-700">Doctors</small></h6>
                                </div>
                                <div className="flex lg:block items-center gap-4 justify-start">
                                    <FaProcedures className="text-3xl text-amber-400 mb-3" />
                                    <h6 className="mb-0">Emergency<small className="block text-amber-400">Services</small></h6>
                                </div>
                                <div className="flex lg:block items-center gap-4 justify-start">
                                    <FaMicroscope className="text-3xl text-lime-600 mb-3" />
                                    <h6 className="mb-0">Accurate<small className="block text-lime-600">Testing</small></h6>
                                </div>
                                <div className="flex lg:block items-center gap-4 justify-start">
                                    <FaAmbulance className="text-3xl text-red-800 mb-3" />
                                    <h6 className="mb-0">Free<small className="block text-red-800">Ambulance</small></h6>
                                </div>
                            </div>
                    </div>
            </section>
        </>
    )
}

export default Work