<script setup>
import { useI18n } from 'vue-i18n'
import BackHome from '@/components/BackHome.vue'

const { t } = useI18n()

// I paragrafi della pagina: i testi sono in about.p1 ... p7 (src/i18n/it.js ed en.js)
const paragraphs = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7']
</script>

<template>
  <main class="main about">
    <header class="about-header">
      <div class="page-title-row">
        <h1>{{ t('about.title') }}</h1>
        <BackHome />
      </div>
    </header>

    <p v-for="key in paragraphs" :key="key">{{ t(`about.${key}`) }}</p>
  </main>
</template>

<style scoped src="./about.css"></style>
