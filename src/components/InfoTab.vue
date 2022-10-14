<template>
  <div class="q-pa-md bg-grey-10 text-white">
    <q-expansion-item
      expand-separator
      :icon="icon"
      :label="label"
      class="tabInfoTitle"
    >
      <q-card class="bg-grey-9">
        <q-card-section class="tabInfoBody">
          {{ text }}
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
</template>

<script>
export default {
  name: "InfoTab",
  props: {
    icon: String,
    label: String,
    text: String,
  },
};
</script>
