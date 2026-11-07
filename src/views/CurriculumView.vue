<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <main class="main">
    <h1>{{ t('curriculum.title') }}</h1>
    <p>{{ t('curriculum.construction') }}</p>
  </main>
</template>