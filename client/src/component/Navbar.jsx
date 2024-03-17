import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { FaClinicMedical, FaStethoscope } from "react-icons/fa"; // Importing Font Awesome icons
import { useState } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/service" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 ">
        <div className="md:flex justify-between bg-gray-800 text-white py-4 md:px-10 px-7">
          <div className="flex justify-between items-center">
            <div className=" md:text-2xl items-center gap-3 text-amber-600 hover:text-amber-400 flex justify-center cursor-pointer">
              <FaClinicMedical />
              <p> New B K Hospital </p>
            </div>

            <div
              onClick={() => setOpen(!open)}
              className="cursor-pointer text-2xl md:hidden"
            >
              <MdOutlineMenuOpen />
            </div>
          </div>

          <ul
            className={`md:flex md:items-center bg-gray-800 md:pb-0 pb-12 absolute md:static md:z-auto  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-14" : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 md:my-0 my-7 hover:text-[#0ee951] "
              >
                <a href={link.link} className="duration-500">
                  {link.name}
                </a>
              </li>
            ))}
            <a href="/login" className="flex md:mx-4 gap-1 hover:text-[#0ee951]">
              <FaStethoscope className="text-amber-800 text-2xl" />
              <h5>Login</h5>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
