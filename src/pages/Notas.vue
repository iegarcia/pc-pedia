<template>
  <div>
    <q-splitter v-model="splitterModel" style="height: 450px">
      <template v-slot:before>
        <q-tabs v-model="tab" vertical class="text-teal">
          <q-tab name="agregar" label="Agregar Nota" />
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
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

<script>
import CargarNota from "../components/CargarNota";
export default {
  components: {
    CargarNota,
  },
  data() {
    return {
      tab: "agregar",
      splitterModel: 20,
    };
  },
};
</script>