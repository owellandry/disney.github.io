// src/components/Loading.tsx

import { RiMickeyFill } from "react-icons/ri";


const generateRandomStars = (num: number) => {
  const stars = [];
  for (let i = 0; i < num; i++) {
    const top = Math.random() * 100; // Posición aleatoria en el eje Y (de 0% a 100%)
    const left = Math.random() * 100; // Posición aleatoria en el eje X (de 0% a 100%)
    const size = Math.random() * 3 + 2; // Tamaño aleatorio para las estrellas (de 2px a 5px)
    const delay = Math.random() * 2; // Retraso aleatorio para la animación

    stars.push(
      <div
        key={i}
        className={`absolute w-${size} h-${size} bg-white rounded-full opacity-70 animate-bounce blur-sm`}
        style={{
          top: `${top}%`,
          left: `${left}%`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  }
  return stars;
};

const Loading = () => {
  const stars = generateRandomStars(50); // Generamos 50 estrellas

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-[#011324] via-[#022838] via-[#044352] via-[#06616E] to-[#0A99A3] relative overflow-hidden">
      {/* Estrellas aleatorias */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10">
        {stars}
      </div>

      {/* Icono de Mickey Mouse más grande */}
      <RiMickeyFill className="text-[#FFF] text-9xl animate-spin-slow mb-4" />

      {/* Texto de "Loading..." */}
      <p className="text-3xl font-semibold text-white animate-pulse">Magia en proceso...</p>
    </div>
  );
};

export default Loading;
