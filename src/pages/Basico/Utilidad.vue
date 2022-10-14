<template>
  <q-page>
    <br />
    <h3 class="text-center">¿Para que sirve?</h3>
    <p class="paragraphs">
      La pregunta correcta seria realmente
      <strong>¿Para que NO sirve?</strong>, ya que hoy en dia una computadora
      sirve para prácticamente cualquier necesidad que tengas (información,
      entretenimiento, tramites, comunicación, etc) y si dentro del abanico de
      funciones que ofrece no encontrás la que necesitas siempre esta disponible
      para adaptarse. Con el avance a pasos agigantados de lo que es la
      informática muchas de las herramientas que te ofrecen los sistemas
      actuales pueden ayudarte en tu dia a dia sin importar el trabajo que
      tengas o las tareas del hogar.
    </p>
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <q-carousel
          animated
          v-model="slide"
          swipeable
          control-color="white"
          navigation
          padding
          arrows
          height="250px"
          class="bg-dark text-white shadow-1 rounded-borders"
          infinite
          :autoplay="10000"
          transition-prev="slide-right"
          transition-next="slide-left"
        >
          <q-carousel-slide
            :name="s.id"
            class="column no-wrap flex-center"
            v-for="(s, i) in sirve"
            :key="i"
          >
            <q-icon :name="s.icon" size="45px" />
            <div class="q-mt-md text-center txtUsos">
              {{ s.text }}
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
    <p class="paragraphs">Y muchas otras cosas mas...</p>
    <div class="row text-center">
      <div
        class="q-pa-md listaUsos col-md-3"
        v-for="(usos, idx) in infoUsos"
        :key="idx"
      >
        <ElementsList v-bind="usos" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { infoUsos } from "../../assets/dataArray";
import ElementsList from "../../components/ElementsList";

import { sirve } from "../../assets/dataInfo";

export default {
  name: "Utilidad",
  components: {
    ElementsList,
  },
  data() {
    return {
      //Manejo del carrousel
      slide: "1",
      autoplay: true,

      //Contenido del carrousel
      sirve,

      //Elementos de la lista
      infoUsos,
    };
  },
};
</script>
