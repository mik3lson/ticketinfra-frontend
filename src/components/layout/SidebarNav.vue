<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { sidebarLinks } from '@/data/mock'

defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['close'])
</script>

<template>
  <aside
    class="fixed inset-y-0 left-0 z-40 w-[290px] border-r border-black/5 bg-white/95 px-5 py-6 shadow-[0_24px_80px_rgba(15,17,21,0.1)] backdrop-blur-2xl transition-transform duration-300 lg:static lg:translate-x-0 lg:rounded-[32px] lg:border lg:shadow-none"
    :class="open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'"
  >
    <div class="mb-8 flex items-center justify-between lg:justify-start">
      <div class="flex items-center gap-3">
        <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f05537] text-sm font-semibold text-white shadow-lg shadow-[#f05537]/30">
          GP
        </div>
        <div>
          <div class="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">GatePass</div>
          <div class="text-xs text-slate-400">Dashboard</div>
        </div>
      </div>

      <button class="rounded-2xl border border-black/10 p-2 text-slate-500 lg:hidden" @click="$emit('close')">
        <XMarkIcon class="h-5 w-5" />
      </button>
    </div>

    <nav class="space-y-2">
      <RouterLink
        v-for="item in sidebarLinks"
        :key="item.to"
        :to="item.to"
        class="flex items-center rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-[#f05537]/8 hover:text-slate-900"
        active-class="bg-[#f05537] text-white shadow-lg shadow-[#f05537]/20 hover:bg-[#f05537] hover:text-white"
      >
        {{ item.label }}
      </RouterLink>
    </nav>

    <div class="mt-8 rounded-[28px] bg-gradient-to-br from-[#111111] via-[#17191f] to-[#f05537] p-5 text-white shadow-[0_24px_60px_rgba(15,17,21,0.24)]">
      <div class="text-xs uppercase tracking-[0.25em] text-white/60">Live status</div>
      <div class="mt-2 text-lg font-semibold">99.98% uptime</div>
      <p class="mt-2 text-sm text-white/70">Checkout infrastructure is healthy and syncing in real time.</p>
    </div>
  </aside>
</template>