<template>
  <div class="q-pa-md bg-grey-10 text-white">
    <q-expansion-item
      expand-separator
      :icon="icon"
      :label="label"
      style="text-align: center; font-size:20px;"
    >
      <q-card class="bg-grey-9">
        <q-card-section style="font-size:18px;">
          {{ text }}
          <hr />
          <img :src="imgLink" style="width: 100%" />
          <hr />
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
</template>

<script>
export default {
  name: "TurnOn",
  props: {
    icon: String,
    label: String,
    text: String,
    imgLink: String
  }
};
</script>
