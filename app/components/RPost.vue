<template>
  <UiCard as="article">
    <div class="flex gap-4">
      <UiAvatar class="size-8 rounded-full">
        <UiAvatarImage :src="avatar" alt="User" />
        <UiAvatarFallback class="rounded-full">
          {{ avatarFallback }}
        </UiAvatarFallback>
      </UiAvatar>
      <div class="flex flex-col gap-2">
        <div class="flex gap-2 items-center">
          <span class="font-medium">{{ userName }}</span>
          <div class="flex gap-1 items-center text-[#9F9F9F] text-sm">
            <span>{{ userDistrict }}</span>
            <div class="size-[3px] bg-[#9F9F9F] rounded-full" />
            <span>{{ timeAgo }}</span>
          </div>
        </div>
        <div v-if="text" class="text-sm">
          {{ text }}
        </div>
        <ul class="flex gap-4">
          <li>
            <UiButton variant="ghost" class="group gap-1 text-[#9C9C9C] px-2!">
              <IconCommentLine />
              <span class="font-body">{{ nComments }}</span>
            </UiButton>
          </li>
          <li>
            <UiButton variant="ghost" class="group gap-1 text-[#9C9C9C] px-2!">
              <IconHeartLine />
              <span class="font-body">{{ nLikes }}</span>
            </UiButton>
          </li>
        </ul>
      </div>
    </div>
  </UiCard>
</template>

<script setup lang="ts">
import { formatTimeAgo } from '@vueuse/core'

type RPostProps = {
  userName: string
  userDistrict: string
  avatar: string
  avatarFallback: string
  text?: string
  image?: string
  nLikes: number
  nComments: number
  createdAt: Date
}

const props = defineProps<RPostProps>()

const timeAgo = formatTimeAgo(props.createdAt)
</script>
