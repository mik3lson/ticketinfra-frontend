import { computed, reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { checkoutTemplate, checkoutTickets, defaultCheckoutComponents } from '@/data/mock'

function uid(prefix = 'cmp') {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`
}

function cloneComponent(component) {
  return {
    ...structuredClone(component),
    id: uid(component.type),
  }
}

export const useBuilderStore = defineStore('builder', () => {
  const branding = reactive({ ...checkoutTemplate })
  const components = ref(defaultCheckoutComponents.map((component) => structuredClone(component)))
  const selectedComponentId = ref(components.value[0]?.id ?? '')
  const publishCode = ref('abc123')
  const ticketOptions = ref(structuredClone(checkoutTickets))
  const notification = ref('')

  const selectedComponent = computed(() => components.value.find((component) => component.id === selectedComponentId.value) ?? null)
  const checkoutUrl = computed(() => `https://checkout.gatepass.africa/c/${publishCode.value}`)
  const selectedTicketTotal = computed(() => ticketOptions.value.reduce((sum, ticket) => sum + ticket.price * ticket.quantity, 0))

  function selectComponent(componentId) {
    selectedComponentId.value = componentId
  }

  function setComponents(nextComponents) {
    components.value = nextComponents
  }

  function addComponent(template) {
    const nextComponent = cloneComponent({
      id: uid(template.type),
      type: template.type,
      visible: true,
      content: {
        title: template.title,
        subtitle: template.description,
      },
      style: {
        backgroundColor: '#ffffff',
        textColor: '#111111',
        borderRadius: '18',
        padding: '12',
        margin: '0',
        fontSize: '15',
        fontWeight: '600',
        align: 'left',
        buttonColor: '#f05537',
      },
    })

    components.value.push(nextComponent)
    selectedComponentId.value = nextComponent.id
  }

  function updateSelectedContent(field, value) {
    if (!selectedComponent.value) {
      return
    }

    selectedComponent.value.content[field] = value
  }

  function updateSelectedStyle(field, value) {
    if (!selectedComponent.value) {
      return
    }

    selectedComponent.value.style[field] = value
  }

  function removeSelected() {
    if (!selectedComponent.value) {
      return
    }

    const index = components.value.findIndex((component) => component.id === selectedComponent.value.id)

    if (index !== -1) {
      components.value.splice(index, 1)
      selectedComponentId.value = components.value[index - 1]?.id ?? components.value[0]?.id ?? ''
    }
  }

  function duplicateSelected() {
    if (!selectedComponent.value) {
      return
    }

    const index = components.value.findIndex((component) => component.id === selectedComponent.value.id)
    const copy = cloneComponent(selectedComponent.value)

    components.value.splice(index + 1, 0, copy)
    selectedComponentId.value = copy.id
  }

  function toggleVisibility() {
    if (!selectedComponent.value) {
      return
    }

    selectedComponent.value.visible = !selectedComponent.value.visible
  }

  function updateBranding(field, value) {
    branding[field] = value
  }

  function setNotification(message) {
    notification.value = message
  }

  function updateTicketQuantity(index, delta) {
    const ticket = ticketOptions.value[index]

    if (!ticket) {
      return
    }

    ticket.quantity = Math.max(0, ticket.quantity + delta)
  }

  function publish() {
    setNotification('Checkout published successfully.')
  }

  return {
    branding,
    components,
    selectedComponentId,
    selectedComponent,
    checkoutUrl,
    selectedTicketTotal,
    ticketOptions,
    notification,
    publishCode,
    selectComponent,
    setComponents,
    addComponent,
    updateSelectedContent,
    updateSelectedStyle,
    removeSelected,
    duplicateSelected,
    toggleVisibility,
    updateBranding,
    updateTicketQuantity,
    publish,
    setNotification,
  }
})