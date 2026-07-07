<script setup>
import { computed, ref } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import { PhotoIcon, RectangleStackIcon, SwatchIcon } from '@heroicons/vue/24/outline'
import { builderPalette } from '@/data/mock'
import { useBuilderStore } from '@/stores/builder'

const builderStore = useBuilderStore()
const activeTab = ref('design')

const previewComponents = computed({
  get: () => builderStore.components,
  set: (value) => builderStore.setComponents(value),
})

function cloneTemplate(template) {
  builderStore.addComponent(template)
}

function uploadImage(event) {
  const file = event.target.files?.[0]

  if (!file || !builderStore.selectedComponent) {
    return
  }

  const reader = new FileReader()

  reader.onload = () => {
    builderStore.updateSelectedContent('image', String(reader.result))
  }

  reader.readAsDataURL(file)
}
</script>

<template>
  <div class="grid min-h-[calc(100vh-180px)] gap-4 xl:grid-cols-[280px_minmax(0,1.45fr)_320px] 2xl:grid-cols-[300px_minmax(0,1.6fr)_320px]">
    <aside class="gatepass-card rounded-[28px] p-4">
      <div class="flex items-center justify-between">
        <div>
          <div class="text-sm font-semibold text-slate-950">Components</div>
          <div class="text-xs text-slate-500">Drag into the checkout preview</div>
        </div>
        <div class="inline-flex rounded-full bg-[#fff1ed] px-3 py-1 text-xs font-semibold text-[#b6321f]">{{ builderStore.components.length }} blocks</div>
      </div>

      <div class="mt-4 grid gap-3">
        <VueDraggable
          :model-value="builderPalette"
          :group="{ name: 'checkout', pull: 'clone', put: false, revertClone: true }"
          :sort="false"
          :clone="cloneTemplate"
          class="space-y-3"
        >
          <div
            v-for="template in builderPalette"
            :key="template.type"
            class="cursor-grab rounded-3xl border border-dashed border-black/10 bg-slate-50 p-4 transition hover:border-[#f05537]/30 hover:bg-[#fff8f6]"
            @click="cloneTemplate(template)"
          >
            <div class="flex items-start gap-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#f05537] shadow-sm">
                <RectangleStackIcon v-if="template.type === 'divider'" class="h-5 w-5" />
                <PhotoIcon v-else-if="template.type === 'banner'" class="h-5 w-5" />
                <SwatchIcon v-else class="h-5 w-5" />
              </div>
              <div>
                <div class="text-sm font-semibold text-slate-950">{{ template.title }}</div>
                <div class="mt-1 text-xs leading-5 text-slate-500">{{ template.description }}</div>
              </div>
            </div>
          </div>
        </VueDraggable>
      </div>
    </aside>

    <section class="gatepass-card rounded-[32px] p-4 lg:p-6">
      <div class="flex items-center justify-between border-b border-black/5 pb-4">
        <div>
          <div class="text-sm font-semibold text-slate-950">Live Preview</div>
          <div class="text-xs text-slate-500">Build the customer-facing checkout in real time</div>
        </div>

        <div class="inline-flex overflow-hidden rounded-2xl border border-black/10 bg-slate-50 p-1 text-sm font-medium">
          <button class="rounded-xl px-3 py-1.5 transition" :class="activeTab === 'design' ? 'bg-white shadow-sm' : 'text-slate-500'" @click="activeTab = 'design'">Design</button>
          <button class="rounded-xl px-3 py-1.5 transition" :class="activeTab === 'preview' ? 'bg-white shadow-sm' : 'text-slate-500'" @click="activeTab = 'preview'">Preview</button>
        </div>
      </div>

      <div class="mt-4 flex justify-center xl:justify-stretch">
        <div class="w-full max-w-none rounded-[36px] border border-black/5 bg-white p-3 shadow-[0_30px_90px_rgba(15,17,21,0.1)] xl:min-h-[calc(100vh-300px)]">
          <div class="rounded-[30px] bg-[#0f1115] p-3 text-white">
            <div class="gatepass-scroll max-h-[calc(100vh-340px)] space-y-3 overflow-y-auto rounded-[24px] bg-white p-4 text-slate-900 xl:max-h-[calc(100vh-250px)] xl:px-6 xl:py-6" :style="{ backgroundColor: builderStore.branding.backgroundColor, fontFamily: builderStore.branding.font }">
              <VueDraggable
                v-model="previewComponents"
                :group="{ name: 'checkout', pull: true, put: true }"
                :animation="180"
                class="space-y-3"
              >
                <template v-if="builderStore.components.length">
                  <article
                    v-for="element in previewComponents"
                    :key="element.id"
                    v-show="element.visible"
                    class="group relative rounded-[28px] border border-black/5 bg-white/95 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                    :style="{ borderRadius: `${builderStore.branding.borderRadius}px` }"
                    @click.stop="builderStore.selectComponent(element.id)"
                  >
                    <div v-if="builderStore.selectedComponentId === element.id" class="absolute inset-0 rounded-[28px] border-2 border-[#f05537]" />

                    <div v-if="element.type === 'banner'" class="overflow-hidden rounded-[22px]">
                      <img :src="element.content.image || builderStore.branding.coverImage" alt="Banner" class="h-40 w-full object-cover" />
                    </div>

                    <div v-else-if="element.type === 'logo'" class="flex items-center gap-3">
                      <img :src="element.content.image || builderStore.branding.logo" alt="Logo" class="h-14 w-14 rounded-2xl object-cover" />
                      <div>
                        <div class="text-lg font-semibold">{{ element.content.title }}</div>
                        <div class="text-sm text-slate-500">Organizer identity</div>
                      </div>
                    </div>

                    <div v-else-if="element.type === 'ticket-selector'" class="space-y-4">
                      <div>
                        <div class="text-lg font-semibold">Choose tickets</div>
                        <div class="text-sm text-slate-500">Real time price breakdown</div>
                      </div>

                      <div class="space-y-3">
                        <div v-for="(ticket, index) in builderStore.ticketOptions" :key="ticket.name" class="rounded-3xl border border-black/5 bg-slate-50 p-4">
                          <div class="flex items-start justify-between gap-4">
                            <div>
                              <div class="font-semibold text-slate-950">{{ ticket.name }}</div>
                              <div class="mt-1 text-sm text-slate-500">Quantity available: {{ ticket.quantity * 5 }}</div>
                            </div>
                            <div class="text-right">
                              <div class="text-lg font-semibold text-slate-950">₦{{ ticket.price.toLocaleString() }}</div>
                              <div class="mt-1 text-xs text-slate-500">Live stock</div>
                            </div>
                          </div>

                          <div class="mt-4 flex items-center justify-between rounded-2xl bg-white px-3 py-2.5 shadow-sm">
                            <button class="h-8 w-8 rounded-xl bg-slate-100 text-lg font-medium text-slate-700" @click.stop="builderStore.updateTicketQuantity(index, -1)">-</button>
                            <div class="text-sm font-semibold text-slate-900">{{ ticket.quantity }}</div>
                            <button class="h-8 w-8 rounded-xl bg-[#f05537] text-lg font-medium text-white" @click.stop="builderStore.updateTicketQuantity(index, 1)">+</button>
                          </div>
                        </div>
                      </div>

                      <div class="rounded-[24px] bg-[#0f1115] p-4 text-white">
                        <div class="text-sm text-white/70">Live total</div>
                        <div class="mt-1 text-2xl font-semibold">₦{{ builderStore.selectedTicketTotal.toLocaleString() }}</div>
                        <button class="mt-4 w-full rounded-2xl bg-[#f05537] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#f05537]/25">Buy Ticket</button>
                      </div>
                    </div>

                    <div v-else class="space-y-2" :style="{ backgroundColor: element.style.backgroundColor, color: element.style.textColor, borderRadius: `${element.style.borderRadius}px`, padding: `${element.style.padding}px`, marginBottom: `${element.style.margin}px`, textAlign: element.style.align, fontSize: `${element.style.fontSize}px`, fontWeight: element.style.fontWeight }">
                      <template v-if="element.type === 'button'">
                        <button class="w-full rounded-full px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-[#f05537]/20" :style="{ backgroundColor: builderStore.branding.buttonColor }">{{ element.content.title }}</button>
                      </template>

                      <template v-else-if="element.type === 'divider'">
                        <div class="border-t border-dashed border-black/10"></div>
                      </template>

                      <template v-else>
                        <div class="text-base font-semibold text-slate-950">{{ element.content.title }}</div>
                        <div v-if="element.content.subtitle" class="text-sm text-slate-500">{{ element.content.subtitle }}</div>
                      </template>
                    </div>
                  </article>
                </template>
                <div v-else class="rounded-[28px] border border-dashed border-black/10 bg-slate-50 p-10 text-center text-sm text-slate-500">
                  Drag a component here to start building the checkout.
                </div>
              </VueDraggable>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4 flex items-center justify-between gap-3 rounded-[24px] border border-black/5 bg-slate-50 px-4 py-3 text-xs text-slate-500">
        <span>Preview updates instantly from the store.</span>
        <span>{{ builderStore.components.length }} components</span>
      </div>
    </section>

    <aside class="gatepass-card rounded-[28px] p-4">
      <div class="flex items-center justify-between border-b border-black/5 pb-4">
        <div>
          <div class="text-sm font-semibold text-slate-950">Properties</div>
          <div class="text-xs text-slate-500">Edit the selected checkout block</div>
        </div>
        <div class="text-xs font-semibold uppercase tracking-[0.24em] text-[#f05537]">{{ builderStore.selectedComponent?.type || 'None' }}</div>
      </div>

      <div v-if="builderStore.selectedComponent" class="mt-4 space-y-5">
        <div>
          <label class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Visibility</label>
          <button class="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#f05537]/30 hover:bg-[#fff1ed]" @click="builderStore.toggleVisibility()">
            {{ builderStore.selectedComponent.visible ? 'Hide block' : 'Show block' }}
          </button>
        </div>

        <div>
          <label class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Typography</label>
          <div class="mt-2 grid gap-3">
            <input class="rounded-2xl border border-black/10 px-3 py-2.5 text-sm outline-none focus:border-[#f05537]" type="number" min="10" max="48" :value="builderStore.selectedComponent.style.fontSize" @input="builderStore.updateSelectedStyle('fontSize', $event.target.value)" placeholder="Font size" />
            <select class="rounded-2xl border border-black/10 px-3 py-2.5 text-sm outline-none focus:border-[#f05537]" :value="builderStore.selectedComponent.style.fontWeight" @change="builderStore.updateSelectedStyle('fontWeight', $event.target.value)">
              <option value="400">Regular</option>
              <option value="500">Medium</option>
              <option value="600">Semibold</option>
              <option value="700">Bold</option>
              <option value="800">Extra Bold</option>
            </select>
            <select class="rounded-2xl border border-black/10 px-3 py-2.5 text-sm outline-none focus:border-[#f05537]" :value="builderStore.selectedComponent.style.align" @change="builderStore.updateSelectedStyle('align', $event.target.value)">
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </div>
        </div>

        <div>
          <label class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Colors</label>
          <div class="mt-2 grid gap-3">
            <input class="h-12 w-full rounded-2xl border border-black/10 px-3" type="color" :value="builderStore.selectedComponent.style.backgroundColor" @input="builderStore.updateSelectedStyle('backgroundColor', $event.target.value)" />
            <input class="h-12 w-full rounded-2xl border border-black/10 px-3" type="color" :value="builderStore.selectedComponent.style.textColor" @input="builderStore.updateSelectedStyle('textColor', $event.target.value)" />
            <input class="h-12 w-full rounded-2xl border border-black/10 px-3" type="color" :value="builderStore.selectedComponent.style.buttonColor" @input="builderStore.updateSelectedStyle('buttonColor', $event.target.value)" />
          </div>
        </div>

        <div>
          <label class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Spacing</label>
          <div class="mt-2 grid gap-3">
            <input class="rounded-2xl border border-black/10 px-3 py-2.5 text-sm outline-none focus:border-[#f05537]" type="number" min="0" max="64" :value="builderStore.selectedComponent.style.padding" @input="builderStore.updateSelectedStyle('padding', $event.target.value)" placeholder="Padding" />
            <input class="rounded-2xl border border-black/10 px-3 py-2.5 text-sm outline-none focus:border-[#f05537]" type="number" min="0" max="64" :value="builderStore.selectedComponent.style.margin" @input="builderStore.updateSelectedStyle('margin', $event.target.value)" placeholder="Margin" />
          </div>
        </div>

        <div>
          <label class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Border Radius</label>
          <input class="mt-2 w-full rounded-2xl border border-black/10 px-3 py-2.5 text-sm outline-none focus:border-[#f05537]" type="number" min="0" max="48" :value="builderStore.selectedComponent.style.borderRadius" @input="builderStore.updateSelectedStyle('borderRadius', $event.target.value)" />
        </div>

        <div>
          <label class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Image upload</label>
          <input class="mt-2 w-full rounded-2xl border border-black/10 px-3 py-2.5 text-sm" type="file" accept="image/*" @change="uploadImage" />
        </div>

        <div class="flex gap-3">
          <button class="flex-1 rounded-2xl border border-black/10 px-4 py-3 text-sm font-semibold text-slate-700" @click="builderStore.duplicateSelected()">Duplicate</button>
          <button class="flex-1 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white" @click="builderStore.removeSelected()">Remove</button>
        </div>
      </div>

      <div v-else class="mt-6 rounded-[28px] bg-slate-50 p-5 text-sm text-slate-500">
        Select a component in the preview to edit its properties.
      </div>
    </aside>
  </div>
</template>