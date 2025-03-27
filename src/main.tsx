// src/index.tsx

import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Loading from './components/Loading.tsx';
import './index.css';

const Root = () => {
  // Estado para controlar si la aplicación está cargando
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulamos un tiempo de carga (puedes cambiar el tiempo según lo que necesites)
    setTimeout(() => {
      setIsLoading(false); // Después de 3 segundos, cambia el estado y muestra el App
    }, 3000); // Puedes cambiar este tiempo a tu gusto
  }, []);

  return (
    <StrictMode>
      {isLoading ? <Loading /> : <App />} {/* Muestra Loading mientras esté cargando */}
    </StrictMode>
  );
};

createRoot(document.getElementById('root')!).render(<Root />);
