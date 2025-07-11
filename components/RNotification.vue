<template>
  <NuxtLink
    href="#"
    class="flex justify-between items-center hover:bg-[#f0f0f0] px-2.5 py-1 rounded-md"
  >
    <div class="flex items-center gap-2">
      <UiAvatar class="size-8 rounded-full">
        <UiAvatarImage :src="avatar" alt="User" />
        <UiAvatarFallback class="rounded-full">
          {{ avatarFallback }}
        </UiAvatarFallback>
      </UiAvatar>
      <div class="flex flex-col">
        <span class="font-medium text-sm">{{ userName }}</span>
        <span class="text-[#9F9F9F] text-xs">{{ timeAgo }}</span>
      </div>
    </div>
    <div class="size-2 bg-primary rounded-full"></div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { formatTimeAgo } from "@vueuse/core";

type RNotificationProps = {
  avatar: string;
  avatarFallback: string;
  userName: string;
  unread?: boolean;
  createdAt: Date;
};

const props = defineProps<RNotificationProps>();

const timeAgo = formatTimeAgo(props.createdAt);
</script>
