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
  ProgressBar.progress(:val="(current-1)/total")
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
    template(v-for="(answer, index) in question.answers")
      BaseButton(:isSelected="selected === index", @click.default="selected = index")
        p.strong(style="font-size:1rem") {{String.fromCharCode(index + 65)}}
    BaseButton.btn-gradient(@click.default="onClickSubmit(selected)")
      img(src="@/assets/images/icons/submit.svg", width=25, height=25, style="padding-top: 3px")
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
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
    const { total, current, score, pool, getQuestionById, answerQuestion } = useQuiz();
    const selected = ref();
    const question = ref(getQuestionById(pool.value[current.value - 1]));

    const onClickSubmit = function (option: number | undefined) {
      if (option === undefined) return;
      answerQuestion(question.value!, option);
      selected.value = -1;
    };

    watchEffect(() => {
      question.value = getQuestionById(pool.value[current.value - 1]);
    });

    return {
      total,
      current,
      score,
      question,
      pool,
      selected,
      onClickSubmit,
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
