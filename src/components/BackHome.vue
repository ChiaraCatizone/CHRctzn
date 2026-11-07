<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <!-- Freccia di ritorno alla home: va messa accanto al titolo, dentro <div class="page-title-row"> -->
  <RouterLink to="/" class="back-btn" :aria-label="t('nav.backHome')" :title="t('nav.backHome')">
    <svg class="back-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 14L4 9l5-5" />
      <path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11" />
    </svg>
  </RouterLink>
</template>

<style scoped src="./back-home.css"></style>
