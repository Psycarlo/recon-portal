<template>
  <UiCard>
    <UiCardTitle class="flex gap-1.5 items-center">
      <IconPushpinFill class="size-4 fill-primary" />
      <span>{{ $t("announcement") }}</span>
    </UiCardTitle>
    <UiCardContent>
      <p class="text-sm">{{ text }}</p>
    </UiCardContent>
    <UiButton variant="ghost" size="icon" class="absolute top-1.5 right-1.5">
      <IconCloseLine class="size-4 fill-[#888888]" />
    </UiButton>
  </UiCard>
</template>

<script setup lang="ts">
type RAnnouncementProps = {
  text: string;
};

defineProps<RAnnouncementProps>();
</script>
