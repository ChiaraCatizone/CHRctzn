<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Le card della home. I testi stanno in src/i18n/it.js ed en.js, sotto home.cards.<key>
// - icon: un emoji (o lascialo vuoto)
// - link: se c'è, tutta la card diventa cliccabile
// - soon: true mostra l'etichetta "In arrivo" / "Coming soon"
const sections = [
  { key: 'cv', icon: '📄', link: '/curriculum' },
  { key: 'projects', icon: '🛠️', link: '/projects' },
  { key: 'experiments', icon: '🎨', soon: true },
  { key: 'notes', icon: '✍️', soon: true },
  { key: 'gallery', icon: '📷', soon: true },
  { key: 'contacts', icon: '✉️', soon: true },
]
</script>

<template>
  <main class="main">
    <section class="intro">
      <div class="melting-text-container">
        <h1 class="melting-text">{{ t('home.greeting') }}</h1>
      </div>
      <h1 class="subtitle">{{ t('home.subtitle') }}</h1>
    </section>

    <section>
      <h2 class="section-title">{{ t('home.sectionTitle') }}</h2>

      <div class="cards-grid">
        <!--
          <component :is> sceglie il tag: un RouterLink se la card ha un link,
          altrimenti un semplice <article>.
        -->
        <component
          :is="section.link ? RouterLink : 'article'"
          v-for="section in sections"
          :key="section.key"
          :to="section.link"
          class="feature-card"
          :class="{ 'is-link': section.link, 'is-soon': section.soon }"
        >
          <span v-if="section.icon" class="feature-icon" aria-hidden="true">{{
            section.icon
          }}</span>
          <h3 class="feature-title">{{ t(`home.cards.${section.key}.title`) }}</h3>
          <p class="feature-text">{{ t(`home.cards.${section.key}.text`) }}</p>

          <span v-if="section.link" class="feature-link">
            {{ t(`home.cards.${section.key}.cta`) }} <span aria-hidden="true">→</span>
          </span>
          <span v-else-if="section.soon" class="feature-badge">{{ t('home.soon') }}</span>
        </component>
      </div>
    </section>
  </main>
</template>

<style scoped src="./home.css"></style>
<style scoped src="./homeresponsive.css"></style>
