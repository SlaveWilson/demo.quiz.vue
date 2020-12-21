<template lang="pug">
.container.flex
  .total.flex.justify-between.items-end
    p #[span.current.strong(style="font-size: 1.5rem") {{`#${current}`}}] {{`of ${total}`}}
    .flex.items-center
      .flex.items-center
        img(src="@/assets/images/icons/wrong.svg", height="15", width="15")
        p(style="line-height: 15px;margin-left: 6px") {{`${current - 1 - score}`}} 
      .flex.items-center(style="margin-left: 23px")
        img(src="@/assets/images/icons/correct.svg", height="15", width="15")
        p(style="line-height: 15px;margin-left: 6px") {{score}}
  ProgressBar.progress(:val="current/total")
  BaseCard.question
    template(v-slot:top)
      h2.text-center {{question.description}}
    template(v-slot:bottom)
      ul
        li(v-for="(answer, index) in question.answers")
          .flex
            p.strong(style="font-size: 1rem; padding-right: 0.5em") {{String.fromCharCode(index + 65)}} 
            p(style="font-size: 0.8rem; line-height:1.2") {{answer.content}}
  .choices.flex.justify-between
    BaseButton(:isSelected="selected === 'A'", @click.default="selected = 'A'")
      p.strong(style="font-size:1rem") A
    BaseButton(:isSelected="selected === 'B'", @click.default="selected = 'B'")
      p.strong(style="font-size:1rem") B
    BaseButton(:isSelected="selected === 'C'", @click.default="selected = 'C'")
      p.strong(style="font-size:1rem") C
    BaseButton.btn-gradient
      img(src="@/assets/images/icons/submit.svg", width=25, height=25, style="padding-top: 3px")
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseCard from "@/components/common/BaseCard.vue";
import BaseButton from "@/components/common/BaseButton.vue";
import ProgressBar from "@/components/common/ProgressBar.vue";
import useQuiz from "@/hooks/quiz";

export default defineComponent({
  name: "quiz",
  components: {
    BaseCard,
    BaseButton,
    ProgressBar,
  },
  setup() {
    const { total, current, score, question } = useQuiz();
    const selected = ref();
    return {
      total,
      current,
      score,
      question,
      selected,
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

.total {
  .current {
    color: color(secondary);
  }

  p {
    color: color(tertiary);
  }
}

.progress {
  margin-top: 0.75rem;
}

.question {
  margin-top: 1rem;
  flex: 1;
}
ul {
  > * + * {
    padding-top: 2em;
  }
}

.choices {
  margin-top: 1.4rem;
}

.btn-gradient {
  background-image: linear-gradient(to right, color(primary-light), color(primary));
}
</style>
