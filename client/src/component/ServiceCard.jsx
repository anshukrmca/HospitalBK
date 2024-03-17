const ServiceCard = ({ item }) => {
  return (
      <div data-aos='fade-down'> 
          <div className="serviceCardDiv bg-transparent h-72 mb-4 cursor-pointer p-4 duration-300 shadow-xl hover:border-4 hover:border-[#0ee951] hover:shadow-[#0ee951] hover:shadow-md hover:rounded-md">
              <span className='text-3xl text-amber-400'>{item.icon}</span>
              <h4 className="py-2 text-2xl">{item.title}</h4>
              <p className="para-light">{item.discription}</p>
          </div>
      </div>
  )
}

export default ServiceCard