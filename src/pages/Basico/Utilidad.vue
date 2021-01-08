<template>
  <q-page>
    <br />
    <h3 class="titles">¿Para que sirve?</h3>
    <ParagraphInfo :info="utilidad" />
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
          <q-carousel-slide name="1" class="column no-wrap flex-center">
            <q-icon name="book" size="45px" />
            <div class="q-mt-md text-center txtUsos">
              {{ libro }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="2" class="column no-wrap flex-center">
            <q-icon name="event_available" size="45px" />
            <div class="q-mt-md text-center txtUsos">
              {{ calendar }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="3" class="column no-wrap flex-center">
            <q-icon name="play_circle_outline" size="45px" />
            <div class="q-mt-md text-center txtUsos">
              {{ player }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="4" class="column no-wrap flex-center">
            <q-icon name="brush" size="45px" />
            <div class="q-mt-md text-center txtUsos">
              {{ diseño }}
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
        <UsosList v-bind="usos" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { infoUsos } from "../../assets/dataArray";
import UsosList from "../../components/seccionBasica/UsosList";
import ParagraphInfo from "../../components/seccionBasica/ParagraphInfo";
import {
  libro,
  calendar,
  player,
  diseño,
  utilidad
} from "../../assets/dataInfo";

export default {
  name: "Utilidad",
  components: {
    ParagraphInfo,
    UsosList
  },
  data() {
    return {
      //Contenido del párrafo
      utilidad,

      //Manejo del carrousel
      slide: "1",
      autoplay: true,

      //Contenido del carrousel
      libro,
      calendar,
      player,
      diseño,

      //Elementos de la lista
      infoUsos
    };
  }
};
</script>
