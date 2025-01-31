import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from "@/views/DashboardView.vue"
import BattleView from "@/views/BattleView.vue"
import RulesView from "@/views/RulesView.vue"
import ConstructionView from "@/views/ConstructionView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      // needs id path later
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/battle',
      name: 'battle',
      component: BattleView
    },
    {
      path: '/rules',
      name: 'rules',
      component: RulesView
    },
    {
      path: '/construction',
      name: 'construction',
      component: ConstructionView
    }
  ],
})

export default router

