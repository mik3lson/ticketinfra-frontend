<script setup>
import { apiKeys } from '@/data/mock'
import PageHeader from '@/components/ui/PageHeader.vue'
</script>

<template>
  <div class="space-y-6 py-6">
    <PageHeader eyebrow="Access" title="API Keys" subtitle="Manage test and live keys for your GatePass integrations." />

    <div class="grid gap-4 xl:grid-cols-2">
      <article v-for="key in apiKeys" :key="key.label" class="gatepass-card rounded-[32px] p-6">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-sm font-semibold text-slate-950">{{ key.label }}</div>
            <div class="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{{ key.status }}</div>
          </div>
          <span class="rounded-full bg-[#fff1ed] px-3 py-1 text-xs font-semibold text-[#b6321f]">Active</span>
        </div>

        <div class="mt-5 rounded-3xl bg-slate-50 p-4 font-mono text-sm text-slate-700 break-all">{{ key.value }}</div>

        <div class="mt-5 flex flex-wrap gap-3">
          <button class="rounded-2xl bg-[#f05537] px-4 py-2.5 text-sm font-semibold text-white">Copy</button>
          <button class="rounded-2xl border border-black/10 px-4 py-2.5 text-sm font-medium text-slate-700">Regenerate</button>
          <button class="rounded-2xl border border-black/10 px-4 py-2.5 text-sm font-medium text-slate-700">Deactivate</button>
        </div>
      </article>
    </div>
  </div>
</template>