<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section v-for="nota in nota" :key="nota.titulo">
        <div class="text-h6">{{ nota.titulo }}</div>
        <div class="text-subtitle2">{{ nota.categoria }}</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        {{ nota.texto }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    nota: function() {
      return this.$store.state.notas;
    }
  }
};
</script>
