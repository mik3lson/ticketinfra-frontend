<script setup>
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import PageHeader from '@/components/ui/PageHeader.vue'
import CheckoutBuilderWorkspace from '@/components/builder/CheckoutBuilderWorkspace.vue'
import { useBuilderStore } from '@/stores/builder'

const router = useRouter()
const builderStore = useBuilderStore()
const step = ref(1)
const form = reactive({
  eventName: 'ticketInfra Summit 2026',
  description: 'A premium event experience for organizers and attendees.',
  venue: 'Landmark Event Centre',
  category: 'Technology',
  date: '2026-07-18',
  startTime: '09:00',
  endTime: '17:00',
})
const ticketTypes = ref([
  { name: 'Regular', price: 5000, quantity: 100 },
  { name: 'VIP', price: 20000, quantity: 50 },
  { name: 'Student', price: 2000, quantity: 300 },
])

const stepLabel = computed(() => ['Basic Information', 'Ticket Types', 'Checkout Builder'][step.value - 1])

function addTicketType() {
  ticketTypes.value.push({ name: 'New Ticket', price: 0, quantity: 0 })
}

function publish() {
  builderStore.publish()
  router.push(`/publish/${builderStore.publishCode}`)
}
</script>

<template>
  <div class="space-y-6 py-6">
    <PageHeader
      eyebrow="Creation Wizard"
      title="Create Event"
      subtitle="Use a guided flow to add event details, ticket types, and the checkout experience without a long form."
    />

    <div class="flex flex-wrap gap-3">
      <button v-for="(label, index) in ['Basic Information', 'Ticket Types', 'Checkout Builder']" :key="label" class="rounded-full px-4 py-2 text-sm font-semibold transition" :class="step === index + 1 ? 'bg-[#f05537] text-white shadow-lg shadow-[#f05537]/20' : 'bg-white text-slate-600 shadow-sm border border-black/5'" @click="step = index + 1">{{ index + 1 }}. {{ label }}</button>
    </div>

    <section v-if="step === 1" class="gatepass-card rounded-[32px] p-6">
      <div class="mb-6">
        <div class="text-sm font-semibold text-slate-950">Step 1</div>
        <div class="text-sm text-slate-500">{{ stepLabel }}</div>
      </div>

      <div class="grid gap-4 md:grid-cols-2">
        <label class="block md:col-span-2">
          <span class="mb-2 block text-sm font-medium text-slate-700">Event Name</span>
          <input v-model="form.eventName" class="w-full rounded-2xl border border-black/10 bg-slate-50 px-4 py-3 outline-none focus:border-[#f05537] focus:bg-white" />
        </label>
        <label class="block md:col-span-2">
          <span class="mb-2 block text-sm font-medium text-slate-700">Description</span>
          <textarea v-model="form.description" rows="4" class="w-full rounded-2xl border border-black/10 bg-slate-50 px-4 py-3 outline-none focus:border-[#f05537] focus:bg-white" />
        </label>
        <label class="block"><span class="mb-2 block text-sm font-medium text-slate-700">Venue</span><input v-model="form.venue" class="w-full rounded-2xl border border-black/10 bg-slate-50 px-4 py-3 outline-none focus:border-[#f05537] focus:bg-white" /></label>
        <label class="block"><span class="mb-2 block text-sm font-medium text-slate-700">Category</span><input v-model="form.category" class="w-full rounded-2xl border border-black/10 bg-slate-50 px-4 py-3 outline-none focus:border-[#f05537] focus:bg-white" /></label>
        <label class="block"><span class="mb-2 block text-sm font-medium text-slate-700">Date</span><input v-model="form.date" type="date" class="w-full rounded-2xl border border-black/10 bg-slate-50 px-4 py-3 outline-none focus:border-[#f05537] focus:bg-white" /></label>
        <label class="block"><span class="mb-2 block text-sm font-medium text-slate-700">Start Time</span><input v-model="form.startTime" type="time" class="w-full rounded-2xl border border-black/10 bg-slate-50 px-4 py-3 outline-none focus:border-[#f05537] focus:bg-white" /></label>
        <label class="block"><span class="mb-2 block text-sm font-medium text-slate-700">End Time</span><input v-model="form.endTime" type="time" class="w-full rounded-2xl border border-black/10 bg-slate-50 px-4 py-3 outline-none focus:border-[#f05537] focus:bg-white" /></label>
        <label class="block md:col-span-2"><span class="mb-2 block text-sm font-medium text-slate-700">Cover Image Upload</span><input type="file" class="w-full rounded-2xl border border-dashed border-black/10 bg-white px-4 py-3 text-sm" /></label>
      </div>

      <div class="mt-6 flex justify-end">
        <button class="rounded-2xl bg-[#f05537] px-4 py-3 text-sm font-semibold text-white" @click="step = 2">Continue</button>
      </div>
    </section>

    <section v-else-if="step === 2" class="gatepass-card rounded-[32px] p-6">
      <div class="mb-6 flex items-center justify-between">
        <div>
          <div class="text-sm font-semibold text-slate-950">Step 2</div>
          <div class="text-sm text-slate-500">{{ stepLabel }}</div>
        </div>
        <button class="rounded-2xl border border-black/10 px-4 py-2 text-sm font-medium text-slate-700" @click="addTicketType">Add Ticket Type</button>
      </div>

      <div class="space-y-4">
        <div v-for="ticket in ticketTypes" :key="ticket.name" class="rounded-[28px] border border-black/5 bg-slate-50 p-4 sm:flex sm:items-end sm:gap-4">
          <div class="grid flex-1 gap-4 sm:grid-cols-3">
            <label class="block"><span class="mb-2 block text-sm font-medium text-slate-700">Ticket Name</span><input v-model="ticket.name" class="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#f05537]" /></label>
            <label class="block"><span class="mb-2 block text-sm font-medium text-slate-700">Price</span><input v-model="ticket.price" type="number" class="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#f05537]" /></label>
            <label class="block"><span class="mb-2 block text-sm font-medium text-slate-700">Quantity</span><input v-model="ticket.quantity" type="number" class="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#f05537]" /></label>
          </div>
        </div>
      </div>

      <div class="mt-6 flex justify-between">
        <button class="rounded-2xl border border-black/10 px-4 py-3 text-sm font-semibold text-slate-700" @click="step = 1">Back</button>
        <button class="rounded-2xl bg-[#f05537] px-4 py-3 text-sm font-semibold text-white" @click="step = 3">Continue to Builder</button>
      </div>
    </section>

    <section v-else class="space-y-4">
      <div class="gatepass-card rounded-[32px] p-6">
        <div class="mb-6 flex items-center justify-between">
          <div>
            <div class="text-sm font-semibold text-slate-950">Step 3</div>
            <div class="text-sm text-slate-500">{{ stepLabel }}</div>
          </div>
          <button class="rounded-2xl bg-[#f05537] px-4 py-3 text-sm font-semibold text-white" @click="publish">Publish</button>
        </div>

        <CheckoutBuilderWorkspace />
      </div>
    </section>
  </div>
</template>