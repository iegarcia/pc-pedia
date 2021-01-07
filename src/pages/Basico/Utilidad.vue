<template>
  <q-page>
    <br />
    <h3 class="titles">¿Para que sirve?</h3>
    <ParagraphInfo :info="info" />
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
          height="300px"
          class="bg-positive text-white shadow-1 rounded-borders"
          infinite
          :autoplay="10000"
          transition-prev="slide-right"
          transition-next="slide-left"
        >
          <q-carousel-slide name="1" class="column no-wrap flex-center">
            <q-icon name="book" size="56px" />
            <div class="q-mt-md text-center" style="font-size: 25px">
              {{ libro }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="2" class="column no-wrap flex-center">
            <q-icon name="live_tv" size="56px" />
            <div class="q-mt-md text-center">
              {{ lorem }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="3" class="column no-wrap flex-center">
            <q-icon name="layers" size="56px" />
            <div class="q-mt-md text-center">
              {{ lorem }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="4" class="column no-wrap flex-center">
            <q-icon name="terrain" size="56px" />
            <div class="q-mt-md text-center">
              {{ lorem }}
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </q-page>
</template>

<script>
import ParagraphInfo from "../../components/seccionBasica/ParagraphInfo";

export default {
  name: "Utilidad",
  components: {
    ParagraphInfo
  },
  data() {
    return {
      //Manejo del carrousel
      slide: "1",
      autoplay: true,
      //Contenido del carrousel
      libro:
        "Estas pensando en escribir un libro, tomar apuntes puede ser tu borrador",
      //Contenido del párrafo
      info:
        "La pregunta correcta seria realmente '¿Para que NO sirve?', ya que hoy en dia una computadora sirve para prácticamente cualquier necesidad que tengas (información, entretenimiento, tramites, comunicación, etc) y si dentro del abanico de funciones que ofrece no encontrás la que necesitas siempre esta disponible para adaptarse. Con el avance a pasos agigantados de lo que es la informática muchas de las herramientas que te ofrecen los sistemas actuales pueden ayudarte en tu dia a dia sin importar el trabajo que tengas o las tareas del hogar"
    };
  }
};
</script>
