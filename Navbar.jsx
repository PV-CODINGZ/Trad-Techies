import React, { useState, useEffect} from "react";
import { Sun, Moon, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaSignInAlt } from "react-icons/fa";
import { motion } from "motion/react";

// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";



// useGSAP(()=>{
//   gsap.to(".navbar",{
//     y:xValue,
//     duration:0.5,
//     ease: "elastic.out"
//   })
// })

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`w-full h-[70px] flex items-center px-6 shadow-md ${theme === "light" ? "bg-white text-black" : "bg-zinc-800 text-white"}`}>
      <motion.nav initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: 8 }} transition={{ ease: "easeInOut", duration: 0.5 }} className="flex justify-between items-center w-full">
        <div id="logo" className="text-4xl font-bold">
          Social<span className="text-purple-600">GLA</span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 rounded-md">
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
          <button onClick={toggleMenu} className="p-2 rounded-md md:hidden">
            <Menu />
          </button>
          <div className={`flex-col md:flex-row md:flex ${isMenuOpen ? "flex" : "hidden"} md:gap-4`}>
            <NavLink to="/SocialMediaPage" className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
              <FaHome /> Social-App
            </NavLink>
            <NavLink to="/profile" className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
              <FaUser /> Profile
            </NavLink>
            <NavLink to="/login" className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
              <FaSignInAlt /> Login
            </NavLink>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
