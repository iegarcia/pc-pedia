<template>
  <div class="fullscreen bg-blue text-white titles q-pa-md flex flex-center">
    <div>
      <div style="font-size: 10vh">
        Parece que tuvimos un problema
      </div>

      <div class="text-h2" style="opacity:.8">
        ¿Porque no lo intentamos de nuevo?
      </div>
      <br />
      <q-btn
        size="xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Reintentar"
        no-caps
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Error404"
};
</script>
