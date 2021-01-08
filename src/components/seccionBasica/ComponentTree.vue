<template>
  <q-tree
    :nodes="data"
    node-key="label"
    selected-color="primary"
    :selected.sync="selected"
    default-expand-all
  />
</template>

<script>
export default {
  name: "ComponentTree",
  props: {
    data: Array,
    selected: String
  }
};
</script>
