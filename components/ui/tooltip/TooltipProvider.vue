<script setup lang="ts">
import { TooltipProvider, type TooltipProviderProps } from 'reka-ui'

const props = withDefaults(defineProps<TooltipProviderProps>(), {
  delayDuration: 400,
})
</script>

<template>
  <TooltipProvider v-bind="props">
    <slot />
  </TooltipProvider>
</template>
