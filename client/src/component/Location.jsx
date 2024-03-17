import React from 'react'
import { FaMap, FaMobileAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Location = () => {
    return (
        <div>
            <section className="bg-[#212d37] text-white w-full p-5">
                <div data-aos="zoom-in">
                    <div className="flex justify-between flex-wrap">
                        <div className="flex gap-2 items-center">
                            <FaMap className="text-[#0ee951] " />
                            <div className="ms-2 ">
                                <p>ADDRESS</p>
                                <p className='font-thin'>Jauhari Bazar,Near SBI BANK, Vaishali, Bihar 844101</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaMobileAlt className="text-[#0ee951]" />
                            <div className="ms-2">
                                <p >CALL FOR QUERY</p>
                                <p className='font-thin'>9097333335</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaEnvelope className="  text-[#0ee951]" />
                            <div className="ms-2">
                                <p>SEND US MESSAGE</p>
                                <p className='font-thin'>Kumarrohit653@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaClock className=" text-[#0ee951]" />
                            <div className="ms-2">
                                <p>OPENING HOURS</p>
                                <p className='font-thin'>24 X 7</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Location