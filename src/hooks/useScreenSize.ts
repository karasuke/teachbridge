import { useState, useEffect } from 'react';

/**
 * Tipo que representa las dimensiones de la pantalla.
 */
interface ScreenSize {
  width: number;
  height: number;
  maxLargeWidth: number;
}

/**
 * Hook personalizado para determinar las dimensiones de la pantalla.
 * @returns {ScreenSize} Objeto que contiene las dimensiones de la pantalla.
 */
const useScreenSize = (): ScreenSize => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);
  const maxLargeWidth: number = 992;

  const handleResize = (): void => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { width, height, maxLargeWidth };
};

/**
 * Hook personalizado para determinar las dimensiones de la pantalla.
 * @returns {ScreenSize} Objeto que contiene las dimensiones de la pantalla.
 */
const useResize = (): number => {
  /** Width de la pantalla */
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  /** Lectura de pantalla cuando se dimensiona el navegador */
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Agregar un event listener para el evento de cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidth;
};

export { useScreenSize, useResize };
export type { ScreenSize };
