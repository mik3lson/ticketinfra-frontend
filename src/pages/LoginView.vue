<script setup>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AuthCard from '@/components/auth/AuthCard.vue'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()
const form = reactive({ email: '', password: '' })

async function submit() {
  const success = await authStore.login(form)
  if (success) {
    router.push(route.query.redirect || '/dashboard')
  }
}
</script>

<template>
  <AuthCard>
    <div class="mb-8">
      <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[#f05537]">Welcome back</p>
      <h2 class="mt-2 text-3xl font-semibold tracking-tight text-slate-950">Sign in to ticketInfra</h2>
      <p class="mt-2 text-sm text-slate-500">Manage events, checkout flows, and payments from one clean workspace.</p>
    </div>

    <div v-if="authStore.error" class="mb-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
      {{ authStore.error }}
    </div>

    <form class="space-y-4" @submit.prevent="submit">
      <label class="block">
        <span class="mb-2 block text-sm font-medium text-slate-700">Email</span>
        <input v-model="form.email" type="email" required autocomplete="email" class="w-full rounded-2xl border border-black/10 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#f05537] focus:bg-white" placeholder="you@company.com" />
      </label>

      <label class="block">
        <span class="mb-2 block text-sm font-medium text-slate-700">Password</span>
        <input v-model="form.password" type="password" required autocomplete="current-password" class="w-full rounded-2xl border border-black/10 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#f05537] focus:bg-white" placeholder="••••••••" />
      </label>

      <button
        class="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#f05537] px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#f05537]/25 transition hover:translate-y-[-1px] disabled:cursor-not-allowed disabled:opacity-60"
        type="submit"
        :disabled="authStore.loading"
      >
        <span v-if="authStore.loading" class="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
        {{ authStore.loading ? 'Signing in…' : 'Sign in' }}
      </button>
    </form>

    <div class="mt-6 flex items-center justify-between text-sm">
      <RouterLink to="/forgot-password" class="font-medium text-slate-600 hover:text-[#f05537]">Forgot password?</RouterLink>
      <RouterLink to="/register" class="font-medium text-[#f05537]">Create account</RouterLink>
    </div>
  </AuthCard>
</template>