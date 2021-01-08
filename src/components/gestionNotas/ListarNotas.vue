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
          <q-icon name="delete" @click="eliminar = true" color="red" />
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
        <EditarNota :laNota="nt" />
      </q-dialog>
      <q-dialog v-model="eliminar" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <span class="q-ml-sm"
              >Estas seguro de queres borrar este elemento?</span
            >
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Cancelar" color="primary" v-close-popup />
            <q-btn
              label="Eliminar"
              color="red"
              @click="onDelete(idx)"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-card>
  </div>
</template>

<script>
import { catNombres } from "assets/dataArray";
import EditarNota from "../gestionNotas/EditarNota";
import { ELIMINAR_NOTA, MODIFICAR_NOTA } from "../../store/notes/types";
export default {
  data() {
    return {
      editar: false,
      eliminar: false,
      titulo: null,
      nota: null,
      categoria: null,
      catNombres
    };
  },
  components: {
    EditarNota
  },
  methods: {
    onDelete: function(idx) {
      this.$store.dispatch("notas/" + ELIMINAR_NOTA, idx);
    }
  },

  computed: {
    notas: function() {
      return this.$store.state.notas.notas;
    }
  }
};
</script>
