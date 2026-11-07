<script setup>
import { useI18n } from 'vue-i18n'
import { education, experience, linkedin, skills } from '@/data/cv'
import BackHome from '@/components/BackHome.vue'

const { t, locale } = useI18n()

// '2024-03' → "mar 2024" in italiano, "Mar 2024" in inglese (lo fa il browser con Intl)
function formatMonth(ym) {
  if (!ym) return t('curriculum.present')
  const [year, month] = ym.split('-').map(Number)
  return new Date(year, month - 1).toLocaleDateString(locale.value, {
    month: 'short',
    year: 'numeric',
  })
}

function period(item) {
  return `${formatMonth(item.start)} – ${formatMonth(item.end)}`
}
</script>

<template>
  <main class="main cv">
    <!-- Intestazione -->
    <header class="cv-header">
      <p class="code-comment">// {{ t('curriculum.title') }}</p>
      <div class="page-title-row">
        <h1>{{ t('curriculum.name') }}</h1>
        <BackHome />
      </div>
      <p class="cv-role">{{ t('curriculum.role') }}</p>
      <p class="cv-meta">
        {{ t('curriculum.location') }} ·
        <a :href="linkedin" target="_blank" rel="noopener">↗ {{ t('curriculum.linkedin') }}</a>
      </p>
    </header>

    <!-- Esperienza -->
    <section class="cv-section">
      <h2 class="cv-section-title">{{ t('curriculum.experienceTitle') }}</h2>
      <ol class="cv-list">
        <li v-for="job in experience" :key="job.id" class="cv-item">
          <p class="cv-period">{{ period(job) }}</p>
          <div class="cv-body">
            <h3 class="cv-item-title">{{ t(`curriculum.experience.${job.id}.role`) }}</h3>
            <p class="cv-org">{{ job.org }}</p>
            <p class="cv-type">{{ t(`curriculum.experience.${job.id}.type`) }}</p>
            <p v-if="t(`curriculum.experience.${job.id}.description`)" class="cv-desc">
              {{ t(`curriculum.experience.${job.id}.description`) }}
            </p>
            <p v-if="job.skills.length" class="cv-skills">{{ job.skills.join(' · ') }}</p>
          </div>
        </li>
      </ol>
    </section>

    <!-- Formazione -->
    <section class="cv-section">
      <h2 class="cv-section-title">{{ t('curriculum.educationTitle') }}</h2>
      <ol class="cv-list">
        <li v-for="study in education" :key="study.id" class="cv-item">
          <p class="cv-period">{{ period(study) }}</p>
          <div class="cv-body">
            <h3 class="cv-item-title">{{ t(`curriculum.education.${study.id}`) }}</h3>
            <p class="cv-org">{{ study.org }}</p>
            <p v-if="study.grade" class="cv-type">{{ t('curriculum.grade') }}: {{ study.grade }}</p>
          </div>
        </li>
      </ol>
    </section>

    <!-- Competenze -->
    <section class="cv-section">
      <h2 class="cv-section-title">{{ t('curriculum.skillsTitle') }}</h2>
      <ul class="cv-chips">
        <li v-for="skill in skills" :key="skill">{{ skill }}</li>
      </ul>
    </section>
  </main>
</template>

<style scoped src="./curriculum.css"></style>
