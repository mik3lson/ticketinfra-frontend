<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  text: { type: String, required: true },
  label: { type: String, default: 'Copy' },
})

const copied = ref(false)

const buttonLabel = computed(() => (copied.value ? 'Copied' : props.label))

async function copyText() {
  await navigator.clipboard.writeText(props.text)
  copied.value = true

  window.setTimeout(() => {
    copied.value = false
  }, 1500)
}
</script>

<template>
  <button class="inline-flex items-center rounded-2xl border border-black/10 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#f05537]/30 hover:bg-[#fff1ed] hover:text-[#b6321f]" @click="copyText">
    {{ buttonLabel }}
  </button>
</template>