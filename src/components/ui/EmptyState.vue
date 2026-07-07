<template>
  <div class="gatepass-card rounded-[28px] p-10 text-center">
    <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-[#fff1ed] text-2xl">{{ icon }}</div>
    <h3 class="mt-5 text-xl font-semibold text-slate-950">{{ title }}</h3>
    <p class="mt-2 text-sm text-slate-500">{{ description }}</p>
    <div class="mt-6 flex items-center justify-center gap-3">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, default: 'GP' },
  title: { type: String, required: true },
  description: { type: String, required: true },
})
</script>