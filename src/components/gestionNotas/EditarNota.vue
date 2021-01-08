<template>
  <q-card style="min-width: 350px">
    <q-card-section>
      <div class="text-h6">Editar Nota</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-select
          :options="catNombres"
          v-model="categoria"
          label="Elija la categoria"
        />
        <q-input
          filled
          label="Titulo *"
          v-model="titulo"
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
          <q-btn
            flat
            label="Agregar"
            type="submit"
            color="primary"
            v-close-popup
          />
          <q-btn
            label="Cancelar"
            color="primary"
            flat
            class="q-ml-sm"
            v-close-popup
          />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
import { catNombres } from "assets/dataArray";
import { ELIMINAR_NOTA, MODIFICAR_NOTA } from "../../store/notes/types";

export default {
  data() {
    return {
      editar: false,
      titulo: null,
      nota: null,
      categoria: null,
      catNombres
    };
  },
  mounted: function() {
    this.titulo = this.laNota.titulo;
    this.nota = this.laNota.texto;
    this.categoria = this.laNota.categoria;
  },
  methods: {
    onSubmit: function() {
      let data = {
        titulo: this.titulo,
        texto: this.nota,
        categoria: this.categoria
      };
      this.$store.dispatch("notas/" + MODIFICAR_NOTA, data);
    }
  },
  computed: {
    notas: function() {
      return this.$store.state.notas.notas;
    }
  },
  props: {
    laNota: null
  }
};
</script>
