// src/utility/animation.js

export const slideUp = (delay = 0) => ({
  initial: { y: -50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay }
  }
});

export const slideInFromSide = (direction = "left", delay = 0) => ({
  initial: {
    x: direction === "left" ? -100 : 100, // 👈 aquí estaba el detalle
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay }
  }
});
