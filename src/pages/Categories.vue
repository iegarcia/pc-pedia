<template>
  <q-page>
    <div class="text-center">
      <h3>Categorias</h3>
      <br />
      <p class="txtBienvenida">
        Con el fin de mejorar la organizacion se agruparon en diversas
        categorias las consultas mas frecuentes, que en base a la experiencia
        que se tenga con la computadora van a ir variando
      </p>
    </div>
    <hr />
    <br />
    <div class="row justify-around">
      <div class="col col-md-3">
        <q-card class="ct_card text-white">
          <q-card-section>
            <div class="text-h6">Conocimientos Basicos</div>
          </q-card-section>
          <q-card-section>
            {{ basics }}
          </q-card-section>
        </q-card>
        <br />

        <q-card class="ct_card text-white">
          <q-card-section>
            <div class="text-h6">Pantalla</div>
          </q-card-section>
          <q-card-section>
            {{ screen }}
          </q-card-section>
        </q-card>
        <br />

        <q-card class="ct_card text-white">
          <q-card-section>
            <div class="text-h6">Sistema</div>
          </q-card-section>
          <q-card-section>
            {{ system }}
          </q-card-section>
        </q-card>
      </div>

      <div class="col col-md-3">
        <q-card class="ct_card text-white">
          <q-card-section>
            <div class="text-h6">Navegador</div>
          </q-card-section>
          <q-card-section>
            {{ browser }}
          </q-card-section>
        </q-card>
        <br />

        <q-card class="ct_card text-white">
          <q-card-section>
            <div class="text-h6">Carteles Extraños</div>
          </q-card-section>
          <q-card-section>
            {{ banners }}
          </q-card-section>
        </q-card>
        <br />

        <q-card class="ct_card text-white">
          <q-card-section>
            <div class="text-h6">Extensiones</div>
          </q-card-section>
          <q-card-section>
            {{ extensions }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Categories",
  data() {
    return {
      basics:
        "Como en toda investigacion se comienza por los conocimientos basicos como: que es una computadora, para que sirve, de que se compone, cuantas hay, perifericos, utilidades, etc",
      screen:
        "Al ser lo primero que vez es normal que surjan algunas dudas, como por ejemplo: componentes, como se configura, iconos, ventanas, personalizacion, accesos directos, etc",
      browser:
        "Una de las herramientas que nos conecta con el mundo y una mientras sepamos como utilizarlo que hace, para que sirve, que tiene, cuantos hay, utilidades, etc",
      system:
        "Que es, para que sirve, de que se compone, cuantas hay, perifericos, utilidades, etc",
      extensions:
        "Que es, para que sirve, de que se compone, cuantas hay, perifericos, utilidades, etc",
      banners:
        "Que es, para que sirve, de que se compone, cuantas hay, perifericos, utilidades, etc"
    };
  }
};
</script>
