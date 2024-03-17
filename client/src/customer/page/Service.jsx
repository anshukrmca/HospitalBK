import React from 'react'
import ServiceCard from '../../component/ServiceCard'
import { FaStethoscope, FaUserDoctor ,FaBedPulse, FaRegAddressCard } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";   
import { GiMedicines } from "react-icons/gi";
import { MdBloodtype,MdOutlineSecurity } from "react-icons/md";
const data =[
    {
        title:'Excellent Medical Services',
        icon:<FaUserDoctor className='animate-bounce shadow-xl shadow-white'/>,
        discription:'our commitment to excellence, comprehensive services, patient-centered approach, utilization of cutting-edge technology, and active community engagement distinguish us as a top medical service company dedicated to enhancing lives and fostering healthier communities..'
    },
    {
        title:'Emergency Care',
        icon:<FaUserDoctor className='animate-bounce text-red-700 shadow-xl shadow-white'/>,
        discription:'Emergency care refers to the immediate medical attention provided to individuals facing sudden and critical health crises. This specialized branch of healthcare aims to swiftly diagnose and stabilize patients suffering from acute injuries, severe illnesses,monitoring by trained medical professionals.'
    },
    {
        title:'Operation & Surgerys',
        icon:<FaBedPulse className='animate-bounce shadow-xl shadow-white'/>,
        discription:'"Operations & Surgeries: Vital medical procedures designed to diagnose, treat, or alleviate various health conditions. They are routine appendectomies to complex organ transplants. These are skilled surgical teams, and advanced medical technology to ensure successful outcomes and patient well-being."'
    },
    {
        title:'Outdoor Checkup',
        icon:<FaStethoscope className='animate-bounce shadow-xl shadow-white'/>,
        discription:'Outdoor checkup refers to medical examinations or consultations that take place outside of a traditional clinical setting, often conducted in open-air environments such as parks, community centers, or temporary medical camps. These outdoor sessions provide accessible healthcare options, alternatives for individuals seeking medical attention,'
    },
    {
        title:'Intdoor Checkup',
        icon:<FaStethoscope className='animate-bounce shadow-xl shadow-white'/>,
        discription:'Indoor checkups offer comprehensive medical assessments in a controlled environment, ensuring accurate diagnosis and treatment. These examinations are crucial for detecting and managing various health conditions, promoting preventive care, and fostering patient-provider communication for optimal health outcomes.'
    },
    {
        title:'Ambulance Service',
        icon:<FaAmbulance className='animate-bounce shadow-xl shadow-white'/>,
        discription:'Providing critical and timely emergency medical transportation, professionals and equipped with life-saving equipment, ambulances ensure swift and efficient transport to medical facilities, delivering vital care en route. Their presence is indispensable in the healthcare system, offering crucial support in times of crisis and medical emergencies.'
    },
    {
        title:'Medicine & Pharmacy',
        icon:<GiMedicines className='animate-bounce shadow-xl shadow-white'/>,
        discription:'Pharmacy focuses on the safe and effective use of medications to manage health conditions. Pharmacists play a vital role in dispensing medications, providing patient education, the pharmacy profession continues to evolve to meet the dynamic healthcare needs of society.'
    },
    {
        title:'Blood Testing',
        icon:<MdBloodtype className='animate-bounce shadow-xl shadow-white'/>,
        discription:' Blood testing plays a pivotal role in modern healthcare, providing crucial insights into various aspects of health and disease. This diagnostic method involves analyzing blood samples to assess factors such as blood cell count, nutrient levels, organ function, healthcare professionals can detect'
    },
    {
        title:'Medical Helath Insurance',
        icon:<MdOutlineSecurity className='animate-bounce shadow-xl shadow-white'/>,
        discription:'Medical health insurance provides financial protection against the costs associated with healthcare services. It typically covers expenses such as hospitalization, doctor visits, prescription medications, and preventive care. By securing medical health insurance, individuals can mitigate the financial burden of unexpected medical emergencies and ensure access to quality healthcare without worrying about exorbitant expenses. Additionally, medical health insurance often offers peace of mind by providing coverage for various medical treatments, thereby promoting overall well-being and encouraging proactive healthcare management.'
    },
    {
        title:'Goverment Free Card',
        icon:<FaRegAddressCard className='animate-bounce shadow-xl shadow-white'/>,
        discription:'"Government Free Card" refers to a governmental initiative providing eligible citizens with access to essential services or benefits without financial burden. These cards aim to alleviate economic strain by offering subsidies, discounts, or free access to healthcare, education, transportation, or other public services. Such programs often target marginalized communities, enhancing their socio-economic well-being and promoting inclusivity within society.'
    },

]

const Service = () => {
    return (
        <div className='bg-[#1c262f] p-4 text-white' id='service'>
            <div className="text-center pb-4">
                <p className='text-lg'>OUR SERVICES</p>
                <h2 className="py-2 font-semibold text-2xl">Explore unlimited possibilities</h2>
            </div>
            <div className="py-2 grid md:grid-cols-3" data-aos="zoom-in">
                {
                    data.map((item,i)=>(
                        <ServiceCard key={i} item={item}/>
                    ))
                }
            </div>

        </div>
    )
}

export default Service