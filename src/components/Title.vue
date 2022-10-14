<template>
  <h3 class="text-center">{{ text }}</h3>
</template>

<script>
export default {
  name: "Title",
  props: {
    text: String,
  },
};
</script>
