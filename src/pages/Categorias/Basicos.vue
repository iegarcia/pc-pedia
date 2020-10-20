<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <div class="row">
          <div class="col-3">
            <q-btn flat label="Align to right" />
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
          align="justify"
          class="text-primary"
          active-bg-color="primary"
          active-color="white"
        >
          <q-route-tab to="info" name="info" label="Que es" />
          <q-route-tab to="utilidad" name="sirve" label="Para que sirve" />
          <q-route-tab to="partes" name="component" label="Componentes" />
          <q-route-tab to="perif" name="perif" label="Perifericos" />
          <q-route-tab to="cantidad" name="cantidad" label="¿Cuantas Hay?" />
        </q-tabs>
      </div>
      <router-view />
      <div class="flex flex-center">
        <h4>
          En esta area vamos a abarcar las dudas mas comunes a la hora de
          comenzar a usar una computadora
        </h4>
        <br />
        <p class="text-body1">
          Inicialmente comenzaremos indicandote la parte mas importante...
          <strong>¿Como se prende?</strong>
        </p>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Basicos",
  data() {
    return {
      tab: "info"
    };
  }
};
</script>
