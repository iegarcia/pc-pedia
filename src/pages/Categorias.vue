<template>
  <q-page>
    <div class="text-center">
      <h3>Categorías</h3>
      <br />
      <p class="txtBienvenida">
        Con el fin de mejorar la organización se agruparon en diversas
        categorías las consultas mas frecuentes, que en base a la experiencia
        que se tenga con la computadora van a ir variando
      </p>
    </div>
    <hr />
    <br />
    <div class="row justify-around">
      <div v-for="(categoria, idx) in categories" :key="idx">
        <Categories v-bind="categoria" style="font-size: 20px" />
        <br />
      </div>
      <router-view />
    </div>
  </q-page>
</template>

<script>
import Categories from "../components/Categories";
import { categories } from "../assets/dataArray";

export default {
  name: "Categorias",
  components: {
    Categories,
  },
  data() {
    return {
      categories,
    };
  },
};
</script>
