import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

import AuthLayout from '@/components/layout/AuthLayout.vue'
import AppShell from '@/components/layout/AppShell.vue'
import LoginView from '@/pages/LoginView.vue'
import RegisterView from '@/pages/RegisterView.vue'
import ForgotPasswordView from '@/pages/ForgotPasswordView.vue'
import DashboardHomeView from '@/pages/DashboardHomeView.vue'
import EventsView from '@/pages/EventsView.vue'
import EventWizardView from '@/pages/EventWizardView.vue'
import CheckoutBuilderView from '@/pages/CheckoutBuilderView.vue'
import OrdersView from '@/pages/OrdersView.vue'
import CustomersView from '@/pages/CustomersView.vue'
import ApiKeysView from '@/pages/ApiKeysView.vue'
import SettingsView from '@/pages/SettingsView.vue'
import PublishSuccessView from '@/pages/PublishSuccessView.vue'


const routes = [
  {
    path: '/',
    component: AppShell,
    children: [
      { path: '', redirect: '/dashboard' },
      { path: 'dashboard', name: 'dashboard', component: DashboardHomeView },
      { path: 'events', name: 'events', component: EventsView },
      { path: 'events/new', name: 'event-wizard', component: EventWizardView },
      { path: 'checkout-builder', name: 'checkout-builder', component: CheckoutBuilderView },
      { path: 'orders', name: 'orders', component: OrdersView },
      { path: 'customers', name: 'customers', component: CustomersView },
      { path: 'api-keys', name: 'api-keys', component: ApiKeysView },
      { path: 'settings', name: 'settings', component: SettingsView },
      { path: 'publish/:code', name: 'publish', component: PublishSuccessView, props: true },
    ],
  },
  {
    path: '/',
    component: AuthLayout,
    children: [
      { path: 'login', name: 'login', component: LoginView, meta: { public: true } },
      { path: 'register', name: 'register', component: RegisterView, meta: { public: true } },
      { path: 'forgot-password', name: 'forgot-password', component: ForgotPasswordView, meta: { public: true } },
    ],
  },
  { path: '/:pathMatch(.*)*', redirect: '/dashboard' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.beforeEach(async (to) => {
  const authStore = useAuthStore()

  
  if (!authStore.initialized) {
    await authStore.init()
  }

  if (authStore.isAuthenticated && to.meta.public) {
    return { name: 'dashboard' }
  }

  if (to.meta.public) {
    return true
  }

  if (!authStore.isAuthenticated) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }

  return true
})

export default router