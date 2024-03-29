const infoBasica = [
  {
    link: "info",
    label: "Que es",
  },
  {
    link: "utilidad",
    label: "Para que sirve",
  },
  {
    link: "partes",
    label: "Componentes",
  },
  {
    link: "perif",
    label: "Periféricos",
  },
  {
    link: "cantidad",
    label: "¿Cuantas Hay?",
  },
];

const catNombres = [
  "Pantalla",
  "Sistema",
  "Navegador",
  "Carteles Extraños",
  "Extensiones",
];

const categories = [
  {
    title: "Conocimientos básicos",
    text: "Como en toda investigación se comienza por los conocimientos básicos como: que es una computadora, para que sirve, de que se compone, cuantas hay, periféricos, utilidades, etc",
    link: "#/info",
  },
  // {
  //   title: "Pantalla",
  //   text:
  //     "Al ser lo primero que vez es normal que surjan algunas dudas, como por ejemplo: componentes, como se configura, iconos, ventanas, personalización, accesos directos, etc",
  //   link: "#/pantalla"
  // },
  // {
  //   title: "Navegador",
  //   text:
  //     "Una de las herramientas que nos conecta con el mundo y una de las formas de entrar a internet mientras sepamos como utilizarlo que hace, para que sirve, que tiene, cuantos hay, utilidades, etc",
  //   link: "#/navegador"
  // },
  // {
  //   title: "Sistema",
  //   text:
  //     "Aca se encuentran las dudas generales del sistema que tengas instalado: Teclado, configuración, que es, notificaciones, botones, cuantos hay, compatibilidad, utilidades, etc",
  //   link: "#/sistema"
  // },
  // {
  //   title: "Carteles Extraños",
  //   text:
  //     "A quien no le ha aparecido al menos una vez un cartel que le genero incomodidad. Aca te aclaramos: Que son, tipos, de que sirven, cantidad, etc",
  //   link: "#/carteles"
  // },
  // {
  //   title: "Extensiones",
  //   text:
  //     "Notaste que ciertos elementos de la pc tiene un distintivo y hasta a veces es necesario el uso de algún programa externo? Bueno aca te comento para que sirve y aclaramos: Que son y para sirven.",
  //   link: "#/extensiones"
  // }
];

// const sTabs = [
//   {
//     name: "brillo",
//     label: "El brillo"
//   },
//   {
//     name: "fondo",
//     label: "Cambiar el fondo"
//   },
//   {
//     name: "desktop",
//     label: "El escritorio..."
//   },
//   {
//     name: "iconos",
//     label: "Iconos"
//   },
//   {
//     name: "ventana",
//     label: "Las ventanas"
//   }
// ];

// const sPanel = [
//   {
//     name: "brillo",
//     title: "Subir/bajar el brillo",
//     text:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium. Cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero."
//   }
// ];

const infoUsos = [
  {
    icon: "photo",
    text: "Album de fotos",
  },
  {
    icon: "calculate",
    text: "Calculadora",
  },
  {
    icon: "menu_book",
    text: "Enciclopedia",
  },
  {
    icon: "map",
    text: "Mapa",
  },
  {
    icon: "mail",
    text: "Correo",
  },
  {
    icon: "sports_esports",
    text: "Entretenimiento",
  },
  {
    icon: "show_chart",
    text: "Finanzas",
  },
  {
    icon: "wb_sunny",
    text: "Clima",
  },
  {
    icon: "chat",
    text: "Medio de comunicación",
  },
  {
    icon: "school",
    text: "Docente",
  },
  {
    icon: "local_florist",
    text: "Baúl de recuerdos",
  },
  {
    icon: "article",
    text: "Documentación",
  },
];

const hardwareList = [
  {
    label: "Hardware",
    children: [
      {
        label: "Perifericos",
      },
      {
        label: "Componentes internos",
      },
      {
        label: "Componentes externos",
      },
    ],
  },
];

const softwareList = [
  {
    label: "Software",
    children: [
      {
        label: "Sistema Operativo",
      },
      {
        label: "Programas",
      },
      {
        label: "Archivos",
      },
    ],
  },
];

const externalList = [
  {
    icon: "keyboard",
    itemLabel: "Teclado",
    spanText:
      "El teclado representa la evolución de la antigua maquina de escribir, ya que la misma permite la escritura dentro de la PC",
  },
  {
    icon: "desktop_windows",
    itemLabel: "Pantalla",
    spanText:
      "Nos permite visualizar lo que la PC contiene dentro de su sistema para mostrarnos y asi interactuar mas fácilmente",
  },
  {
    icon: "mouse",
    itemLabel: "Mouse",
    spanText:
      "Conocido como mouse, ratón o pad este podría interpretarse como nuestra mano dentro de la pc, ya que con este nos movemos dentro de la misma y es la mas importante",
  },
  {
    icon: "speaker",
    itemLabel: "Parlantes",
    spanText:
      "Por medio de estos la computadora se comunica con nosotros con música, videos, sonidos. Estos son importantes ya que si no están o no funcionan no podremos escucharla.",
  },
];
export {
  infoBasica,
  categories,
  catNombres,
  infoUsos,
  hardwareList,
  softwareList,
  externalList,
};
