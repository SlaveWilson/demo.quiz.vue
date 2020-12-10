<template lang="pug">
.container
  BaseCard
    h2 {{question.content}}
    ul
      li(v-for="option in question.options") {{option}}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseCard from "@/components/common/BaseCard.vue"
import useQuestions from "@/composables/questions"

export default defineComponent({
  name: "quiz",
  components: {
    BaseCard
  },
  setup() {
    const { question } = useQuestions()

    return { question }
  }
})
</script>