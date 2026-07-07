<script setup>
import { computed, ref, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import SidebarNav from './SidebarNav.vue'
import TopBar from './TopBar.vue'

const route = useRoute()
const sidebarOpen = ref(false)
const pageTitle = computed(() => route.meta.title || 'GatePass')

watch(
  () => route.fullPath,
  () => {
    sidebarOpen.value = false
  },
)
</script>

<template>
  <div class="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(240,85,55,0.12),transparent_28%),linear-gradient(180deg,#fff9f7_0%,#f6f7fb_20%,#f6f7fb_100%)] text-slate-900">
    <div class="mx-auto flex min-h-screen max-w-[1800px] gap-0 lg:p-6">
      <SidebarNav :open="sidebarOpen" @close="sidebarOpen = false" />

      <div class="flex min-h-screen flex-1 flex-col overflow-hidden lg:rounded-[32px] lg:border lg:border-black/5 lg:bg-white/75 lg:shadow-[0_30px_90px_rgba(15,17,21,0.08)] lg:backdrop-blur-2xl">
        <TopBar :title="pageTitle" @toggle-sidebar="sidebarOpen = !sidebarOpen" />

        <main class="gatepass-scroll flex-1 overflow-y-auto px-4 pb-8 sm:px-6 lg:px-8">
          <RouterView />
        </main>
      </div>
    </div>
  </div>
</template>