<script setup>
import PageHeader from '@/components/ui/PageHeader.vue'
</script>

<template>
  <div class="space-y-6 py-6">
    <PageHeader eyebrow="Integration" title="Webhooks" subtitle="Monitor event delivery and configure endpoint retries." />

    <div class="gatepass-card rounded-[32px] p-6">
      <div class="grid gap-4 lg:grid-cols-2">
        <div class="rounded-[28px] bg-slate-50 p-5">
          <div class="text-sm font-semibold text-slate-950">Webhook endpoint</div>
          <div class="mt-2 break-all rounded-2xl bg-white px-4 py-3 font-mono text-sm text-slate-700">https://api.tickeinfra.africa/webhooks</div>
        </div>
        <div class="rounded-[28px] bg-slate-50 p-5">
          <div class="text-sm font-semibold text-slate-950">Delivery health</div>
          <div class="mt-2 text-3xl font-semibold text-emerald-600">99.7%</div>
          <p class="mt-2 text-sm text-slate-500">Most webhooks are completing successfully on the first try.</p>
        </div>
      </div>

      <div class="mt-5 grid gap-3">
        <div class="rounded-3xl border border-black/5 bg-white p-4">
          <div class="flex items-center justify-between gap-3">
            <div>
              <div class="text-sm font-semibold text-slate-950">checkout.session.completed</div>
              <div class="text-xs text-slate-500">Delivered 2 minutes ago</div>
            </div>
            <span class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">200 OK</span>
          </div>
        </div>
        <div class="rounded-3xl border border-black/5 bg-white p-4">
          <div class="flex items-center justify-between gap-3">
            <div>
              <div class="text-sm font-semibold text-slate-950">checkout.session.failed</div>
              <div class="text-xs text-slate-500">Retries exhausted for 1 payload</div>
            </div>
            <span class="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">Retrying</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>