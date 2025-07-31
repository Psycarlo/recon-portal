<template>
  <div class="[--header-height:calc(--spacing(20))]">
    <UiSidebarProvider class="flex flex-col">
      <RHeader />
      <div class="flex flex-1">
        <RSidebar />
        <UiSidebarInset class="p-5">
          <slot />
        </UiSidebarInset>
      </div>
    </UiSidebarProvider>
  </div>
</template>
