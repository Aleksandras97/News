import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../views/Dashboard.vue'
import FeedView from '../views/FeedView.vue'
import DefaultLayout from '../components/DefaultLayout.vue'

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    component: DefaultLayout,
    children: [
      {path: '/dashboard', name: 'Dashboard', component: Dashboard },
      {path: '/feed/:id', name: 'FeedView', component: FeedView },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
