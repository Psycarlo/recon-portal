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
          <RDropdownMenu :tooltip="t('nav.notifications')" has-unread>
            <template #icon>
              <IconNotificationLine />
            </template>
            <div class="flex flex-col gap-4 min-w-[320px] max-w-[380px]">
              <div class="flex items-center justify-between">
                <span class="font-heading font-bold uppercase">
                  {{ $t("nav.notifications") }}
                </span>
                <ul class="flex items-center gap-1">
                  <li>
                    <UiButton variant="ghost" size="icon">
                      <IconCheckDoubleLine class="size-5" />
                    </UiButton>
                  </li>
                  <li>
                    <UiButton variant="ghost" size="icon">
                      <IconSettings4Line class="size-5" />
                    </UiButton>
                  </li>
                </ul>
              </div>
              <RNotification
                avatar="https://picsum.photos/id/211/200/200"
                avatar-fallback="PS"
                user-name="Carlos Marques"
                unread
                :created-at="new Date(1752075002000)"
              />
            </div>
          </RDropdownMenu>
        </li>
        <li>
          <RDropdownMenu :tooltip="t('nav.privateMessages')">
            <template #icon>
              <IconChatLine />
            </template>
            <div class="flex flex-col gap-4 p-2">
              <span class="font-heading font-bold uppercase">
                {{ $t("nav.privateMessages") }}
              </span>
            </div>
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
