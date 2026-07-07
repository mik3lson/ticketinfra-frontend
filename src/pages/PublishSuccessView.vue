<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PageHeader from '@/components/ui/PageHeader.vue'
import CopyButton from '@/components/ui/CopyButton.vue'
import { useBuilderStore } from '@/stores/builder'

const route = useRoute()
const builderStore = useBuilderStore()

const code = computed(() => route.params.code || builderStore.publishCode)
const checkoutUrl = computed(() => `https://checkout.gatepass.africa/c/${code.value}`)
const apiEndpoint = '/checkout-session'
const linkEmbed = `<a href="${checkoutUrl.value}">Buy Ticket</a>`
const iframeEmbed = `<iframe src="${checkoutUrl.value}" width="100%" height="800" style="border:0"></iframe>`
const sdkEmbed = `GatePass.openCheckout("${code.value}")`
</script>

<template>
  <div class="space-y-6 py-6">
    <PageHeader
      eyebrow="Publish complete"
      title="Checkout published successfully"
      subtitle="Share the live checkout URL, connect the API endpoint, or embed GatePass into any website."
    />

    <div class="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <section class="gatepass-card rounded-[32px] p-6">
        <div class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Checkout URL</div>
        <div class="mt-3 flex flex-wrap items-center gap-3 rounded-3xl bg-slate-50 p-4">
          <div class="break-all text-lg font-semibold text-slate-950">{{ checkoutUrl }}</div>
          <CopyButton :text="checkoutUrl" />
        </div>

        <div class="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">API Endpoint</div>
        <div class="mt-3 flex flex-wrap items-center gap-3 rounded-3xl bg-slate-50 p-4">
          <code class="break-all text-sm text-slate-900">POST {{ apiEndpoint }}</code>
          <CopyButton :text="`POST ${apiEndpoint}`" />
        </div>

        <div class="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Embed Options</div>
        <div class="mt-3 space-y-4">
          <div class="rounded-3xl bg-slate-50 p-4">
            <div class="flex items-center justify-between gap-3">
              <div>
                <div class="text-sm font-semibold text-slate-950">HTML Link</div>
                <div class="text-xs text-slate-500">For buttons, articles, and landing pages</div>
              </div>
              <CopyButton :text="linkEmbed" />
            </div>
            <pre class="mt-3 overflow-x-auto rounded-2xl bg-[#111111] p-4 text-sm text-white">{{ linkEmbed }}</pre>
          </div>

          <div class="rounded-3xl bg-slate-50 p-4">
            <div class="flex items-center justify-between gap-3">
              <div>
                <div class="text-sm font-semibold text-slate-950">Iframe</div>
                <div class="text-xs text-slate-500">Embed the checkout directly on your site</div>
              </div>
              <CopyButton :text="iframeEmbed" />
            </div>
            <pre class="mt-3 overflow-x-auto rounded-2xl bg-[#111111] p-4 text-sm text-white">{{ iframeEmbed }}</pre>
          </div>

          <div class="rounded-3xl bg-slate-50 p-4">
            <div class="flex items-center justify-between gap-3">
              <div>
                <div class="text-sm font-semibold text-slate-950">JavaScript SDK</div>
                <div class="text-xs text-slate-500">Programmatically launch the checkout</div>
              </div>
              <CopyButton :text="sdkEmbed" />
            </div>
            <pre class="mt-3 overflow-x-auto rounded-2xl bg-[#111111] p-4 text-sm text-white">{{ sdkEmbed }}</pre>
          </div>
        </div>
      </section>

      <aside class="gatepass-card rounded-[32px] p-6">
        <div class="rounded-[28px] bg-gradient-to-br from-[#111111] via-[#17191f] to-[#f05537] p-6 text-white">
          <div class="text-xs uppercase tracking-[0.25em] text-white/60">Live checkout</div>
          <div class="mt-3 text-3xl font-semibold tracking-tight">GatePass</div>
          <p class="mt-3 text-sm text-white/75">A premium checkout surface ready for events, funnels, and ticketing operations.</p>
        </div>

        <div class="mt-5 space-y-3">
          <div class="rounded-3xl bg-slate-50 p-4">
            <div class="text-xs uppercase tracking-[0.16em] text-slate-400">Checkout code</div>
            <div class="mt-2 text-lg font-semibold text-slate-950">{{ code }}</div>
          </div>
          <div class="rounded-3xl bg-slate-50 p-4">
            <div class="text-xs uppercase tracking-[0.16em] text-slate-400">Status</div>
            <div class="mt-2 text-lg font-semibold text-emerald-600">Published</div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>