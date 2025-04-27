import {imagenLogo} from "../image/imagenes"

const contactos = {
      nombreEmpresa: "Mega Madera",
      direccion: {
        calle: "Av. Moreno 1455",
        localidad: "San Rafael",
        provincia: "Mendoza",
        pais: "Argentina",
      },
      telefono: "+54 260 4422505",
      correo: "contacto@megamadera.com",
      horarios: {
        mañana: {
          apertura: "08:00",
          cierre: "13:00",
        },
        tarde: {
          apertura: "16:00",
          cierre: "20:00",
        },
      },
      dias: ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
      logo: imagenLogo.logo, // Asegúrate de importar o validar esta referencia
      redesSociales: {
        facebook: "https://facebook.com/megamadera",
        instagram: "https://instagram.com/mega.madera",
        whatsapp: "https://wa.me/+549260433172",
        correoVentas: "ventas.megamadera@gmail.com",
      },
    };
    
    export default contactos;