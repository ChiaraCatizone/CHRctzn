<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <main class="main">
    <h1>{{ t('about.title') }}</h1>
    <p>{{ t('about.construction') }}</p>
  </main>
</template>
