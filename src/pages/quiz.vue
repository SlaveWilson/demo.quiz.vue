<template lang="pug">
.container.flex
  .flex.justify-between
    p {{`#${current}`}} {{`of ${total}`}}
    p {{`${current - 1 - score}`}} {{score}}
  .progress
    p Progress Bara
  BaseCard.question
    h2.text-center {{question.description}}
    ul
      li(v-for="(answer, index) in question.answers") {{String.fromCharCode(index + 65)}} {{answer.content}}
  .choices.flex.justify-between
    BaseButton A
    BaseButton B
    BaseButton C
    BaseButton IMG
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseCard from "@/components/common/BaseCard.vue";
import useQuiz from "@/hooks/quiz";

export default defineComponent({
  name: "quiz",
  components: {
    BaseCard,
  },
  setup() {
    const { total, current, score, question } = useQuiz();
    return {
      total,
      current,
      score,
      question,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  flex-direction: column;
  margin-top: 1.3rem;
  margin-bottom: 3rem;
  height: calc(100vh - 9.3rem); // Header: 5rem + margin-top: 1.3rem + margin-bottom: 3rem
}

.progress {
  margin-top: 0.75rem;
}

.question {
  margin-top: 1rem;
  flex: 1;
}

.choices {
  margin-top: 1.4rem;
  * {
    flex-basis: 25%;
  }
}
</style>
