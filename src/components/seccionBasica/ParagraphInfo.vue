<template>
  <p style="font-size:25px">
    {{ info }}
  </p>
</template>

<script>
export default {
  name: "ParagraphInfo",
  props: {
    info: String
  }
};
</script>
