import { createWebHistory, createRouter } from "vue-router";
import Index from "@/pages/index.vue"

const Quiz = () => import('@/pages/quiz.vue')

const history = createWebHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      name: "Index",
      component: Index
    },
    {
      path: '/quiz',
      name: "Quiz",
      component: Quiz
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/",
    }
  ]
})

export default router