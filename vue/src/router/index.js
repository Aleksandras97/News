import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../views/Dashboard.vue'
import DefaultLayout from '../components/DefaultLayout.vue'

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    component: DefaultLayout,
    children: [
      {path: '/dashboard', name: 'Dashboard', component: Dashboard },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
