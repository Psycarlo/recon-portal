<template>
  <form class="flex flex-col gap-2 items-center" @submit.prevent="handleLogin">
    <h1 class="font-bold text-3xl font-heading uppercase">
      {{ $t("auth.login.title") }}
    </h1>
    <p class="text-[#717171]">{{ $t("auth.login.description") }}</p>
    <div class="grid gap-1.5 w-full mt-6">
      <UiLabel for="email">{{ $t("auth.inputs.email") }}</UiLabel>
      <UiInput id="email" type="email" v-model="email" />
    </div>
    <div class="grid gap-1.5 w-full">
      <UiLabel for="email">{{ $t("auth.inputs.password") }}</UiLabel>
      <UiInput id="password" type="password" v-model="password" />
    </div>
    <a href="#" class="text-xs text-primary self-end">
      {{ $t("auth.forgotPassword") }}
    </a>
    <UiButton class="w-full">{{ $t("auth.login.cta") }}</UiButton>
  </form>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

defineI18nRoute({
  paths: {
    pt: "/entrar",
  },
});

const client = useSupabaseClient();
const router = useRouter();

const email = ref("");
const password = ref("");
const loading = ref(false);

async function handleLogin() {
  loading.value = true;

  const { error } = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  if (!error) {
    loading.value = false;
    router.replace("/");
    return;
  }

  // TODO: handle errors
}
</script>
