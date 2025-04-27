import { CardHomeImage, backgroundPage } from "@/data/image/imagenes";
import { info } from "@/data/pages/gestor";

const data = {
  backgroundPage: backgroundPage.home,
  /*
  home
  novedades
  melaminas
  muebles
  simulador
  herrajes
  envios
  contactos
  */
  secciones: {
    novedades: {
      id: 1,
      name: "novedades",
      // description: "últimas novedades en Mega Madera",
      description: "Últimas novedades",
      image: CardHomeImage.novedades,
      backgroundPage: backgroundPage.novedades,
      page: "/novedades",
      info: info.novedades,
    },
    melaminas: {
      id: 2,
      name: "melaminas",
      // description: "placas de melamina de alta calidad",
      description: "Placas de alta calidad",
      image: CardHomeImage.melaminas,
      backgroundPage: backgroundPage.melaminas,
      page: "/melaminas",
      info: info.melaminas,
    },
    simulador: {
      id: 3,
      name: "simulador",
      // description: "adaptamos tu diseño favorito a  tu hogar",
      description: "Adaptamos tu diseño",
      image: CardHomeImage.simulador,
      backgroundPage: backgroundPage.simulador,
      page: "/simulador",
      info: info.simulador,
    },
    muebles: {
      id: 4,
      name: "muebles",
      // description: "muebles para cada ambiente",
      description: "Para cada ambiente",
      image: CardHomeImage.muebles,
      backgroundPage: backgroundPage.muebles,
      page: "/muebles",
      info: info.muebles,
    },
    herrajes: {
      id: 5,
      name: "herrajes",
      description: "De alta calidad",
      image: CardHomeImage.herrajes,
      backgroundPage: backgroundPage.herrajes,
      page: "/herrajes",
      info: info.herrajes,
    },
    envios: {
      id: 6,
      name: "envios",
      // description: "envíos a todo el país",
      description: "A todo el país",
      image: CardHomeImage.envios,
      backgroundPage: backgroundPage.envios,
      page: "/envios",
      info: info.envios,
    },
    contactos: {
      id: 7,
      name: "contactos",
      // description: "información de contacto",
      description: "Contactanos",
      image: CardHomeImage.contactos,
      backgroundPage: backgroundPage.contactos,
      page: "/contactos",
      info: info.contactos,
    },
  },
};

export default data;