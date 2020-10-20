<template>
  <q-page>
    <div class="text-center">
      <h3>Categorias</h3>
      <br />
      <p class="txtBienvenida">
        Con el fin de mejorar la organizacion se agruparon en diversas
        categorias las consultas mas frecuentes, que en base a la experiencia
        que se tenga con la computadora van a ir variando
      </p>
    </div>
    <hr />
    <br />
    <div class="row justify-around">
      <div v-for="(categoria, idx) in categories" :key="idx">
        <Categories v-bind="categoria" style="font-size: 20px" />
        <br />
      </div>
      <router-view />
    </div>
  </q-page>
</template>

<script>
import Categories from "../components/Categories";
export default {
  name: "Categorias",
  components: {
    Categories,
  },
  data() {
    return {
      categories: [
        {
          title: "Conocimientos basicos",
          text:
            "Como en toda investigacion se comienza por los conocimientos basicos como: que es una computadora, para que sirve, de que se compone, cuantas hay, perifericos, utilidades, etc",
          link: "#/basicos",
        },
        {
          title: "Pantalla",
          text:
            "Al ser lo primero que vez es normal que surjan algunas dudas, como por ejemplo: componentes, como se configura, iconos, ventanas, personalizacion, accesos directos, etc",
          link: "#/pantalla",
        },
        {
          title: "Navegador",
          text:
            "Una de las herramientas que nos conecta con el mundo y una de las formas de entrar a internet mientras sepamos como utilizarlo que hace, para que sirve, que tiene, cuantos hay, utilidades, etc",
          link: "#/navegador",
        },
        {
          title: "Sistema",
          text:
            "Aca se encuentran las dudas generales del sistema que tengas instalado: Teclado, configuracion, que es, notificaciones, botones, cuantos hay, compatibilidad, utilidades, etc",
          link: "#/sistema",
        },
        {
          title: "Carteles Extraños",
          text:
            "A quien no le ha aparecido al menos una vez un cartel que le genero incomodidad. Aca te aclaramos: Que son, tipos, de que sirven, cantidad, etc",
          link: "#/carteles",
        },
        {
          title: "Extensiones",
          text:
            "Notaste que ciertos elementos de la pc tiene un distintivo y hasta a veces es necesario el uso de algun programa externo? Bueno aca te comento para que sirve y aclaramos: Que son y para sirven.",
          link: "#/extensiones",
        },
      ],
    };
  },
};
</script>