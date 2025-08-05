import React, { useState } from 'react';
import Logo from '../../assets/Logo.png';

const navbarLinks = [
  { id: 1, title: "Inicio", link: "/" },
  { id: 2, title: "Nosotros", link: "#" },
  { id: 3, title: "Contacto", link: "#" },
  { id: 4, title: "Soporte", link: "#" }
];

const navbarRedes = [
  { id: 1, title: "Instagram", link: "https://www.instagram.com", icon: "bi bi-instagram" },
  { id: 2, title: "TikTok", link: "https://www.tiktok.com", icon: "bi bi-tiktok" }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50
                 bg-purple-900/10 backdrop-blur-md backdrop-saturate-150
                 border-b border-white/10"
    >
      {/* Contenedor principal */}
      <div className="flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3">
        {/* Logo */}
        <div>
          <img
            src={Logo}
            alt="Logo del sitio"
            className="w-[60px] sm:w-[80px] md:w-[100px]"
          />
        </div>

        {/* Botón hamburguesa para móviles */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-white focus:outline-none"
            aria-label="Abrir o cerrar menú"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Enlaces escritorio */}
        <div className="hidden md:flex">
          <ul className="flex space-x-4 sm:space-x-8 items-center">
            {navbarLinks.map(link => (
              <li key={link.id}>
                <a
                  href={link.link}
                  className="text-white hover:text-sky-200 text-sm sm:text-base md:text-lg font-semibold transition-transform transform hover:scale-110 duration-300 inline-block"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Redes sociales escritorio */}
        <div className="hidden md:flex">
          <ul className="flex space-x-3 sm:space-x-6 items-center">
            {navbarRedes.map(link => (
              <li key={link.id}>
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center transition-transform duration-300 transform hover:scale-125"
                >
                  <i className={`${link.icon} sm:text-2xl text-lg text-white hover:text-sky-200 transition-all duration-300`} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 bg-purple-900/70 backdrop-blur-md py-4 transition-all duration-300">
          {/* Enlaces móviles */}
          <ul className="flex flex-col items-center gap-2">
            {navbarLinks.map(link => (
              <li key={link.id}>
                <a
                  href={link.link}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-base hover:text-sky-200 transition text-center"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Redes móviles */}
          <ul className="flex justify-center items-center gap-6 border-t border-white pt-4">
            {navbarRedes.map(link => (
              <li key={link.id}>
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center text-white text-xl hover:text-sky-200 transition"
                >
                  <i className={link.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
