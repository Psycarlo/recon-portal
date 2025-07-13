<template>
  <div class="flex gap-4">
    <div class="flex flex-col w-2/3 gap-4">
      <RAnnouncement
        text="Não fales neste portal sobre nada que não falasses no podcast do Joe Rogan. A Reconquista sugere conversar cara a cara para proteger a tua privacidade e evitar leaks desnecessários."
      />
      <UiTabs default-value="general">
        <UiTabsList>
          <UiTabsTrigger value="general">
            {{ $t("feed.categories.general") }}
          </UiTabsTrigger>
          <UiTabsTrigger value="trends">
            {{ $t("feed.categories.trends") }}
          </UiTabsTrigger>
          <UiTabsTrigger value="district">
            {{ $t("feed.categories.district") }}
          </UiTabsTrigger>
        </UiTabsList>
        <!-- <UiTabsContent value="general"> </UiTabsContent>
        <UiTabsContent value="trends"> </UiTabsContent>
        <UiTabsContent value="district"> </UiTabsContent> -->
      </UiTabs>
      <RPostEditor
        avatar="https://picsum.photos/id/237/200/300"
        avatar-fallback="PS"
      />
      <UiSeparator />
      <RPost
        user-name="Carlos Marques"
        user-district="Leiria"
        avatar="https://picsum.photos/id/237/200/300"
        avatar-fallback="PS"
        text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        :n-likes="121"
        :n-comments="12"
        :created-at="new Date(1752075002000)"
      />
    </div>
    <div class="flex flex-col w-1/3 gap-3">
      <RSidePlugin id="live_chat" :title="t('plugins.chat')">
        <template #icon>
          <IconChat3Fill />
        </template>
        <h1>Hello</h1>
      </RSidePlugin>
      <RSidePlugin id="next_events" :title="t('plugins.events')">
        <template #icon>
          <IconCalendarEventFill />
        </template>
        <h1>Hello</h1>
      </RSidePlugin>
      <RSidePlugin id="map" :title="t('plugins.map')">
        <template #icon>
          <IconMapFill />
        </template>
        <h1>Hello</h1>
      </RSidePlugin>
      <RSidePlugin id="ranking" :title="t('plugins.ranking')">
        <template #icon>
          <IconMedalFill />
        </template>
        <PluginRanking :ranking="rankingTest" />
      </RSidePlugin>
    </div>
  </div>
</template>

<script setup lang="ts">
defineI18nRoute({
  paths: {
    pt: '/forum',
  },
})

const { t } = useI18n()

const rankingTest = [
  {
    avatar: 'https://picsum.photos/id/237/200/200',
    name: 'Carlos Marques',
    points: 187,
  },
  {
    avatar: 'https://picsum.photos/id/236/200/200',
    name: 'Afonço Gonçalves',
    points: 177,
  },
  {
    avatar: 'https://picsum.photos/id/235/200/200',
    name: 'Marília Marques',
    points: 143,
  },
  {
    avatar: 'https://picsum.photos/id/234/200/200',
    name: 'Migo Teste',
    points: 122,
  },
  {
    avatar: 'https://picsum.photos/id/233/200/200',
    name: 'Rui António',
    points: 121,
  },
]
</script>
