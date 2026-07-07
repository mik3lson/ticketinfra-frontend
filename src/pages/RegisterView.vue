<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import AuthCard from '@/components/auth/AuthCard.vue'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()
const form = reactive({ name: 'Amina Yusuf', email: 'organizer@gatepass.africa', password: 'password123' })

function submit() {
  authStore.register(form)
  router.push('/dashboard')
}
</script>

<template>
  <AuthCard>
    <div class="mb-8">
      <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[#f05537]">Get started</p>
      <h2 class="mt-2 text-3xl font-semibold tracking-tight text-slate-950">Create your organizer account</h2>
      <p class="mt-2 text-sm text-slate-500">Set up GatePass and start publishing event checkouts in minutes.</p>
    </div>

    <form class="space-y-4" @submit.prevent="submit">
      <label class="block">
        <span class="mb-2 block text-sm font-medium text-slate-700">Full name</span>
        <input v-model="form.name" type="text" class="w-full rounded-2xl border border-black/10 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#f05537] focus:bg-white" placeholder="Amina Yusuf" />
      </label>

      <label class="block">
        <span class="mb-2 block text-sm font-medium text-slate-700">Email</span>
        <input v-model="form.email" type="email" class="w-full rounded-2xl border border-black/10 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#f05537] focus:bg-white" placeholder="you@company.com" />
      </label>

      <label class="block">
        <span class="mb-2 block text-sm font-medium text-slate-700">Password</span>
        <input v-model="form.password" type="password" class="w-full rounded-2xl border border-black/10 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#f05537] focus:bg-white" placeholder="••••••••" />
      </label>

      <button class="w-full rounded-2xl bg-[#f05537] px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#f05537]/25 transition hover:translate-y-[-1px]" type="submit">
        Create account
      </button>
    </form>

    <div class="mt-6 text-sm text-slate-600">
      Already have an account?
      <RouterLink to="/login" class="font-medium text-[#f05537]">Sign in</RouterLink>
    </div>
  </AuthCard>
</template>