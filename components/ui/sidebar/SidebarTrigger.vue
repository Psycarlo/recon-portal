<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSidebar } from "./utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const { toggleSidebar, open } = useSidebar();
</script>

<template>
  <Button
    data-sidebar="trigger"
    data-slot="sidebar-trigger"
    variant="ghost"
    size="icon"
    :class="[
      cn(
        'z-50 h-7 w-7 bg-[#F3F3F3] hover:bg-[#E6E6E6] rotate-0 duration-100 transition-all',
        props.class
      ),
      open ? '' : 'rotate-180',
    ]"
    @click="toggleSidebar"
  >
    <IconArrowLeft class="size-5" />
    <span class="sr-only">Toggle Sidebar</span>
  </Button>
</template>
