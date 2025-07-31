<template></template>

<script setup lang="ts">
const localePath = useLocalePath()

await navigateTo(localePath('feed'))
</script>
