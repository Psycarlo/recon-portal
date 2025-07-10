<template>
  <header class="sticky top-0 z-50 flex w-full items-center bg-[#1E1E1E]">
    <div class="flex h-20 w-full items-center justify-between gap-2 px-4">
      <NuxtLink :to="localePath('index')">
        <IconReconquista />
      </NuxtLink>
      <ul class="flex gap-8 items-center">
        <li>
          <UiButton>
            {{ $t("nav.donations") }}
          </UiButton>
        </li>
        <li>
          <RDropdownMenu :tooltip="t('nav.notifications')">
            <template #icon>
              <IconNotificationLine />
            </template>
          </RDropdownMenu>
        </li>
        <li>
          <RDropdownMenu :tooltip="t('nav.privateMessages')">
            <template #icon>
              <IconChatLine />
            </template>
          </RDropdownMenu>
        </li>
        <li class="flex gap-1 font-heading uppercase">
          <span class="text-[#8B8B8B]">{{ $t("nav.points") }}</span>
          <span class="text-white">187</span>
        </li>
        <li>
          <RNavUser
            name="Carlos Marques"
            role="Administrador"
            email="psycarlo1@gmail.com"
          />
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { t } = useI18n();
</script>
