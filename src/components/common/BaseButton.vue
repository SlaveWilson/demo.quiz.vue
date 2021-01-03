<template lang="pug">
button(:class="{selected: isSelected}")
  slot
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    isSelected: Boolean,
  },
});
</script>

<style lang="scss" scoped>
button {
  border-radius: 23px;
  overflow: hidden;
  background-color: white;
  height: 3.5em;
  width: 3.5em;
  box-shadow: 0 4px 21px 0 color(shadow-card);
  cursor: pointer;
}

button:focus {
  outline: 0;
}

.selected {
  box-shadow: 0 0 0pt 2pt color(focus);
}
</style>
