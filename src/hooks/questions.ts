import { Ref, ref } from 'vue';

export interface Answer {
  content: string,
  isCorrect: Boolean
}

export interface Question {
  id: number,
  description: string,
  answers: Answer[]
}

const _question: Question[] = [
  {
    id: 1,
    description: "每100毫升尿液內含酒精量不可超過......",
    answers: [{
      content: "22 毫克",
      isCorrect: false
    }, {
      content: "107 毫克",
      isCorrect: false
    }, {
      content: "67 毫克",
      isCorrect: true
    }]
  },
  {
    id: 2,
    description: "每100毫升尿液內含酒精量不可超過......",
    answers: [{
      content: "22 毫克",
      isCorrect: false
    }, {
      content: "107 毫克",
      isCorrect: false
    }, {
      content: "67 毫克",
      isCorrect: true
    }]
  },
  {
    id: 3,
    description: "每100毫升尿液內含酒精量不可超過......",
    answers: [{
      content: "22 毫克",
      isCorrect: false
    }, {
      content: "107 毫克",
      isCorrect: false
    }, {
      content: "67 毫克",
      isCorrect: true
    }]
  },
  {
    id: 4,
    description: "每100毫升尿液內含酒精量不可超過......",
    answers: [{
      content: "22 毫克",
      isCorrect: false
    }, {
      content: "107 毫克",
      isCorrect: false
    }, {
      content: "67 毫克",
      isCorrect: true
    }]
  },
  {
    id: 5,
    description: "每100毫升尿液內含酒精量不可超過......",
    answers: [{
      content: "22 毫克",
      isCorrect: false
    }, {
      content: "107 毫克",
      isCorrect: false
    }, {
      content: "67 毫克",
      isCorrect: true
    }]
  },
]

export default function useQuestions() {
  const questions: Ref<Question[] | undefined> = ref()

  questions.value = _question

  const getQuestionById = function (id: number) {
    return questions.value?.find(question => question.id === id)
  }

  return { questions, getQuestionById }
}