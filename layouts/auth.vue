<template>
  <main class="min-h-screen flex">
    <div
      class="w-full lg:w-1/2 py-20 flex flex-col items-center justify-between"
    >
      <div class="loader" />
      <slot />
      <span class="text-xs max-w-[260px] text-center">
        {{ $t("auth.difficulties") }}
        <NuxtLink to="mailto:geral@recon.pt" class="text-primary">
          geral@recon.pt
        </NuxtLink>
      </span>
    </div>
    <div
      class="hidden w-1/2 bg-[#1E1E1E] lg:grid place-content-center relative"
    >
      <NuxtImg
        src="sword.png"
        alt="Sword"
        width="400"
        class="transition-transform duration-500 hover:-translate-y-2 z-50"
      />
      <BackgroundParticles
        class="absolute inset-0 pointer-events-none"
        :quantity="60"
        :ease="100"
        color="#FFF"
        :staticity="10"
      />
    </div>
  </main>
</template>

<style>
.loader {
  width: fit-content;
  font-size: 40px;
  font-family: Antonio;
  font-weight: bold;
  text-transform: uppercase;
  color: #0000;
  -webkit-text-stroke: 1px #1e1e1e;
  background: linear-gradient(-60deg, #1e1e1e00 45%, #1e1e1e 0 55%, #1e1e1e00 0)
    0/300% 100% no-repeat text;
  animation: l3 2s linear infinite;
}
.loader:before {
  content: "Reconquista";
}
@keyframes l3 {
  0% {
    background-position: 100%;
  }
}
</style>
