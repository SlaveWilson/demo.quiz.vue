import { reactive, toRefs } from 'vue';
import useQuestions, { Question } from './questions';
import router from "@/router/router"

const state = reactive({
  total: 10,
  current: 1,
  score: 0,
  pool: [0]
})

const suffleArray = function (arr: Array<any>) {
  return arr.sort(function (a, b) { return Math.random() - 0.5 })
}

export default function useQuiz() {
  const { questions, getQuestionById } = useQuestions()

  const generatePool = function () {
    state.pool = Array.apply(0, new Array(questions.value!.length)).map(function (_, i) { return i + 1 })
  }

  const resetQuiz = function () {
    state.total = questions.value!.length
    state.current = 1
    state.score = 0
    generatePool()
    state.pool = suffleArray(state.pool)
  }

  resetQuiz()

  const answerQuestion = function (question: Question, option: number) {
    if (question.answers[option!].isCorrect) {
      state.score++
    }

    state.current++
    if (state.current > state.total) {
      router.push('/')
    }
  }

  return { ...toRefs(state), resetQuiz, getQuestionById, answerQuestion }
}