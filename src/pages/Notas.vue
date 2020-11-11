<template>
  <div>
    <q-toolbar class="bg-primary glossy text-white">
      <q-btn flat round dense icon="keyboard_backspace" to="/" />
      <q-avatar>
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/306/306350.svg"
        />
      </q-avatar>

      <q-toolbar-title>Notas Personales</q-toolbar-title>
    </q-toolbar>
    <q-splitter v-model="splitterModel" style="height: 450px">
      <template v-slot:before>
        <q-tabs v-model="tab" vertical class="text-teal">
          <q-tab name="agregar" label="Agregar Nota" />
          <q-tab name="listar" label="Listar Notas" />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="agregar">
            <CargarNota />
          </q-tab-panel>
          <q-tab-panel name="listar">
            <ListarNotas />
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

<script>
import CargarNota from "../components/gestionNotas/CargarNota";
import ListarNotas from "../components/gestionNotas/ListarNotas";
export default {
  components: {
    CargarNota,
    ListarNotas
  },
  data() {
    return {
      tab: "listar",
      splitterModel: 20
    };
  }
};
</script>
