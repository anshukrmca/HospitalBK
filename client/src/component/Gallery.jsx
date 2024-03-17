import React from 'react'
import image from '../assets/images/about.jpg'

const Gallery = () => {
  return (
    <div>
    <div className="bg-[#1c262f] rounded-md p-4 text-white w-92" data-aos='zoom-in'>
        <img src={image} alt="" className="w-full h-60 rounded-md cursor-pointer object-cover mx-auto transition-all hover:scale-95" />
        <p className="mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio sapiente nihil officiis rerum recusandae sunt necessitatibus, placeat atque dolores assumenda exercitationem perspiciatis accusamus. Quisquam corporis, expedita eius eum ipsa tenetur!</p>
    </div>
</div>

  )
}

export default Gallery