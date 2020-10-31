<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <div class="row">
          <div class="col-3">
            <BtnAtras />
          </div>
          <div class="col-6">
            <h3 class="text-center">Conocimientos Basicos</h3>
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
      <div class="flex flex-center">
        <h4 class="titles">
          En esta area vamos a abarcar las dudas o lo que seria conocimiento
          general a la hora de comenzar a usar una computadora
        </h4>
        <p class="text-body1">
          Si haces clic con el mouse en las pestañas que figuran arriba
          encontras informacion personalizada a estos detalles basicos. Estas
          dudas son mas a modo informativo ya que no requieren que tu
          computadora este encendida. <br />
          Pero nunca esta de mas conocer la parte mas importante...
          <br />
        </p>
        <br />
        <div>
          <q-expansion-item
            expand-separator
            icon="perm_identity"
            label="Account settings"
            caption="John Doe"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex
                numquam, dolorum officiis modi facere maiores architecto
                suscipit iste eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Basics from "../../components/BasicsRouteTabs";
import BtnAtras from "../../components/BtnAtras";
import { infoBasica } from "../../store/data";

export default {
  name: "Basicos",
  components: {
    Basics,
    BtnAtras,
  },
  data() {
    return {
      tab: "info",
      infoBasica,
    };
  },
};
</script>
