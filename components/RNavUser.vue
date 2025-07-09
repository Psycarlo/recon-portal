<template>
  <UiDropdownMenu>
    <UiDropdownMenuTrigger
      class="flex items-center bg-white px-3 rounded-md gap-1.5"
    >
      <UiAvatar class="size-8 rounded-full">
        <UiAvatarImage src="https://picsum.photos/id/237/200/300" alt="User" />
        <UiAvatarFallback class="rounded-full"> PS </UiAvatarFallback>
      </UiAvatar>
      <div class="flex flex-col items-start">
        <span class="font-heading uppercase font-bold">{{ name }}</span>
        <span class="font-heading uppercase text-xs text-gray-600">
          {{ role }}
        </span>
      </div>
      <IconArrowDown class="size-5 ml-5" />
    </UiDropdownMenuTrigger>
    <UiDropdownMenuPortal>
      <UiDropdownMenuContent
        :side-offset="8"
        class="py-1 w-[var(--reka-dropdown-menu-trigger-width)]"
      >
        <UiDropdownMenuLabel class="flex flex-col gap-0 items-start font-body">
          <span class="font-medium text-sm capitalize">{{ name }}</span>
          <span class="text-xs text-[#8A8A8A] lowercase">{{ email }}</span>
        </UiDropdownMenuLabel>
        <UiDropdownMenuSeparator />
        <UiDropdownMenuGroup>
          <UiDropdownMenuItem>
            <IconUserLine class="size-4 text-black" />
            Perfil
          </UiDropdownMenuItem>
          <UiDropdownMenuItem>
            <IconMoneyEuroBoxLine class="size-4 text-black" />
            Subscrição
          </UiDropdownMenuItem>
        </UiDropdownMenuGroup>
        <UiDropdownMenuSeparator />
        <UiDropdownMenuItem class="flex gap-1.5">
          <IconLogoutBoxLine class="size-4 text-black" />
          Terminar Sessão
        </UiDropdownMenuItem>
      </UiDropdownMenuContent>
    </UiDropdownMenuPortal>
  </UiDropdownMenu>
</template>

<script setup lang="ts">
type RNavUserProps = {
  name: string;
  role: string;
  email: string;
};

defineProps<RNavUserProps>();
</script>
