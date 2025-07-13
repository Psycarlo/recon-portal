<template>
  <UiAccordion
    type="single"
    collapsible
    v-model="isOpen"
    @update:model-value="setCookie"
  >
    <UiAccordionItem
      value="plugin"
      class="bg-card text-card-foreground flex flex-col rounded-lg border border-[#D9D9D9] p-4 shadow-xs relative"
    >
      <UiCardTitle
        class="flex gap-1.5 items-center [&>svg]:fill-primary [&>svg]:size-4"
      >
        <slot name="icon" />
        <span>{{ title }}</span>
      </UiCardTitle>
      <UiAccordionTrigger class="z-50" />
      <UiAccordionContent>
        <slot />
      </UiAccordionContent>
    </UiAccordionItem>
  </UiAccordion>
</template>

<script setup lang="ts">
type RSidePluginProps = {
  id: string
  title: string
}

const props = defineProps<RSidePluginProps>()

const cookieName = `plugin_${props.id}_state`

const wasOpened = useCookie<boolean>(cookieName)
const isOpen = ref(wasOpened.value ? 'plugin' : undefined)

function setCookie(value: string | string[] | undefined) {
  // biome-ignore lint/suspicious/noDocumentCookie: Direct access
  document.cookie = `${cookieName}=${!!value}; path=/; max-age=${
    60 * 60 * 24 * 7
  }`
}
</script>
