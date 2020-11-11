<template>
  <q-route-tab :to="link" :label="label" />
</template>

<script>
export default {
  name: "Basics",
  props: {
    label: String,
    link: String
  }
};
</script>
