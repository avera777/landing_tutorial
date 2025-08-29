import React, { useState, useEffect } from "react";
import Personaje from "../../assets/Personaje.png";
import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";
import { slideUp, slideInFromSide } from "../../utility/animation";

const Hero = () => {
  // Estado del modal de video
  const [showVideo, setShowVideo] = useState(false);

  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    if (showVideo) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [showVideo]);

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
            Magic Quest es un emocionante juego de aventuras en un mundo de
            fantasía donde te embarcas en una épica búsqueda mágica. Explora
            reinos misteriosos, domina poderosos hechizos y enfréntate a
            criaturas legendarias mientras desvelas secretos ocultos y te
            conviertes en el héroe supremo. ¡La magia está en tus manos!
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
            {/* Abrir modal con useState */}
            <button
              type="button"
              onClick={() => setShowVideo(true)}
              className="text-white flex items-center cursor-pointer"
            >
              Ver GamePlay <i className="bi bi-youtube text-xl ml-2"></i>
            </button>
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

      {/* Modal de video (se monta con showVideo) */}
      {showVideo && <VideoModal onClose={() => setShowVideo(false)} />}
    </section>
  );
};

// Modal sencillo reutilizable
function VideoModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-3xl aspect-video bg-black rounded-xl overflow-hidden shadow-xl">
        
        {/* Botón cerrar dentro del modal */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-md px-4 py-2 transition cursor-pointer"
          aria-label="Cerrar video"
        >
          Close Video
        </button>

        {/* Iframe de YouTube (ejemplo) */}
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
          title="Gameplay"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}



export default Hero;
