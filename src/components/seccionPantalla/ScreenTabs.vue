<template>
  <q-tab :name="name" :label="label" />
</template>

<script>
export default {
  name: "ScreenTabs",
  props: {
    name: String,
    label: String
  }
};
</script>
