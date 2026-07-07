<script setup>
import PageHeader from '@/components/ui/PageHeader.vue'
import { useBuilderStore } from '@/stores/builder'

const builderStore = useBuilderStore()
</script>

<template>
  <div class="space-y-6 py-6">
    <PageHeader eyebrow="Workspace" title="Settings" subtitle="Customize the GatePass brand and checkout defaults." />

    <div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <section class="gatepass-card rounded-[32px] p-6">
        <h2 class="text-lg font-semibold text-slate-950">Branding</h2>
        <div class="mt-5 grid gap-4">
          <label class="block"><span class="mb-2 block text-sm font-medium text-slate-700">Company Logo</span><input class="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm" type="text" :value="builderStore.branding.logo" @input="builderStore.updateBranding('logo', $event.target.value)" /></label>
          <label class="block"><span class="mb-2 block text-sm font-medium text-slate-700">Cover Image</span><input class="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm" type="text" :value="builderStore.branding.coverImage" @input="builderStore.updateBranding('coverImage', $event.target.value)" /></label>
          <label class="block"><span class="mb-2 block text-sm font-medium text-slate-700">Brand Color</span><input class="h-12 w-full rounded-2xl border border-black/10 px-3" type="color" :value="builderStore.branding.brandColor" @input="builderStore.updateBranding('brandColor', $event.target.value)" /></label>
          <label class="block"><span class="mb-2 block text-sm font-medium text-slate-700">Background Color</span><input class="h-12 w-full rounded-2xl border border-black/10 px-3" type="color" :value="builderStore.branding.backgroundColor" @input="builderStore.updateBranding('backgroundColor', $event.target.value)" /></label>
          <label class="block"><span class="mb-2 block text-sm font-medium text-slate-700">Button Color</span><input class="h-12 w-full rounded-2xl border border-black/10 px-3" type="color" :value="builderStore.branding.buttonColor" @input="builderStore.updateBranding('buttonColor', $event.target.value)" /></label>
          <label class="block"><span class="mb-2 block text-sm font-medium text-slate-700">Border Radius</span><input class="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm" type="number" :value="builderStore.branding.borderRadius" @input="builderStore.updateBranding('borderRadius', $event.target.value)" /></label>
          <label class="block"><span class="mb-2 block text-sm font-medium text-slate-700">Font</span><input class="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm" type="text" :value="builderStore.branding.font" @input="builderStore.updateBranding('font', $event.target.value)" /></label>
        </div>
      </section>

      <section class="gatepass-card rounded-[32px] p-6">
        <h2 class="text-lg font-semibold text-slate-950">Preview</h2>
        <div class="mt-5 rounded-[28px] border border-black/5 p-4" :style="{ backgroundColor: builderStore.branding.backgroundColor, fontFamily: builderStore.branding.font }">
          <div class="rounded-[24px] bg-[#0f1115] p-4 text-white">
            <div class="text-xs uppercase tracking-[0.24em] text-white/60">GatePass Checkout</div>
            <div class="mt-2 text-2xl font-semibold">Premium branding controls</div>
            <p class="mt-2 text-sm text-white/70">Changes apply instantly across the checkout builder and branded surfaces.</p>
            <button class="mt-4 rounded-2xl px-4 py-3 text-sm font-semibold text-white" :style="{ backgroundColor: builderStore.branding.buttonColor }">Save changes</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>