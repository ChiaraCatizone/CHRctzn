import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    // Le altre pagine si caricano solo quando servono (lazy loading)
    { path: '/about', name: 'about', component: () => import('@/views/AboutView.vue') },
  ],
})

export default router
