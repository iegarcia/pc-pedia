<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-card
      dark
      bordered
      class="bg-grey-9 my-card"
      v-for="(nt, idx) in notas"
      :key="nt.titulo"
      style="margin-bottom: 15px"
    >
      <q-card-section>
        <q-btn flat class="icon">
          <q-icon name="delete" @click="onDelete(idx)" color="red" />
        </q-btn>
        <q-btn flat @click="editar = true" class="icon">
          <q-icon name="edit" />
        </q-btn>
        <div class="text-h6" style="text-align: left">{{ nt.titulo }}</div>
        <div class="text-subtitle2" style="text-align: left">
          {{ nt.categoria }}
        </div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        {{ nt.texto }}
      </q-card-section>
      <q-dialog v-model="editar" persistent>
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="text-h6">Editar Nota</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-form @submit="onSubmit" class="q-gutter-md">
              <q-select
                :options="catNombres"
                v-model="categoria"
                :value="nt.categoria"
                label="Elija la categoria"
              />
              <q-input
                filled
                label="Titulo *"
                v-model="titulo"
                :value="nt.titulo"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'No puede quedar vacio',
                ]"
              />

              <q-input
                filled
                type="textarea"
                v-model="nota"
                :value="nt.texto"
                label="Nota"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'No puede quedar vacio',
                ]"
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
      </q-dialog>
    </q-card>
  </div>
</template>

<script>
import { catNombres } from "../store/data";
import { ELIMINAR_NOTA, MODIFICAR_NOTA } from "../store/notes/types";
export default {
  data() {
    return {
      editar: false,
      titulo: null,
      nota: null,
      categoria: null,
      catNombres,
    };
  },
  methods: {
    onDelete: function (idx) {
      this.$store.dispatch("notas/" + ELIMINAR_NOTA, idx);
    },
    onSubmit: function () {
      let data = {
        titulo: this.titulo,
        texto: this.nota,
        categoria: this.categoria,
      };
      this.$store.dispatch("notas/" + MODIFICAR_NOTA, data);
    },
    // onReset: function () {
    //   this.titulo = null;
    //   this.nota = null;
    //   this.categoria = null;
    // },
  },
  computed: {
    notas: function () {
      return this.$store.state.notas.notas;
    },
  },
};
</script>
