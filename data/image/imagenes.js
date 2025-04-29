// Imagenes | Importación automática
const logos       = import.meta.glob('@/assets/logo/*', { eager: true });
const backgrounds = import.meta.glob('@/assets/background/*', { eager: true });
const cards       = import.meta.glob('@/assets/cardHome/*', { eager: true });
const products    = import.meta.glob('@/assets/products/*', { eager: true });
const icons       = import.meta.glob('@/assets/icons/*', { eager: true });


// Función para convertir rutas en objetos { nombre: imagen }
function generarObjetos(imagenes) {
  return Object.fromEntries(
    Object.entries(imagenes).map(([path, module]) => {
      const name = path.split('/').pop().split('.').shift().toLowerCase();
      return [name, module.default];
    })
  );
}

// Exportaciones
export const imagenLogo = generarObjetos(logos);
export const backgroundPage = generarObjetos(backgrounds);
export const CardHomeImage = generarObjetos(cards);
