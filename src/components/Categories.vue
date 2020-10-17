<template>
  <a :href="link">
    <q-card class="ct_card text-white">
      <q-card-section>
        <div class="text-h6">{{ title }}</div>
      </q-card-section>
      <q-card-section>
        {{ text }}
      </q-card-section>
    </q-card>
  </a>
</template>

<script>
export default {
  name: "Categories",
  props: {
    title: String,
    text: String,
    link: String,
  },
};
</script>

<style>
</style>