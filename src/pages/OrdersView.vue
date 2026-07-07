<script setup>
import { orders } from '@/data/mock'
import PageHeader from '@/components/ui/PageHeader.vue'

const filterOptions = ['Paid', 'Pending', 'Failed']
</script>

<template>
  <div class="space-y-6 py-6">
    <PageHeader eyebrow="Payments" title="Orders" subtitle="Track ticket purchases and quickly filter by payment status.">
      <template #actions>
        <div class="flex flex-wrap gap-2">
          <button v-for="item in filterOptions" :key="item" class="rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-[#f05537]/30 hover:bg-[#fff1ed] hover:text-[#b6321f]">{{ item }}</button>
        </div>
      </template>
    </PageHeader>

    <section class="gatepass-card overflow-hidden rounded-[32px]">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-black/5">
          <thead class="bg-slate-50/80 text-left text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            <tr>
              <th class="px-6 py-4">Order ID</th>
              <th class="px-6 py-4">Customer</th>
              <th class="px-6 py-4">Event</th>
              <th class="px-6 py-4">Amount</th>
              <th class="px-6 py-4">Payment Status</th>
              <th class="px-6 py-4">Date</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-black/5 bg-white text-sm text-slate-700">
            <tr v-for="order in orders" :key="order.id" class="transition hover:bg-slate-50/80">
              <td class="px-6 py-4 font-medium text-slate-950">{{ order.id }}</td>
              <td class="px-6 py-4">{{ order.customer }}</td>
              <td class="px-6 py-4">{{ order.event }}</td>
              <td class="px-6 py-4">{{ order.amount }}</td>
              <td class="px-6 py-4">
                <span class="inline-flex rounded-full px-3 py-1 text-xs font-semibold" :class="order.status === 'Paid' ? 'bg-emerald-50 text-emerald-700' : order.status === 'Pending' ? 'bg-amber-50 text-amber-700' : 'bg-rose-50 text-rose-700'">{{ order.status }}</span>
              </td>
              <td class="px-6 py-4">{{ order.date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>