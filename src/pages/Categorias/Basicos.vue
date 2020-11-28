<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <div class="row">
          <div class="col-3">
            <BtnAtras />
          </div>
          <div class="col-6">
            <h3 class="text-center">Conocimientos Básicos</h3>
          </div>
        </div>
        <hr />
        <q-tabs
          v-model="tab"
          narrow-indicator
          dense
          class="text-primary"
          active-bg-color="primary"
          active-color="white"
        >
          <div v-for="(basics, idx) in infoBasica" :key="idx">
            <Basics v-bind="basics" />
          </div>
        </q-tabs>
      </div>
      <router-view />
      <div class="text-center">
        <h4 class="titles">
          En esta area vamos a abarcar las dudas o lo que seria conocimiento
          general a la hora de comenzar a usar una computadora
        </h4>
        <p class="text-body1">
          Si haces clic con el mouse en las pestañas que figuran arriba
          encontrás información personalizada a estos detalles básicos. Estas
          dudas son mas a modo informativo ya que no requieren que tu
          computadora este encendida. <br />
          Pero nunca esta de mas conocer la parte mas importante...
          <br />
        </p>
        <br />
        <div class="row">
          <div class="col-6">
            <BasicsInfoTab
              :text="text"
              :icon="icon"
              :label="label"
              :imgLink="imgLink"
            />
          </div>
          <!-- <div class="col-6"></div> -->
          <div class="col-6">
            <BasicsInfoTab :text="text2" :icon="icon2" :label="label2" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Basics from "../../components/seccionBasica/BasicsRouteTabs";
import BasicsInfoTab from "src/components/seccionBasica/BasicsInfoTab.vue";
import BtnAtras from "../../components/BtnAtras";
import { infoBasica } from "assets/data";

export default {
  name: "Basicos",
  components: {
    Basics,
    BtnAtras,
    BasicsInfoTab
  },
  data() {
    return {
      // tab: "info",
      //Listado de pestañas
      infoBasica,
      //Contenido expansion item
      text:
        "Dependiendo del tipo de computadora que tengas el botón desde donde se va a encender puede estar ubicado en distintos puntos. Aunque es mas común que este por la parte superior, arriba del teclado.",
      icon: "power_settings_new",
      label: "¿De donde se enciende?",
      imgLink: "https://i.blogs.es/6cf931/cabecera-1/450_1000.jpg",
      text2:
        "Hay muchas respuestas a eso por lo tanto lo primero que se hace cuando esto ocurre es revisar la bateria. Como revisar la bateria? Solo conéctela a la corriente y vuelva a probar encenderla, sino haciendo eso no arranco seguro se trate de una falla técnica",
      icon2: "sentiment_very_dissatisfied",
      label2: "¿Porque no enciende?"
      // imgLink: "https://i.blogs.es/6cf931/cabecera-1/450_1000.jpg"
    };
  }
};
</script>
