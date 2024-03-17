// import { Avatar } from '@mui/material'
import image from '../assets/images/testimonial-1.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data =
  [
    {
      descripton: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci esse facilis vel,neque ipsa mollitia impedit, commodi ab illo dignissimos, voluptatum quae amet sed ',
      name: "Rohit Singh",
      role: "Owner"
    },
    {
      descripton: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci esse facilis vel,neque ipsa mollitia impedit, commodi ab illo dignissimos, voluptatum quae amet sed ',
      name: "Rahul Singh",
      role: "Main - Visitor"
    },
    {
      descripton: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci esse facilis vel,neque ipsa mollitia impedit, commodi ab illo dignissimos, voluptatum quae amet sed ',
      name: "Dr Nisha Kumari",
      role: "Gyno Doctor."
    },
    {
      descripton: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci esse facilis vel,neque ipsa mollitia impedit, commodi ab illo dignissimos, voluptatum quae amet sed ',
      name: "Ritesh Kumar",
      role: "Manager"
    }
  ]

const Doctor = () => {

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='bg-[#1c262f] p-8 text-white'>
      <div className="slider-1 testimonial text-light d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="text-center w-lg-75 m-auto pb-4">
              <p>OUR DOCTOR</p>
              <h2 className="py-2 text-2xl">What Our Doctor Says</h2>
              <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laborum quia eligendi architecto sint inventore, ullam deleniti vero error asperiores fugiat cupiditate necessitatibus, rerum sed? Architecto impedit nobis accusamus quisquam.</p>
            </div>
          </div>
          <div className="p-5" data-aos="zoom-in" >
            <Slider {...settings}>
              {data.map((item, i) => (
                <div className='card p-4' key={i}>
                 <p>{item.descripton}</p>
                 <div className='flex gap-4 items-center mt-4'>
                  <img className='size-20 rounded-full' src={image} />
                  <div>
                    <p>{item.name}</p>
                    <p>{item.role}</p>
                  </div>
                 </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Doctor;
