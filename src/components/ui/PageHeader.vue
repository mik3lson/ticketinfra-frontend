<template>
  <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <p v-if="eyebrow" class="text-xs font-semibold uppercase tracking-[0.24em] text-[#f05537]">{{ eyebrow }}</p>
      <h1 class="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{{ title }}</h1>
      <p v-if="subtitle" class="mt-2 max-w-3xl text-sm text-slate-500 sm:text-base">{{ subtitle }}</p>
    </div>

    <div class="flex items-center gap-3">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
})
</script>