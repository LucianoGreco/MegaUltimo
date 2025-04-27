import { imagenesCardHome, backgroundPage, imagenlogo } from "./image/imagenes";
import simulador from "./simulador";

const data = {
  backgroundPage: backgroundPage.Home,
  secciones: {
    novedades: {
      id: 1,
      name: "Novedades",
      description: "Últimas novedades en Mega Madera",
      image: imagenesCardHome.novedades,
      backgroundPage: backgroundPage.Novedades,
      page: "novedades", // Aquí se guarda la ruta relativa
    },
    Simulador: {
      id: 2,
      name: "Simulador",
      description: "Adaptamos tu diseño favorito a las dimensiones de tu hogar",
      image: imagenesCardHome.simulador,
      backgroundPage: backgroundPage.Simulador,
      page: "simulador",
      data: simulador.js,
    },
    herrajes: {
      id: 3,
      nombre: "Herrajes",
      descripcion: "Herrajes de alta calidad",
      cardHome: imagenesCardHome.herrajes,
      backgroundPage: backgroundPage.Herraje,
      pagina: "herrajes",
    },
    melaminas: {
      id: 4,
      nombre: "Melaminas",
      descripcion: "Placas de melamina de alta calidad",
      cardHome: imagenesCardHome.melaminas,
      backgroundPage: backgroundPage.Melaminas,
      pagina: "melaminas",
    },
    envios: {
      id: 5,
      nombre: "Envíos",
      descripcion: "Envíos a todo el país",
      cardHome: imagenesCardHome.envios,
      backgroundPage: backgroundPage.Envios,
      pagina: "envios",
    },
    contactos: {
      id: 6,
      nombre: "contactos",
      descripcion: "Información de contacto",
      cardHome: imagenesCardHome.contactos,
      backgroundPage: backgroundPage.Contactos,
      pagina: "contactos",
      nombreEmpresa: "Mega Madera",
      direccion: "Av. Moreno 1455",
      localidad: "San Rafael",
      provincia: "Mendoza",
      pais: "Argentina",
      telefono: "2604422505",
      email: "contacto@megamadera.com",
      horario: "Lunes a Sabados ( 9:00hs - 17:30hs )",
      logo: imagenlogo.logo,
      redes: {
        facebook: "https://facebook.com/megamadera",
        instagram: "instagram.com/mega.madera",
        whatsApp: "https://wa.me/+549260433172",
        gmail: "ventas.megamadera@gmail.com",
      },
    },
    muebles: {
      id: 7,
      nombre: "Muebles",
      descripcion: "Muebles para cada ambiente",
      cardHome: imagenesCardHome.muebles,
      backgroundPage: backgroundPage.Muebles,
      pagina: "muebles",
    },
  },
};

export default data;
