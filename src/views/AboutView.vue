<script setup>
import { useI18n } from 'vue-i18n'
import BackHome from '@/components/BackHome.vue'

const { t } = useI18n()

// I paragrafi dopo il primo: i testi sono in about.p2 ... p7 (src/i18n/it.js ed en.js)
const paragraphs = ['p2', 'p3', 'p4', 'p5', 'p6', 'p7']
</script>

<template>
  <main class="main about">
    <header class="about-header">
      <div class="page-title-row">
        <h1>{{ t('about.title') }}</h1>
        <BackHome />
      </div>
    </header>

    <!-- Primo paragrafo con l'illustrazione accanto: canederlo + Brasilena = ♥ -->
    <div class="about-intro">
      <p>{{ t('about.p1') }}</p>

      <svg
        class="about-illustration"
        viewBox="0 0 190 100"
        role="img"
        :aria-label="t('about.illustration')"
      >
        <g transform="translate(28 52) scale(1.3) translate(-28 -52)">
          <!-- Canederlo: forma bitorzoluta, con i cubetti di speck e le briciole di pane -->
          <path
            d="M13.5 49c-1-5 3-8 5-9.5 1.5-3.5 6-5 9-4 3.5-2 8-.5 10 2.5 4 1 6.5 4.5 6 8.5 2.5 3 2 7.5-.5 10 0 4.5-3.5 8-8 8.5-3 3-8 3-11 1-4.5 0-8-3-8.5-7-3-2-4-6-2-10z"
          />
          <rect
            class="speck"
            x="19"
            y="44"
            width="4.5"
            height="3.5"
            rx=".8"
            transform="rotate(-15 21 46)"
          />
          <rect
            class="speck"
            x="31"
            y="46"
            width="4"
            height="3.5"
            rx=".8"
            transform="rotate(20 33 48)"
          />
          <rect
            class="speck"
            x="23"
            y="55"
            width="4.5"
            height="3"
            rx=".8"
            transform="rotate(8 25 56)"
          />
          <rect
            class="speck"
            x="35"
            y="56"
            width="3.5"
            height="3"
            rx=".8"
            transform="rotate(-25 37 57)"
          />
          <path d="M27 41l1.5.5M38 42.5l1 1.5M17 56l1.5 1M30 62l1.5-.5M22 50.5h1.5M40 51l.5 1.5" />
        </g>
        <!-- + -->
        <path d="M58.5 52h9M63 47.5v9" />
        <g transform="translate(93 51) scale(1.25) translate(-86 -51)">
          <!-- La classica bottiglietta di Brasilena: bassa e panciuta, tappo a corona,
             collo corto, etichetta larga con il sole in basso -->
          <path d="M81 24h10M81.5 24v3.5h9V24M83.5 24v3.5M86 24v3.5M88.5 24v3.5" />
          <path d="M82 27.5v2.5h8v-2.5" />
          <path
            d="M82.5 30v3c0 4-9.5 5-9.5 12v31a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V45c0-7-9.5-8-9.5-12v-3"
          />
          <path d="M73 52h26M73 75h26" />
          <path d="M78 58.5h16M80.5 62h11" />
          <path
            class="sun"
            d="M82 75a4 4 0 0 1 8 0M86 69.5v-2M82.5 70.8l-1.2-1.4M89.5 70.8l1.2-1.4M80.3 73.3l-1.6-.7M91.7 73.3l1.6-.7"
          />
        </g>
        <!-- = -->
        <path d="M119 48h9M119 56h9" />
        <!-- Cuore -->
        <path
          class="heart"
          transform="translate(165 58) scale(1.3) translate(-143 -58)"
          d="M143 68l-11-11a7 7 0 0 1 11-9 7 7 0 0 1 11 9z"
        />
      </svg>
    </div>

    <p v-for="key in paragraphs" :key="key">{{ t(`about.${key}`) }}</p>
  </main>
</template>

<style scoped src="./about.css"></style>
