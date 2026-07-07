<template>
  <div class="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(240,85,55,0.18),transparent_30%),linear-gradient(180deg,#fff7f4_0%,#f6f7fb_100%)] px-4 py-8 sm:px-6 lg:px-8">
    <div class="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl overflow-hidden rounded-[32px] border border-black/5 bg-white/85 shadow-[0_30px_100px_rgba(15,17,21,0.1)] backdrop-blur-2xl lg:grid-cols-[1.1fr_0.9fr]">
      <div class="relative overflow-hidden bg-[#0f1115] p-8 text-white sm:p-12 lg:p-16">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,85,55,0.36),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_26%)]" />
        <div class="relative z-10 flex h-full flex-col justify-between gap-12">
          <div>
            <div class="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur">
              <span class="h-2.5 w-2.5 rounded-full bg-[#f05537]" />
              GatePass ticket infrastructure
            </div>

            <h1 class="mt-8 max-w-lg text-4xl font-semibold tracking-tight sm:text-5xl">
              Build premium checkout flows for modern events.
            </h1>

            <p class="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
              Stripe-grade operations, Linear-like clarity, and Eventbrite-inspired visual polish for organizers who care about conversion.
            </p>
          </div>

          <div class="grid gap-4 sm:grid-cols-3">
            <div class="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur">
              <div class="text-3xl font-semibold">128</div>
              <div class="mt-1 text-sm text-white/65">Live events</div>
            </div>
            <div class="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur">
              <div class="text-3xl font-semibold">₦84M</div>
              <div class="mt-1 text-sm text-white/65">Revenue processed</div>
            </div>
            <div class="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur">
              <div class="text-3xl font-semibold">42</div>
              <div class="mt-1 text-sm text-white/65">Checkout links</div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center p-6 sm:p-10 lg:p-12">
        <RouterView />
      </div>
    </div>
  </div>
</template>