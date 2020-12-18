import { createWebHistory, createRouter } from "vue-router";
import Index from "@/pages/index.vue"

const Quiz = () => import('@/pages/quiz.vue')

const history = createWebHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/quiz',
      component: Quiz
    }
  ]
})

export default router