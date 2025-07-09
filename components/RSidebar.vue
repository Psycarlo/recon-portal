<script setup lang="ts">
import type { RouteNamedMapI18n } from "vue-router/auto-routes";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  CalendarEventFill,
  CalendarEventLine,
  HomeFill,
  HomeLine,
  MoneyEuroBoxFill,
  MoneyEuroBoxLine,
  Settings3Fill,
  Settings3Line,
  ShieldFill,
  ShieldLine,
} from "./icon";

const { t } = useI18n();
const localePath = useLocalePath();
const { isTabActive } = useTabActive();

type NavItem = {
  title: string;
  url: string;
  route: keyof RouteNamedMapI18n;
  iconLine: object;
  iconFill: object;
};

const navMain: NavItem[] = [
  {
    title: t("nav.feed"),
    url: localePath("feed"),
    route: "feed",
    iconLine: HomeLine,
    iconFill: HomeFill,
  },
  {
    title: t("nav.events"),
    url: localePath("events"),
    route: "events",
    iconLine: CalendarEventLine,
    iconFill: CalendarEventFill,
  },
  {
    title: t("nav.subscription"),
    url: localePath("subscription"),
    route: "subscription",
    iconLine: MoneyEuroBoxLine,
    iconFill: MoneyEuroBoxFill,
  },
];

const navSecondary: NavItem[] = [
  {
    title: t("nav.admin"),
    url: localePath("admin"),
    route: "admin",
    iconLine: ShieldLine,
    iconFill: ShieldFill,
  },
  {
    title: t("nav.settings"),
    url: localePath("settings"),
    route: "settings",
    iconLine: Settings3Line,
    iconFill: Settings3Fill,
  },
];
</script>

<template>
  <Sidebar
    collapsible="icon"
    class="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
  >
    <SidebarTrigger class="absolute -right-3.5 top-1.5 size-6" />
    <SidebarContent>
      <SidebarGroup class="pt-8">
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in navMain" :key="item.title">
              <SidebarMenuButton asChild :isActive="isTabActive(item.route)">
                <a :href="item.url">
                  <component
                    v-if="isTabActive(item.route)"
                    :is="item.iconFill"
                  />
                  <component v-else :is="item.iconLine" />
                  <span>{{ item.title }}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup class="mt-auto">
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in navSecondary" :key="item.title">
              <SidebarMenuButton asChild :isActive="isTabActive(item.route)">
                <a :href="item.url">
                  <component
                    v-if="isTabActive(item.route)"
                    :is="item.iconFill"
                  />
                  <component v-else :is="item.iconLine" />
                  <span>{{ item.title }}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>
