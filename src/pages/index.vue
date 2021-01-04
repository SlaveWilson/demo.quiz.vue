<template lang="pug">
.container.flex
  .panel 
    .content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis non nunc quis laoreet. Fusce eu risus nec tellus sagittis ultricies. Praesent velit neque, gravida quis justo et, ornare facilisis felis. Donec sed libero a metus dictum varius. Donec nulla sem, rhoncus vel ligula vel, accumsan pulvinar tortor. Fusce viverra felis laoreet neque posuere sagittis. Vivamus sed varius ipsum. Proin pellentesque eros et ante laoreet egestas. Maecenas in tellus mi. Etiam mattis convallis odio, eu varius ipsum. Morbi porta elementum nisl eu congue. Aliquam porttitor non odio eu aliquet. Sed sed enim vitae libero consequat accumsan. Vestibulum eu orci leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam imperdiet scelerisque nisi, non viverra neque venenatis sit amet.
  router-link(to="/quiz")
    BaseButton.button.btn-gradient Let's Start
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/components/common/BaseButton.vue";

export default defineComponent({
  name: "index",
  components: {
    BaseButton,
  },
});
</script>

<style lang="scss" scoped>
.container {
  margin-top: 2rem;
  flex-direction: column;
  height: calc(100vh - 9em);

  > * + * {
    margin-top: 1em;
  }
}

.panel {
  flex: 1;
  background-color: white;
  border-radius: 23px;
  position: relative;
}

.content {
  position: absolute;
  top: 23px;
  left: 23px;
  right: 23px;
  bottom: 23px;
  overflow-x: auto;
  word-wrap: normal;
}

.button {
  flex: 0;
  flex-basis: 3em;
  width: 100%;
  color: white;
}

.btn-gradient {
  background-image: linear-gradient(to right, color(primary-light), color(primary));
}
</style>
