<template>
  <UiDropdownMenu>
    <UiTooltipProvider>
      <UiTooltip>
        <UiTooltipTrigger asChild>
          <UiDropdownMenuTrigger
            class="size-9 rounded-md bg-[#272727] [&>svg]:size-5 [&>svg]:text-white grid place-content-center"
          >
            <slot name="icon" />
          </UiDropdownMenuTrigger>
        </UiTooltipTrigger>
        <UiTooltipContent>
          <span>{{ tooltip }}</span>
        </UiTooltipContent>
      </UiTooltip>
    </UiTooltipProvider>
    <UiDropdownMenuContent>
      <slot />
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>

<script setup lang="ts">
type RDropdownMenuProps = {
  tooltip: string;
};

defineProps<RDropdownMenuProps>();
</script>
