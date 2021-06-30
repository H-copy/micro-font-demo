import {
  createRouter,
  createWebHashHistory,

  RouteRecordRaw
} from 'vue-router'


const routes: RouteRecordRaw[] = [
  { path: '/', component: () => import('../layouts/BasicLayout.vue') },
  { path: '/sub', component: () => import('../views/sub.vue') }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

