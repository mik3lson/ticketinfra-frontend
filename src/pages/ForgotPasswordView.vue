<script setup>
import { reactive, ref } from 'vue'
import AuthCard from '@/components/auth/AuthCard.vue'
import { requestPasswordReset } from '@/services/auth.service'

const form = reactive({ email: '' })
const status = ref('idle') // idle | loading | sent | error
const errorMessage = ref('')

async function submit() {
  status.value = 'loading'
  errorMessage.value = ''
  try {
    await requestPasswordReset(form.email)
    status.value = 'sent'
  } catch (err) {
    errorMessage.value = err.data?.detail || 'Something went wrong. Please try again.'
    status.value = 'error'
  }
}
</script>

<template>
  <AuthCard>
    <div class="mb-8">
      <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[#f05537]">Reset access</p>
      <h2 class="mt-2 text-3xl font-semibold tracking-tight text-slate-950">Forgot your password?</h2>
      <p class="mt-2 text-sm text-slate-500">We will email a secure reset link so you can get back into your workspace.</p>
    </div>

    <div v-if="status === 'sent'" class="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
      If an account exists for {{ form.email }}, a reset link is on its way.
    </div>

    <template v-else>
      <div v-if="status === 'error'" class="mb-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
        {{ errorMessage }}
      </div>

      <form class="space-y-4" @submit.prevent="submit">
        <label class="block">
          <span class="mb-2 block text-sm font-medium text-slate-700">Email</span>
          <input v-model="form.email" type="email" required autocomplete="email" class="w-full rounded-2xl border border-black/10 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#f05537] focus:bg-white" placeholder="you@company.com" />
        </label>

        <button
          class="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#f05537] px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#f05537]/25 transition hover:translate-y-[-1px] disabled:cursor-not-allowed disabled:opacity-60"
          type="submit"
          :disabled="status === 'loading'"
        >
          <span v-if="status === 'loading'" class="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
          {{ status === 'loading' ? 'Sending…' : 'Send reset link' }}
        </button>
      </form>
    </template>

    <div class="mt-6 text-sm text-slate-600">
      Remembered it?
      <RouterLink to="/login" class="font-medium text-[#f05537]">Back to sign in</RouterLink>
    </div>
  </AuthCard>
</template>