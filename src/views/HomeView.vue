<script setup>
import { RouterLink } from 'vue-router'

// Le card della home: aggiungi, togli o modifica gli elementi di questo array.
// - icon: un emoji (o lascialo vuoto)
// - link: se c'è, tutta la card diventa cliccabile
// - soon: true mostra l'etichetta "In arrivo"
const sections = [
  {
    icon: '📄',
    title: 'Curriculum Vitae',
    text: 'Il mio percorso, le esperienze e le competenze.',
    link: { to: '/about', label: 'Vai al CV' },
  },
  {
    icon: '🛠️',
    title: 'Progetti',
    text: 'Le cose che ho costruito e a cui sto lavorando.',
    soon: true,
  },
  {
    icon: '🎨',
    title: 'Esperimenti',
    text: 'Prove di design, animazioni e componenti.',
    soon: true,
  },
  { icon: '✍️', title: 'Note', text: 'Appunti su quello che sto imparando.', soon: true },
  { icon: '📷', title: 'Galleria', text: 'Immagini e lavori visivi.', soon: true },
  { icon: '✉️', title: 'Contatti', text: 'Dove trovarmi e come scrivermi.', soon: true },
]
</script>

<template>
  <main class="main">
    <section class="intro">
      <div class="melting-text-container">
        <h1 class="melting-text">Congrats Stranger,</h1>
      </div>
      <h1 class="subtitle">you just landed on my Web Page!</h1>
      <p class="lead-text">Construction is happening. 🎉</p>
    </section>

    <section>
      <h2 class="section-title">Here you will find</h2>

      <div class="cards-grid">
        <!--
          <component :is> sceglie il tag: un RouterLink se la card ha un link,
          altrimenti un semplice <article>.
        -->
        <component
          :is="section.link ? RouterLink : 'article'"
          v-for="section in sections"
          :key="section.title"
          :to="section.link?.to"
          class="feature-card"
          :class="{ 'is-link': section.link, 'is-soon': section.soon }"
        >
          <span v-if="section.icon" class="feature-icon" aria-hidden="true">{{
            section.icon
          }}</span>
          <h3 class="feature-title">{{ section.title }}</h3>
          <p v-if="section.text" class="feature-text">{{ section.text }}</p>

          <span v-if="section.link" class="feature-link">
            {{ section.link.label }} <span aria-hidden="true">→</span>
          </span>
          <span v-else-if="section.soon" class="feature-badge">In arrivo</span>
        </component>
      </div>
    </section>
  </main>
</template>

<style scoped src="./home.css"></style>
<style scoped src="./homeresponsive.css"></style>
