<template lang="pug">
header
  .container.flex.justify-between.items-center
    h1 Drivers License Tests
    button(@click="isModalOpen = true", v-show="$route.name !== 'Index'")
      img(src="@/assets/images/icons/cross.svg", width="20", height="20")
    teleport(to="body")
      .backdrop.flex(v-if="isModalOpen", @click.self="isModalOpen = false")
        .container.full
          .modal.text-center.flex
            .content.flex.justify-center
              p Are you sure you want to leave?
              p (Progress will not be saved)
            .flex.justify-center.buttons
              BaseButton.button(@click="isModalOpen = false")
                p Cancel
              router-link(to="/")
                BaseButton.button.btn-gradient(@click="isModalOpen = false")
                  p Confirm
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseButton from "@/components/common/BaseButton.vue";

export default defineComponent({
  name: "header",
  components: {
    BaseButton,
  },
  setup() {
    const isModalOpen = ref(false);
    return { isModalOpen };
  },
});
</script>

<style lang="scss" scoped>
header {
  background-image: linear-gradient(to right, color(primary-light), color(primary));
  box-shadow: 0 4px 21px 0 color(shadow-header);
}

.container {
  height: 5rem;
}

button {
  background-color: unset;
  cursor: pointer;
  &:focus {
    outline: none;
  }
}

.button {
  height: 2.5em;
  width: 6em;
}

.btn-gradient {
  background-image: linear-gradient(to right, color(primary-light), color(primary));
  p {
    color: white;
  }
}

.backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: color(shadow);
}

.full {
  width: 100%;
  height: 200px;
}

.modal {
  margin: auto;
  background-color: white;
  border-radius: 23px;
  max-width: 70vw;
  height: 100%;
  padding: 23px;

  flex-direction: column;
}

.content {
  flex: 1;
  flex-direction: column;
  > * + * {
    margin-top: 1em;
  }
}

p {
  font-size: 1.2rem;
  font-weight: bold;
}

.buttons {
  > * + * {
    margin-left: 0.8em;
  }
  p {
    font-size: 1rem;
  }
}
</style>
