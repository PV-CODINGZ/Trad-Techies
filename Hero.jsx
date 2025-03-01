import { motion } from "motion/react";
import React from "react";
import CircularScrollLoader from "./CircularScrollLoader";

const Hero = ({ theme }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 transition-all bg-[https://img.freepik.com/free-psd/realistic-school-supplies_23-2150588345.jpg?ga=GA1.1.492272234.1727431317&semt=ais_hybrid] ${

        theme === "light" ? "bg-white text-black" : " text-white"
      }`}
    >
      {/* Left Content */}
      <motion.div 
       


      className="text-center md:text-left max-w-xl">
        <motion.h1 
         initial={{ y: 20, opacity: 0.5 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-[4.7vw] font-bold leading-tight text-black">
          Connect with <br /> your{" "}
          <motion.span   
           initial={{ x: 20, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ duration: 1.7,delay:0.3, ease: "easeInOut" }}
           className="text-purple-600 text-[4vw]">College <br /> Community</motion.span>
        </motion.h1>
        <motion.p

initial={{ y: 20, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.5, delay:1, ease: "easeOut" }}

          className={`mt-4  ${
            theme === "light" ? "text-gray-600" : "text-gray-800"
          } font-bold font-Montserrat` }  
        >
          SocialGLA is exclusively for GLA students. Share thoughts, events,
          and connect with peers - anonymously or as yourself.
        </motion.p>

        <div className="buttons -6 flex flex-col md:flex-row gap-4 mt-10">
          <motion.button 
          
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4,delay:1.4, ease: "easeInOut" }}
          
          className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition">
            Join with College Email
          </motion.button>

          <motion.button

             
initial={{ x: 20, opacity: 0 }}
animate={{ x: 0, opacity: 1 }}
transition={{ duration: 0.4,delay:1.4, ease: "easeInOut" }}

            className={`border px-6 py-3 rounded-md transition  ${
              theme === "light"
                ? "border-gray-300 text-black hover:bg-gray-100"
                : "border-gray-500 text-zinc-700 hover:text-zinc-200 hover:bg-gray-800"
            }`}
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      {/*  UI Mockup */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative mt-12 md:mt-0"
      >
        <div className="w-[350px] h-[450px] bg-gradient-to-br from-purple-100 to-purple-300 rounded-3xl shadow-lg flex items-center justify-center">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "backInOut" }}
            className="w-[80%] h-[90%] bg-white rounded-xl shadow-md p-4"
          >
            <div className="flex gap-3">
              <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
              <div className="w-3/4 h-4 bg-gray-200 rounded-md"></div>
            </div>
            <div className="w-full h-16 bg-gray-100 rounded-md mt-2"></div>

            <div className="flex gap-3 mt-6">
              <div className="w-4 h-4 bg-purple-300 rounded-full"></div>
              <div className="w-3/4 h-4 bg-gray-200 rounded-md"></div>
            </div>
            <div className="w-full h-12 bg-gray-100 rounded-md mt-2"></div>
          </motion.div>
        </div>
      </motion.div>
      <CircularScrollLoader/>
    </motion.section>
  );
};

export default Hero;
