import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '../views/TodoList.vue'

const routes = [
  {
    path: '/todolist',
    name: '/todolist',
    component: TodoList
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
