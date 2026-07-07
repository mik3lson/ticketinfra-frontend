<script setup>
import { onMounted, ref } from 'vue'
import { dashboardStats, recentEvents } from '@/data/mock'
import PageHeader from '@/components/ui/PageHeader.vue'
import MetricCard from '@/components/ui/MetricCard.vue'

const loading = ref(true)

onMounted(() => {
  window.setTimeout(() => {
    loading.value = false
  }, 420)
})
</script>

<template>
  <div class="space-y-6 py-6">
    <PageHeader
      eyebrow="Overview"
      title="Dashboard"
      subtitle="Track event performance, checkout activity, and revenue from one clean operational view."
    >
      <template #actions>
        <RouterLink to="/events/new" class="rounded-2xl bg-[#f05537] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#f05537]/20 transition hover:translate-y-[-1px]">Create Event</RouterLink>
      </template>
    </PageHeader>

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <template v-if="loading">
        <div v-for="index in 4" :key="index" class="gatepass-card rounded-[28px] p-5">
          <div class="h-4 w-28 rounded-full skeleton" />
          <div class="mt-4 h-9 w-36 rounded-2xl skeleton" />
          <div class="mt-4 h-6 w-24 rounded-full skeleton" />
        </div>
      </template>
      <MetricCard v-else v-for="stat in dashboardStats" :key="stat.label" v-bind="stat" />
    </div>

    <section class="gatepass-card overflow-hidden rounded-[32px]">
      <div class="flex items-center justify-between border-b border-black/5 px-5 py-4 sm:px-6">
        <div>
          <h2 class="text-lg font-semibold text-slate-950">Recent Events</h2>
          <p class="text-sm text-slate-500">Most active events in the last 30 days</p>
        </div>
        <RouterLink to="/events" class="rounded-2xl border border-black/10 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#f05537]/30 hover:bg-[#fff1ed] hover:text-[#b6321f]">View all</RouterLink>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-black/5">
          <thead class="bg-slate-50/80 text-left text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            <tr>
              <th class="px-6 py-4">Event</th>
              <th class="px-6 py-4">Date</th>
              <th class="px-6 py-4">Tickets Sold</th>
              <th class="px-6 py-4">Revenue</th>
              <th class="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-black/5 bg-white text-sm text-slate-700">
            <tr v-for="event in recentEvents" :key="event.event" class="transition hover:bg-slate-50/80">
              <td class="px-6 py-4 font-medium text-slate-950">{{ event.event }}</td>
              <td class="px-6 py-4">{{ event.date }}</td>
              <td class="px-6 py-4">{{ event.ticketsSold.toLocaleString() }}</td>
              <td class="px-6 py-4">{{ event.revenue }}</td>
              <td class="px-6 py-4">
                <span class="inline-flex rounded-full px-3 py-1 text-xs font-semibold" :class="event.status === 'Published' ? 'bg-emerald-50 text-emerald-700' : event.status === 'Live' ? 'bg-[#fff1ed] text-[#b6321f]' : 'bg-slate-100 text-slate-600'">{{ event.status }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>