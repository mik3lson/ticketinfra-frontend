<script setup>
import { computed, onMounted, ref } from 'vue'
import PageHeader from '@/components/ui/PageHeader.vue'
import { fetchOrders } from '@/services/orders.service'

const filterOptions = ['Paid', 'Pending', 'Failed']
const activeFilter = ref(null)
const orders = ref([])
const loading = ref(true)
const error = ref('')

const filteredOrders = computed(() =>
  activeFilter.value ? orders.value.filter((order) => order.status === activeFilter.value) : orders.value,
)

function toggleFilter(status) {
  activeFilter.value = activeFilter.value === status ? null : status
}

async function load() {
  loading.value = true
  error.value = ''
  try {
    orders.value = await fetchOrders()
  } catch (err) {
    error.value = 'Could not load orders. Check your connection and try again.'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>

<template>
  <div class="space-y-6 py-6">
    <PageHeader eyebrow="Payments" title="Orders" subtitle="Track ticket purchases and quickly filter by payment status.">
      <template #actions>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="item in filterOptions"
            :key="item"
            class="rounded-full border px-4 py-2 text-sm font-medium transition"
            :class="activeFilter === item
              ? 'border-[#f05537] bg-[#fff1ed] text-[#b6321f]'
              : 'border-black/10 text-slate-600 hover:border-[#f05537]/30 hover:bg-[#fff1ed] hover:text-[#b6321f]'"
            @click="toggleFilter(item)"
          >
            {{ item }}
          </button>
        </div>
      </template>
    </PageHeader>

    <section class="gatepass-card overflow-hidden rounded-[32px]">
      <div v-if="loading" class="space-y-3 p-6">
        <div v-for="n in 4" :key="n" class="h-12 animate-pulse rounded-2xl bg-slate-100" />
      </div>

      <div v-else-if="error" class="flex flex-col items-center gap-3 p-10 text-center">
        <p class="text-sm font-medium text-rose-600">{{ error }}</p>
        <button class="rounded-full bg-[#f05537] px-4 py-2 text-sm font-semibold text-white" @click="load">Retry</button>
      </div>

      <div v-else-if="filteredOrders.length === 0" class="p-10 text-center text-sm text-slate-500">
        No orders {{ activeFilter ? `with status "${activeFilter}"` : 'yet' }}.
      </div>

      <div v-else class="overflow-x-auto">
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
            <tr v-for="order in filteredOrders" :key="order.id" class="transition hover:bg-slate-50/80">
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