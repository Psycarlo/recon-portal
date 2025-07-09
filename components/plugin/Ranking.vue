<template>
  <div class="flex flex-col gap-6">
    <div class="flex gap-4">
      <div
        v-if="ranking.length > 1"
        class="flex flex-col mt-4 items-center gap-1"
      >
        <UiAvatar class="size-8 rounded-full outline-2 outline-cyan-700">
          <UiAvatarImage :src="ranking[1].avatar" alt="User" />
          <UiAvatarFallback class="rounded-full"> PS </UiAvatarFallback>
        </UiAvatar>
        <span class="font-medium text-center">{{ ranking[1].name }}</span>
      </div>
      <div v-if="ranking.length > 0" class="flex flex-col items-center gap-1">
        <UiAvatar class="size-10 rounded-full outline-2 outline-amber-400">
          <UiAvatarImage :src="ranking[0].avatar" alt="User" />
          <UiAvatarFallback class="rounded-full"> PS </UiAvatarFallback>
        </UiAvatar>
        <span class="font-medium text-center">{{ ranking[0].name }}</span>
      </div>
      <div
        v-if="ranking.length > 2"
        class="flex flex-col mt-4 items-center gap-1"
      >
        <UiAvatar class="size-8 rounded-full outline-2 outline-red-800">
          <UiAvatarImage :src="ranking[2].avatar" alt="User" />
          <UiAvatarFallback class="rounded-full"> PS </UiAvatarFallback>
        </UiAvatar>
        <span class="font-medium text-center">{{ ranking[2].name }}</span>
      </div>
    </div>
    <ol class="flex flex-col gap-2.5">
      <li
        v-for="(entry, i) in ranking"
        class="flex justify-between items-center"
      >
        <div class="flex items-center gap-4">
          <span class="font-bold min-w-4">{{ i + 1 }}</span>
          <UiAvatar class="size-6 rounded-full">
            <UiAvatarImage :src="entry.avatar" :alt="entry.name" />
            <UiAvatarFallback class="rounded-full"> PS </UiAvatarFallback>
          </UiAvatar>
          <span class="font-medium">{{ entry.name }}</span>
        </div>
        <span class="self-end" :class="{ 'font-bold': i <= 2 }">{{
          entry.points
        }}</span>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
type RankingEntry = {
  avatar: string;
  name: string;
  points: number;
};

type PluginRankingProps = {
  ranking: RankingEntry[];
};

defineProps<PluginRankingProps>();
</script>
