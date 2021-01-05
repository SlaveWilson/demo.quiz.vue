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
    description: "當你發覺後面的車輛意欲超越(扒頭)時，你應該......",
    answers: [{
      content: "加速不讓對方超越",
      isCorrect: false
    }, {
      content: "立即靠左停車",
      isCorrect: false
    }, {
      content: "駛入讓車處或繼續向前慢駛",
      isCorrect: true
    }]
  },
  {
    id: 3,
    description: "當在晚間行車時，受迎面車輛的高燈影響時，你應該......",
    answers: [{
      content: "響號通知迎面車輛之駕駛者",
      isCorrect: false
    }, {
      content: "亮著高燈向前直駛",
      isCorrect: false
    }, {
      content: "不要凝視，將車輛靠左邊慢駛或如有必要隨時準備停車",
      isCorrect: true
    }]
  },
  {
    id: 4,
    description: "作為駕駛人士，駛達斑馬線前應留什麼",
    answers: [{
      content: "必要時，可停車在斑馬線上",
      isCorrect: false
    }, {
      content: "可以示意行人橫過馬路",
      isCorrect: false
    }, {
      content: "留意是否在等候橫過馬路的行人",
      isCorrect: true
    }]
  },
  {
    id: 5,
    description: "在濕滑的路上駕駛必須增加......",
    answers: [{
      content: "跟車距離",
      isCorrect: true
    }, {
      content: "輪胎氣壓",
      isCorrect: false
    }, {
      content: "汽油用量",
      isCorrect: false
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