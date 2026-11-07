<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { projects } from '@/data/projects'
import BackHome from '@/components/BackHome.vue'

const { t } = useI18n()

// Anno selezionato nel filtro: null = tutti
const selectedYear = ref(null)

// Gli anni presenti nei progetti, senza doppioni, dal più recente
const years = computed(() => [...new Set(projects.map((p) => p.year))].sort((a, b) => b - a))

// I progetti da mostrare: tutti, oppure solo quelli dell'anno scelto (sempre dal più recente)
const visibleProjects = computed(() =>
  projects
    .filter((p) => selectedYear.value === null || p.year === selectedYear.value)
    .sort((a, b) => b.year - a.year),
)
</script>

<template>
  <main class="main">
    <header class="projects-header">
      <div class="page-title-row">
        <h1>{{ t('projects.title') }}</h1>
        <BackHome />
      </div>
      <p class="code-comment">// {{ t('projects.intro') }}</p>
    </header>

    <!-- Filtro per anno, in stile comando da terminale -->
    <div class="year-filter" role="group" :aria-label="t('projects.filterLabel')">
      <span class="filter-cmd" aria-hidden="true">$ ls --year</span>
      <button
        type="button"
        class="filter-btn"
        :aria-pressed="selectedYear === null"
        @click="selectedYear = null"
      >
        {{ t('projects.all') }}
      </button>
      <button
        v-for="year in years"
        :key="year"
        type="button"
        class="filter-btn"
        :aria-pressed="selectedYear === year"
        @click="selectedYear = year"
      >
        {{ year }}
      </button>
    </div>

    <div class="projects-grid">
      <!-- Ogni progetto è una card essenziale in stile terminale -->
      <article v-for="project in visibleProjects" :key="project.id" class="term-card">
        <header class="term-head">
          <h2 class="term-title">
            <span class="term-prompt" aria-hidden="true">$ </span>{{ project.id }}
          </h2>
          <span class="term-year">{{ project.year }}</span>
        </header>

        <p class="term-desc">{{ t(`projects.items.${project.id}`) }}</p>

        <p class="term-stack">{{ project.stack.join(' · ') }}</p>

        <!-- Chi ha lavorato al progetto: ogni username porta al profilo GitHub -->
        <p v-if="project.contributors?.length" class="term-with">
          {{ t('projects.with') }}
          <template v-for="(user, i) in project.contributors" :key="user"
            ><span v-if="i > 0">, </span
            ><a :href="`https://github.com/${user}`" target="_blank" rel="noopener"
              >@{{ user }}</a
            ></template
          >
        </p>

        <nav v-if="project.demo || project.github" class="term-links">
          <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener">↗ demo</a>
          <a v-if="project.github" :href="project.github" target="_blank" rel="noopener"
            >↗ github</a
          >
        </nav>
      </article>
    </div>
  </main>
</template>

<style scoped src="./projects.css"></style>
