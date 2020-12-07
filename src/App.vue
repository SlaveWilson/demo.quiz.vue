<template lang="pug">
TheHeader
main
  router-view
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TheHeader from "./components/layouts/TheHeader.vue";

@Options({
  components: {
    TheHeader,
  },
})
export default class App extends Vue {}
</script>