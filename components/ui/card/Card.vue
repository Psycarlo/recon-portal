<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-slot="card"
    :class="
      cn(
        'bg-card text-card-foreground flex flex-col gap-3 rounded-lg border border-[#D9D9D9] p-4 shadow-xs relative',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
