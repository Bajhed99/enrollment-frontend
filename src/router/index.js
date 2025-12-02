import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'
import Login from '../pages/Login.vue'
import Students from '../pages/Students.vue'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/login', component: Login },
  { path: '/students', component: Students },
  // other routes...
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
