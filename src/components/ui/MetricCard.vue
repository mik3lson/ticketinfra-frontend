<script setup>
defineProps({
  label: { type: String, required: true },
  value: { type: String, required: true },
  change: { type: String, default: '' },
})
</script>

<template>
  <div class="gatepass-card rounded-[28px] p-5 shadow-[0_18px_45px_rgba(15,17,21,0.06)]">
    <div class="text-sm font-medium text-slate-500">{{ label }}</div>
    <div class="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{{ value }}</div>
    <div v-if="change" class="mt-3 inline-flex rounded-full bg-[#fff1ed] px-3 py-1 text-xs font-semibold text-[#b6321f]">{{ change }}</div>
  </div>
</template>