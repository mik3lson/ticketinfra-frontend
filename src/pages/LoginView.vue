<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import AuthCard from '@/components/auth/AuthCard.vue'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()
const form = reactive({ email: 'organizer@ticketinfra.africa', password: 'password123' })

function submit() {
  authStore.login({ name: 'Amina Yusuf', email: form.email })
  router.push('/dashboard')
}
</script>

<template>
  <AuthCard>
    <div class="mb-8">
      <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[#f05537]">Welcome back</p>
      <h2 class="mt-2 text-3xl font-semibold tracking-tight text-slate-950">Sign in to ticketInfra</h2>
      <p class="mt-2 text-sm text-slate-500">Manage events, checkout flows, and payments from one clean workspace.</p>
    </div>

    <form class="space-y-4" @submit.prevent="submit">
      <label class="block">
        <span class="mb-2 block text-sm font-medium text-slate-700">Email</span>
        <input v-model="form.email" type="email" class="w-full rounded-2xl border border-black/10 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#f05537] focus:bg-white" placeholder="you@company.com" />
      </label>

      <label class="block">
        <span class="mb-2 block text-sm font-medium text-slate-700">Password</span>
        <input v-model="form.password" type="password" class="w-full rounded-2xl border border-black/10 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#f05537] focus:bg-white" placeholder="••••••••" />
      </label>

      <button class="w-full rounded-2xl bg-[#f05537] px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#f05537]/25 transition hover:translate-y-[-1px]" type="submit">
        Sign in
      </button>
    </form>

    <div class="mt-6 flex items-center justify-between text-sm">
      <RouterLink to="/forgot-password" class="font-medium text-slate-600 hover:text-[#f05537]">Forgot password?</RouterLink>
      <RouterLink to="/register" class="font-medium text-[#f05537]">Create account</RouterLink>
    </div>
  </AuthCard>
</template>