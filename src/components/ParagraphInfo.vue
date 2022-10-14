<template>
  <p class="paragraphs">
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
