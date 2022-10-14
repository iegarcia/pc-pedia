//Que es
const paragraphs = [
  {
    id: 1,
    p1: "",
  },
  {
    id: 2,
    p2: "Hoy en día un celular es una computadora, como lo es un lavarropas, heladera incluso hasta una casa. Todo lo que realice una acción de forma autónoma. La misma hecha a base a de una serie de componentes que la hacen funcionar sea la maquina de 1833 o una actual como toda maquina tiene sus elementos, dependiendo del tipo algunos elementos varían en su tamaño o simplemente están diseñados para ser mas compactos mientras que en el interior se comportan de la misma manera.",
  },
  {
    id: 3,
    p3: "A todo esto una de las preguntas mas frecuentes al momento de estar de cara con una maquina y no tener conocimiento alguno suele ser la misma de siempre para algunas personas...",
  },
];

const questions = [
  {
    id: 1,
    text: "Dependiendo del tipo de computadora (portátil, escritorio) que tengas el botón desde donde se va a encender puede estar ubicado en distintos puntos. Si es de escritorio se encuentra ubicado en la parte superior del CPU, si es una portátil es mas común que este por encima del teclado.",
    icon: "fas fa-power-off",
    label: "¿De donde se prende?",
  },
  {
    id: 2,
    text: "Hay muchas respuestas a eso dependiendo del equipo que tengas. Si es un equipo portátil lo primero que se hace cuando esto ocurre es revisar la batería. ¿Como revisar la batería? Solo conéctela a la corriente utilizando su cargador y vuelva a probar encenderla, si haciendo eso no arranco seguro se trate de una falla técnica. En el caso de ser un equipo de escritorio el problema puede residir en cualquiera de sus componentes por lo que le recomendamos que se comunique con soporte técnico o alguien que sepa",
    icon: "fas fa-frown",
    label: "¿Porque no enciende?",
  },
];
// Para que sirve?
const sirve = [
  {
    id: 1,
    icon: "book",
    text: "Estas pensando en escribir un libro, tomar apuntes, armar tu lista del super. Puede ser tu borrador",
  },
  {
    id: 2,
    icon: "event_available",
    text: "Tenes algún casamiento, reunión, viaje o algún otro evento del cual querés acordarte. Puede ser tu calendario",
  },
  {
    id: 3,
    icon: "fas fa-tv",
    text: "Querés escuchar música, ver algún video o alguna película. Puede ser tu reproductor",
  },
  {
    id: 4,
    icon: "fas fa-palette",
    text: "Estas pensando en hacer un plano, dibujar, hacer banners o diseñar. Puede ser tu lienzo",
  },
];

//Componentes
const components = [
  {
    title: "Hardware",
    image:
      "https://miblodotblog.files.wordpress.com/2017/11/96c64-1325170579_295287224_1-servicio-tecnico-de-hardware-y-software-para-pc-j-c-independencia.jpg",
    text: "Si pensamos en la computadora como un cuerpo humano, el hardware representa lo externo, el conjunto de componentes que dan forma a su estructura física conocida como CPU. Todo conectado dentro de un gabinete que en base al tipo de computadora puede variar su tamaño e incluso no tener uno",
  },
  {
    title: "Perifericos",
    image: "",
    text: "Periférico es el termino genérico que se le asigno a cualquier aparato que se conecte a la computadora, hay distintos tipos de periféricos que veremos con mas detalle mas adelante en la siguiente sección...",
  },
  {
    title: "Componentes internos",
    image: "https://i.ibb.co/3RxSDwh/person-compare.png",
    text: "Como su nombre lo indica son componentes que se encuentran dentro del CPU, algunos de estos son indispensables para la computadora otros no tanto. Si dividimos y etiquetamos los componentes basándonos en un cuerpo humano notamos lo siguiente.",
  },
  {
    title: "Componentes externos",
    image: "",
    text: "Asi como vimos internos también tenemos con componentes externos, estos a diferencia de los internos que interactúan con la pc, los externos le permiten al usuario comunicarse con ella entre estos se encuentran ciertos periféricos y son los siguientes.",
  },
  {
    title: "Software",
    image: "",
    text: "Por otro lado cuando hablamos de software hacemos referencia a lo que ocurre dentro de la PC, mas precisamente dentro del sistema instalado disco rígido. Esta representa mas bien la parte lógica de la computadora y algunas cosas que ocurren aca dentro escapan de nuestro control o percepción.",
  },
  {
    title: "Sistema operativo",
    image: "",
    text: "En el apartado anterior hablamos de la parte lógica de una computadora, una parte muy importante dentro de esta lógica es el sistema operativo porque es donde se hace todo sin importar que es lo que hagas. Esta parte es muy importante porque administra todo y se comunica con cada parte de la PC sea externa o interna.",
  },
  {
    title: "Programas",
    image: "",
    text: "Los programas son un conjunto de instrucciones que dependiendo de su tipo tienen diversas tareas que van desde edición de imágenes pasando por manipulación de videos hasta interpretación de texto o entretenimiento con juegos y muchas cosas mas...",
  },
  {
    title: "Archivos",
    image: "https://i.ibb.co/0fqnkGT/files.png",
    text: "Archivo es todo pedazo de información que se encuentre guardado dentro de la computadora, estos pueden contener datos que utiliza el sistema operativo para su funcionamiento, de algunos programas en particular, pueden ser documentos. Aunque lo que estamos mas acostumbrados a ver es contenido multimedia ya que el resto de los archivos esta lejos de miradas indiscretas reservado para usuarios avanzados.",
  },
];

//Perifericos
const perifericos = [
  {
    periferInfo:
      "Como vimos en el apartado anterior los periféricos son cualquier aparato que se conecte al ordenador que permite el intercambio de información tanto externa como interna.",
  },
];

export { paragraphs, sirve, questions, components, perifericos };
