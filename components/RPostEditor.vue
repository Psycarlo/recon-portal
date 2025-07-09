<template>
  <UiCard>
    <div class="flex gap-4">
      <UiAvatar class="size-8 rounded-full">
        <UiAvatarImage :src="avatar" alt="User" />
        <UiAvatarFallback class="rounded-full">
          {{ avatarFallback }}
        </UiAvatarFallback>
      </UiAvatar>
      <div class="flex flex-col flex-1">
        <UiTextarea
          v-model="text"
          :placeholder="t('posts.editor.placeholder')"
          class="border-0 shadow-none focus-visible:ring-0 p-0 pt-1 resize-none"
        />
        <ul>
          <li>
            <UiButton variant="ghost" size="icon">
              <IconImageLine />
            </UiButton>
          </li>
        </ul>
      </div>
      <UiButton :disabled="!text" size="icon" class="rounded-full self-end">
        <IconSendPlaneFill class="size-5" />
      </UiButton>
    </div>
  </UiCard>
</template>

<script setup lang="ts">
type RPostEditorProps = {
  avatar: string;
  avatarFallback: string;
};

defineProps<RPostEditorProps>();

const { t } = useI18n();

const text = ref("");
</script>
