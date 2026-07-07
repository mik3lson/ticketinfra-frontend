<script setup>
import PageHeader from '@/components/ui/PageHeader.vue'
import CheckoutBuilderWorkspace from '@/components/builder/CheckoutBuilderWorkspace.vue'
</script>

<template>
  <div class="space-y-6 py-6">
    <PageHeader
      eyebrow="Canva for checkouts"
      title="Checkout Builder"
      subtitle="Drag, reorder, and style the checkout page so it feels like a polished product experience."
    />

    <CheckoutBuilderWorkspace />
  </div>
</template>