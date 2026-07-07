<script setup>
import { customers } from '@/data/mock'
import PageHeader from '@/components/ui/PageHeader.vue'
</script>

<template>
  <div class="space-y-6 py-6">
    <PageHeader eyebrow="Audience" title="Customers" subtitle="Review attendees, ticket type, and payment state in one table." />

    <section class="gatepass-card overflow-hidden rounded-[32px]">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-black/5">
          <thead class="bg-slate-50/80 text-left text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            <tr>
              <th class="px-6 py-4">Customer Name</th>
              <th class="px-6 py-4">Email</th>
              <th class="px-6 py-4">Event</th>
              <th class="px-6 py-4">Ticket Type</th>
              <th class="px-6 py-4">Amount Paid</th>
              <th class="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-black/5 bg-white text-sm text-slate-700">
            <tr v-for="customer in customers" :key="customer.email" class="transition hover:bg-slate-50/80">
              <td class="px-6 py-4 font-medium text-slate-950">{{ customer.name }}</td>
              <td class="px-6 py-4">{{ customer.email }}</td>
              <td class="px-6 py-4">{{ customer.event }}</td>
              <td class="px-6 py-4">{{ customer.ticketType }}</td>
              <td class="px-6 py-4">{{ customer.amountPaid }}</td>
              <td class="px-6 py-4">
                <span class="inline-flex rounded-full px-3 py-1 text-xs font-semibold" :class="customer.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : customer.status === 'Refunded' ? 'bg-rose-50 text-rose-700' : 'bg-amber-50 text-amber-700'">{{ customer.status }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>