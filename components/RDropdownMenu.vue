<template>
  <UiDropdownMenu>
    <UiDropdownMenuTrigger
      class="relative size-9 rounded-md bg-[#272727] [&>svg]:size-5 [&>svg]:text-white grid place-content-center"
    >
      <slot name="icon" />
      <div
        v-if="hasUnread"
        class="size-2 rounded-full absolute -top-0.5 -right-0.5 bg-[#FFA500]"
      />
    </UiDropdownMenuTrigger>
    <UiDropdownMenuPortal>
      <UiDropdownMenuContent align="end" :sideOffset="8">
        <slot />
      </UiDropdownMenuContent>
    </UiDropdownMenuPortal>
  </UiDropdownMenu>
</template>

<script setup lang="ts">
type RDropdownMenuProps = {
  tooltip: string;
  hasUnread?: boolean;
};

defineProps<RDropdownMenuProps>();
</script>
