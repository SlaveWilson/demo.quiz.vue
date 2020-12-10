import { reactive, toRefs } from 'vue';
import useQuestions from './questions';

const state = reactive({
  total: 10,
  current: 1,
  score: 0
})

export default function useQuiz() {
  const { question } = useQuestions()

  return { ...toRefs(state), question }
}