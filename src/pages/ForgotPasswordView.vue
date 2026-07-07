<script setup>
import { reactive } from 'vue'
import AuthCard from '@/components/auth/AuthCard.vue'

const form = reactive({ email: 'organizer@ticketinfra.africa' })

function submit() {
  window.alert(`Password reset link sent to ${form.email}`)
}
</script>

<template>
  <AuthCard>
    <div class="mb-8">
      <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[#f05537]">Reset access</p>
      <h2 class="mt-2 text-3xl font-semibold tracking-tight text-slate-950">Forgot your password?</h2>
      <p class="mt-2 text-sm text-slate-500">We will email a secure reset link so you can get back into your workspace.</p>
    </div>

    <form class="space-y-4" @submit.prevent="submit">
      <label class="block">
        <span class="mb-2 block text-sm font-medium text-slate-700">Email</span>
        <input v-model="form.email" type="email" class="w-full rounded-2xl border border-black/10 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#f05537] focus:bg-white" placeholder="you@company.com" />
      </label>

      <button class="w-full rounded-2xl bg-[#f05537] px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#f05537]/25 transition hover:translate-y-[-1px]" type="submit">
        Send reset link
      </button>
    </form>

    <div class="mt-6 text-sm text-slate-600">
      Remembered it?
      <RouterLink to="/login" class="font-medium text-[#f05537]">Back to sign in</RouterLink>
    </div>
  </AuthCard>
</template>