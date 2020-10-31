<template>
  <q-page>
    <div class="text-center">
      <h1>
        Bienvenidos a <br />
        PC-Pedia!
      </h1>
    </div>
    <div class="flex flex-center">
      <q-card dark bordered class="bg-grey-9 my-card">
        <q-card-section class="text-h6">
          {{ welcome }}
        </q-card-section>
        <q-card-section>
          <img
            src="https://media.tenor.co/images/4c4ed3bd62eb47ccdbb2643b695affd5/tenor.gif"
          />
        </q-card-section>
      </q-card>
    </div>
    <br />
    <div class="text-center">
      <q-btn color="secondary" label="Comenzar" size="xl" to="categorias" />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      welcome:
        "Este espacio esta hecho exclusivamente para aquellas personas que carecen de conocimiento en lo que se refiere al manejo del artefacto introducido originalmente en 1936 que fue evolucionando desde hasta lo que usamos hoy...La Computadora",
    };
  },
};
</script>
