<script setup>
import { BellIcon, Bars3Icon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { notifications } from '@/data/mock'
import { useAuthStore } from '@/stores/auth'

const emit = defineEmits(['toggle-sidebar'])
const route = useRoute()
const authStore = useAuthStore()
const search = ref('')
const notificationOpen = ref(false)

const avatarLabel = computed(() => authStore.user?.name?.slice(0, 1)?.toUpperCase() || 'G')

watch(
  () => route.fullPath,
  () => {
    notificationOpen.value = false
  },
)
</script>

<template>
  <header class="sticky top-0 z-30 border-b border-black/5 bg-white/80 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
    <div class="flex items-center gap-3">
      <button class="rounded-2xl border border-black/10 p-2 text-slate-600 lg:hidden" @click="emit('toggle-sidebar')">
        <Bars3Icon class="h-5 w-5" />
      </button>

      <div class="hidden flex-1 items-center rounded-2xl border border-black/5 bg-slate-50 px-4 py-2.5 text-slate-500 sm:flex">
        <MagnifyingGlassIcon class="h-4 w-4 text-slate-400" />
        <input v-model="search" type="text" placeholder="Search events, customers, orders..." class="ml-3 w-full bg-transparent text-sm outline-none placeholder:text-slate-400" />
      </div>

      <div class="relative ml-auto flex items-center gap-3">
        <button class="relative rounded-2xl border border-black/10 bg-white p-2.5 text-slate-600 shadow-sm" @click="notificationOpen = !notificationOpen">
          <BellIcon class="h-5 w-5" />
          <span class="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-[#f05537] ring-2 ring-white" />
        </button>

        <div class="flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-3 py-2 shadow-sm">
          <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white">
            {{ avatarLabel }}
          </div>
          <div class="hidden sm:block">
            <div class="text-sm font-semibold text-slate-900">{{ authStore.user?.name || 'ticketInfra User' }}</div>
            <div class="text-xs text-slate-500">{{ authStore.user?.role || 'Organizer' }}</div>
          </div>
        </div>

        <div v-if="notificationOpen" class="absolute right-0 top-14 w-[320px] rounded-[24px] border border-black/5 bg-white p-4 shadow-[0_20px_50px_rgba(15,17,21,0.12)]">
          <div class="text-sm font-semibold text-slate-900">Notifications</div>
          <div class="mt-3 space-y-3">
            <div v-for="item in notifications" :key="item.title" class="rounded-2xl bg-slate-50 p-3">
              <div class="text-sm font-medium text-slate-900">{{ item.title }}</div>
              <div class="mt-1 text-xs text-slate-500">{{ item.meta }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>