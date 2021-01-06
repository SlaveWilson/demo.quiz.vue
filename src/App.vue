<template lang="pug">
TheHeader.header
main
  router-view
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "./components/layouts/TheHeader.vue";

export default defineComponent({
  name: "App",
  components: {
    TheHeader,
  },
});
</script>
