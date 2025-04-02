"use client"
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center relative ">
      {/* Text in the top left */}
      <div className="absolute top-10 left-10 text-primary font-semibold">
        <motion.h1 
          className="text-[0.8rem] md:text-lg"
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 2, delay: 0.5 }}       
        >
          OPTIMIZING PRODUCTIVITY, ONE STEP AT A TIME
        </motion.h1>
      </div>

      {/* Logo in the center */}
      <motion.img 
        src="/logoInBlue.png" 
        alt="Logo" 
        className=" w-3/4 md:w-1/5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
    </section>
  );
};

export default Hero;
