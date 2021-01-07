<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <div class="row">
          <div class="col-md-3">
            <BtnAtras />
          </div>
          <div class="col-md-6">
            <h3 class="titles">Conocimientos Básicos</h3>
          </div>
          <h4 class="titles">
            En esta area vamos a abarcar las dudas o lo que seria conocimiento
            general a la hora de comenzar a usar una computadora
          </h4>
          <p class="text-body1">
            Si haces clic con el mouse en las pestañas que figuran a
            continuación encontrás información personalizada a estos detalles
            básicos. Estas dudas son mas a modo informativo ya que no requieren
            que tu computadora este encendida.
            <br />
          </p>
        </div>
        <hr />
        <q-tabs
          class="navTabs"
          v-model="tab"
          narrow-indicator
          active-color="white"
        >
          <div v-for="(basics, idx) in infoBasica" :key="idx">
            <Basics v-bind="basics" />
          </div>
        </q-tabs>
      </div>
      <br />
      <router-view />
      <!-- Requiere prueba de campo previa a implementación
      <q-tabs
        class="navTabs"
        v-model="tab"
        narrow-indicator
        active-color="white"
      >
        <div v-for="(basics, idx) in infoBasica" :key="idx">
          <Basics v-bind="basics" />
        </div>
      </q-tabs> -->
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
    BtnAtras
  },
  data() {
    return {
      // tab: "info",
      //Listado de pestañas
      infoBasica,
      //Contenido expansion item
      text:
        "Dependiendo del tipo de computadora (portátil, escritorio) que tengas el botón desde donde se va a encender puede estar ubicado en distintos puntos. Si es de escritorio se encuentra ubicado en la parte superior del CPU, si es una portátil es mas común que este por la parte superior, arriba del teclado.",
      icon: "power_settings_new",
      label: "¿De donde se prende?",
      text2:
        "Hay muchas respuestas a eso dependiendo del equipo que tengas. Si es un equipo portátil lo primero que se hace cuando esto ocurre es revisar la batería. ¿Como revisar la batería? Solo conéctela a la corriente utilizando su cargador y vuelva a probar encenderla, si haciendo eso no arranco seguro se trate de una falla técnica. En el caso de ser un equipo de escritorio el problema puede residir en cualquiera de sus componentes por lo que le recomendamos que se comunique con soporte técnico o alguien que sepa",
      icon2: "sentiment_very_dissatisfied",
      label2: "¿Porque no enciende?"
    };
  }
};
</script>
