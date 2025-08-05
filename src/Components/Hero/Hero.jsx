import React from "react";
import Personaje from "../../assets/Personaje.png";
import Logo from "../../assets/Logo.png";

const Hero = () => {
  return (
    <section className="mt-36">

      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Textos y descripción */}
        <div className="p-8">
          <img src={Logo} alt="Logo del Juego" />
          <p>
            Magic Quest es un emocionante juego de aventuras en un mundo de fantasía donde te embarcas en una épica búsqueda mágica. Explora reinos misteriosos, domina poderosos hechizos y enfréntate a criaturas legendarias mientras desvelas secretos ocultos y te conviertes en el héroe supremo. ¡La magia está en tus manos!
          </p>
          <di>
            <a>Jugar ahora <i className="bi bi-controller"></i></a>
            <a>Ver GamePlay <i className="bi bi-youtube"></i></a>
          </di>
        </div>

        {/* Imagen */}
        <div>
          <img src={Personaje} alt="Personaje del Juego" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
