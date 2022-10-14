<template>
  <q-list bordered>
    <q-item v-ripple style="pointer-events: none">
      <q-item-section avatar>
        <q-icon size="lg" :name="icon" />
      </q-item-section>

      <q-item-section>{{ text }}</q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: "ElementsList",
  props: {
    text: String,
    icon: String,
  },
};
</script>
