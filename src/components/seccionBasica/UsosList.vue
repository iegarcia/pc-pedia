<template>
  <q-list bordered>
    <q-item v-ripple>
      <q-item-section avatar>
        <q-icon size="lg" :name="icon" />
      </q-item-section>

      <q-item-section>{{ text }}</q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: "UsosList",
  props: {
    text: String,
    icon: String
  }
};
</script>
