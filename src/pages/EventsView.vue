<script setup>
import { events } from '@/data/mock'
import PageHeader from '@/components/ui/PageHeader.vue'
import EmptyState from '@/components/ui/EmptyState.vue'

const hasEvents = events.length > 0
</script>

<template>
  <div class="space-y-6 py-6">
    <PageHeader
      eyebrow="Library"
      title="Events"
      subtitle="Manage event records and jump directly into creation or checkout editing."
    >
      <template #actions>
        <RouterLink to="/events/new" class="rounded-2xl bg-[#f05537] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#f05537]/20 transition hover:translate-y-[-1px]">Create Event</RouterLink>
      </template>
    </PageHeader>

    <div v-if="hasEvents" class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      <article v-for="event in events" :key="event.id" class="gatepass-card overflow-hidden rounded-[32px] transition hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,17,21,0.12)]">
        <div class="relative h-48 overflow-hidden">
          <img :src="event.image" :alt="event.title" class="h-full w-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
          <span class="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">{{ event.status }}</span>
        </div>

        <div class="p-5">
          <h3 class="text-xl font-semibold text-slate-950">{{ event.title }}</h3>
          <p class="mt-2 text-sm text-slate-500">{{ event.date }}</p>
          <p class="mt-1 text-sm text-slate-500">{{ event.venue }}</p>

          <div class="mt-5 grid grid-cols-2 gap-3 text-sm">
            <div class="rounded-2xl bg-slate-50 p-3">
              <div class="text-xs uppercase tracking-[0.16em] text-slate-400">Tickets sold</div>
              <div class="mt-1 text-lg font-semibold text-slate-950">{{ event.ticketsSold.toLocaleString() }}</div>
            </div>
            <div class="rounded-2xl bg-slate-50 p-3">
              <div class="text-xs uppercase tracking-[0.16em] text-slate-400">Revenue</div>
              <div class="mt-1 text-lg font-semibold text-slate-950">{{ event.revenue }}</div>
            </div>
          </div>

          <div class="mt-5 flex items-center justify-between gap-3">
            <button class="rounded-2xl border border-black/10 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-[#f05537]/30 hover:bg-[#fff1ed] hover:text-[#b6321f]">Edit</button>
            <RouterLink to="/checkout-builder" class="rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white">Checkout Builder</RouterLink>
          </div>
        </div>
      </article>
    </div>

    <EmptyState v-else icon="GP" title="No events yet" description="Create your first event to start publishing premium checkout pages.">
      <RouterLink to="/events/new" class="rounded-2xl bg-[#f05537] px-4 py-3 text-sm font-semibold text-white">Create Event</RouterLink>
    </EmptyState>
  </div>
</template>