<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Le card della home. I testi stanno in src/i18n/it.js ed en.js, sotto home.cards.<key>
// - icon: un emoji (o lascialo vuoto)
// - link: se c'è, in fondo alla card compare il link (la CTA)
// - soon: true mostra l'etichetta "In arrivo" / "Coming soon"
// I paragrafi della sezione "Chi sono": i testi sono in home.about.p1 ... p7
const aboutParagraphs = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7']

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

    <!-- Chi sono -->
    <section class="about">
      <h2 class="section-title">{{ t('home.about.title') }}</h2>
      <p v-for="key in aboutParagraphs" :key="key">{{ t(`home.about.${key}`) }}</p>
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
