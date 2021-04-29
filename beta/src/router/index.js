import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect:'index'
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/Index')
  },
  {
    path: '/a',
    name: 'a',
    component: () => import('../views/a')
  },
]

const router = new VueRouter({
  routes
})

export default router
