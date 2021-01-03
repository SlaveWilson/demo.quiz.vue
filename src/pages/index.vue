<template lang="pug">
.container
  h2 Index2
  form(name="contact", method="POST", data-netlify="true")
    input(type="hidden", name="form-name", value="Information" )
    p
      label Name: #[input(type="text", name="name")]
    p
      label Email: #[input(type="email", name="email")]
    p
      button Send
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "index",
});
</script>

<style lang="scss" scoped>
.container {
  margin-top: 1.3rem;
  margin-bottom: 3rem;
}
</style>
