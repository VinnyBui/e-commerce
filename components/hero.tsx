"use client"
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="w-full h-screen bg-cover bg-center flex justify-center items-center">
      <motion.img 
        src="/logoInBlue.png" 
        alt="Logo" 
        className="w-1/5" 
        initial={{ opacity: 0, scale: 0.8}}
        animate={{ opacity: 1, scale: 1}}
        transition={{ duration: 2, delay: 0.5 }}
      />
    </div>
  );
};

export default Hero;
