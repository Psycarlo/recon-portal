<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '@/lib/utils'

const props = defineProps<{
  type?: string
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
}>()

const emits =
  defineEmits<(e: 'update:modelValue', payload: string | number) => void>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

const isPassword = props.type === 'password'
const currentType = ref(!isPassword ? 'text' : 'password')
const isShowingPassword = ref(false)
</script>

<template>
  <div class="relative w-full">
    <input
      v-bind="$attrs"
      :type="currentType"
      v-model="modelValue"
      data-slot="input"
      :class="
        cn(
          'peer file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          'focus-visible:border-ring focus-visible:ring-primary focus-visible:ring-[1px]',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          props.class
        )
      "
    />
    <button
      v-if="isPassword"
      class="absolute inset-y-0 right-2"
      @click="currentType = currentType === 'password' ? 'text' : 'password'"
    >
      <IconEyeLine
        v-if="currentType === 'password'"
        class="size-4 text-[#A3A3A3]"
      />
      <IconEyeOffLine v-else class="size-4 text-[#A3A3A3]" />
    </button>
  </div>
</template>
