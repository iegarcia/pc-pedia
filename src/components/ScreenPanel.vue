<template>
  <div>
    <div class="text-h4 q-mb-md">{{ title }}</div>
    <p>
      {{ text }}
      <!-- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium
      cumque magnam odio iure quidem, quod illum numquam possimus obcaecati
      commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero. -->
    </p>
    <p>
      {{ text }}
      <!-- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium
      cumque magnam odio iure quidem, quod illum numquam possimus obcaecati
      commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero. -->
    </p>
  </div>
</template>

<script>
export default {
  name: "ScreenPanel",
  props: {
    panel: String,
    title: String,
    text: String,
  },
};
</script>
