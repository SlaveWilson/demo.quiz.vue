<template lang="pug">
.background.rounded
  .progress-bar.rounded(:style="{width: percentage + '%'}")
</template>

<script lang="ts">
import { defineComponent, watchEffect, ref } from "vue";
export default defineComponent({
  name: "ProgressBar",
  props: {
    val: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const percentage = ref(0);
    watchEffect(() => {
      percentage.value = Math.max(Math.min(props.val, 1), 0) * 100;
    });
    return { percentage };
  },
});
</script>

<style lang="scss" scoped>
.background {
  background-color: white;
  height: 12px;
  overflow: hidden;
}

.progress-bar {
  background-image: linear-gradient(to right, color(primary-light), color(primary));
  height: 12px;
}
</style>
