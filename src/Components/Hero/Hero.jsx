import React from "react";
import Personaje from "../../assets/Personaje.png";
import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";
import { slideUp,slideInFromSide } from "../../utility/animation";

const Hero = () => {
  return (
    <section className="mt-36">
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Textos y descripción */}
        <div className="p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36">
          <motion.img 
            src={Logo} 
            alt="Logo del Juego" 
            variants={slideUp(0.2)}
            initial="initial"
            animate="animate"
          />
          <motion.p 
            className="py-12 text-white"
            variants={slideUp(0.3)}
            initial="initial"
            animate="animate"
            >
            Magic Quest es un emocionante juego de aventuras en un mundo de fantasía donde te embarcas en una épica búsqueda mágica. Explora reinos misteriosos, domina poderosos hechizos y enfréntate a criaturas legendarias mientras desvelas secretos ocultos y te conviertes en el héroe supremo. ¡La magia está en tus manos!
            </motion.p>

          <motion.div 
            className="flex justify-center gap-4"
            variants={slideUp(1)}
            initial="initial"
            animate="animate"            
            >
            <a className="bg-purple-600 py-2 px-12 rounded-3xl text-white hover:bg-purple-700 transition-all duration-300 items-center cursor-pointer">
              Jugar ahora 
              <i className="bi bi-controller text-xl ml-2"></i>
            </a>

            <a className="text-white flex items-center cursor-pointer">
              Ver GamePlay <i className="bi bi-youtube text-xl ml-2"></i>
            </a>
          </motion.div>


        </div>

        {/* Imagen */}
        <motion.div 
        className="p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36"
        variants={slideInFromSide("right", 0.5)}
        initial="initial"
        animate="animate"
        >
          <img src={Personaje} alt="Personaje del Juego" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
