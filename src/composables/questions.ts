import { ref } from 'vue';

const _question = {
  content: "每100毫升尿液內含酒精量不可超過......",
  options: [
    "22 毫克",
    "107 毫克",
    "67 毫克"
  ]
}

export default function useQuestions() {
  const question = ref()

  question.value = _question

  return { question }
}