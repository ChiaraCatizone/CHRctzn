<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Le card della home. I testi stanno in src/i18n/it.js ed en.js, sotto home.cards.<key>
// - icon: un emoji (o lascialo vuoto)
// - link: se c'è, in fondo alla card compare il link (la CTA)
// - soon: true mostra l'etichetta "In arrivo" / "Coming soon"
const sections = [
  { key: 'about', icon: '👋', link: '/about' },
  { key: 'cv', icon: '📄', link: '/curriculum' },
  { key: 'projects', icon: '🛠️', link: '/projects' },
  { key: 'experiments', icon: '🎨', soon: true },
  { key: 'notes', icon: '✍️', soon: true },
  { key: 'gallery', icon: '📷', soon: true },
]
</script>

<template>
  <main class="main">
    <section class="intro">
      <div class="melting-text-container">
        <h1 class="melting-text">{{ t('home.greeting') }}</h1>
      </div>
      <h1 class="subtitle">{{ t('home.subtitle') }}</h1>
      <p class="lead-text">{{ t('home.description') }}</p>
    </section>

    <section>
      <h2 class="section-title">{{ t('home.sectionTitle') }}</h2>

      <div class="cards-grid">
        <!-- La card è solo un contenitore: è cliccabile solo il link (RouterLink) in fondo -->
        <article
          v-for="section in sections"
          :key="section.key"
          class="feature-card"
          :class="{ 'is-soon': section.soon }"
        >
          <span v-if="section.icon" class="feature-icon" aria-hidden="true">{{
            section.icon
          }}</span>
          <h3 class="feature-title">{{ t(`home.cards.${section.key}.title`) }}</h3>
          <p class="feature-text">{{ t(`home.cards.${section.key}.text`) }}</p>

          <RouterLink v-if="section.link" :to="section.link" class="feature-link">
            {{ t(`home.cards.${section.key}.cta`) }} <span aria-hidden="true">→</span>
          </RouterLink>
          <span v-else-if="section.soon" class="feature-badge">{{ t('home.soon') }}</span>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped src="./home.css"></style>
<style scoped src="./homeresponsive.css"></style>
