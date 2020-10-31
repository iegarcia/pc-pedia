<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-select
        v-model="categoria"
        :options="catNombres"
        label="Elija la categoria"
      />
      <q-input
        filled
        v-model="titulo"
        label="Titulo *"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'No puede quedar vacio']"
      />

      <q-input
        filled
        type="textarea"
        v-model="nota"
        label="Nota"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'No puede quedar vacio']"
      />

      <div>
        <q-btn label="Agregar" type="submit" color="primary" />
        <q-btn
          label="Limpiar"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { leerNotas } from "../services";
import { catNombres } from "../store/data";
import { AGREGAR_NOTA } from "../store/notes/types";
export default {
  data() {
    return {
      titulo: null,
      nota: null,
      categoria: null,
      catNombres
    };
  },
  methods: {
    onSubmit: function() {
      let nt = {
        titulo: this.titulo,
        texto: this.nota,
        existe: false,
        categoria: this.categoria
      };
      this.$store.dispatch("notas/" + AGREGAR_NOTA, nt);
    },
    onReset: function() {
      this.titulo = null;
      this.nota = null;
      this.categoria = null;
    },
    mounted: function() {
      this.notas = leerNotas();
    }
  }
};
</script>
