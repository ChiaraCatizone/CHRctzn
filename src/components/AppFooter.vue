<script setup>
import { useI18n } from 'vue-i18n'
import { contacts } from '@/data/contacts'

const { t } = useI18n()

// L'anno si aggiorna da solo
const year = new Date().getFullYear()

// Le tecnologie con cui è fatto il sito
const stack = ['Vue', 'Vite', 'vue-i18n', 'Bootstrap']

// Le icone dei contatti, disegnate a linea come sole/luna e freccia (viewBox 24x24)
const icons = {
  email: ['M3 5h18v14H3z', 'M3 6l9 7 9-7'],
  linkedin: [
    'M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z',
    'M8 10.5V17M8 7.5v.01M12 17v-6.5M12 13.5a2.5 2.5 0 0 1 5 0V17',
  ],
  github: [
    'M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21',
  ],
  instagram: [
    'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z',
    'M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z',
    'M17.5 6.5v.01',
  ],
  threads: ['M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z', 'M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.9 7.9'],
}
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <!-- Contatti: titolo a sinistra, link a pillola con icona a destra -->
      <div class="footer-contact">
        <div>
          <h2 class="contact-title">{{ t('footer.contactTitle') }}</h2>
          <p class="contact-text">{{ t('footer.contactText') }}</p>
        </div>

        <div class="contact-links">
          <!-- L'email (mailto:) apre il programma di posta di chi visita, gli altri link una nuova scheda -->
          <a
            v-for="contact in contacts"
            :key="contact.id"
            :href="contact.href"
            class="contact-pill"
            :target="contact.id === 'email' ? null : '_blank'"
            :rel="contact.id === 'email' ? null : 'noopener'"
          >
            <svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path v-for="d in icons[contact.id]" :key="d" :d="d" />
            </svg>
            {{ contact.label }}
            <span class="contact-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <p class="footer-meta">
        <span>// {{ t('footer.builtWith') }} {{ stack.join(' · ') }}</span>
        <i18n-t keypath="footer.help" tag="span">
          <template #claude>
            <a href="https://claude.com/claude-code" target="_blank" rel="noopener">Claude</a>
          </template>
        </i18n-t>
        <span>© {{ year }} Chiara Catizone</span>
      </p>
    </div>
  </footer>
</template>

<style scoped src="./footer.css"></style>
