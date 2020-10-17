<template>
  <q-page>
    <div class="text-center"></div>
    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <q-tabs
          v-model="tab"
          narrow-indicator
          dense
          align="justify"
          class="text-primary"
        >
          <q-route-tab to="info" name="que_es" label="Que es" />
          <q-tab name="sirve" label="Para que sirve" />
          <q-tab name="component" label="Componentes" />
          <q-tab name="perif" label="Perifericos" />
          <q-tab name="cantidad" label="¿Cuantas Hay?" />
        </q-tabs>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Basicos",
  data() {
    return {
      tab: "mails",
    };
  },
};
</script>
