<script setup>
import { useI18n } from 'vue-i18n'
import { useTheme } from '@/composables/useTheme'
import { useLanguage } from '@/i18n'

const { t } = useI18n()
const { theme, toggleTheme } = useTheme()
const { toggleLanguage } = useLanguage()
</script>

<template>
  <div class="head">
    <nav class="navbar glass z-1 top-0 navbar-expand-lg">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/" exact-active-class="active">
          <div class="glitch-container">
            <h1 class="glitch-text">CHIARA'S</h1>
          </div>
        </RouterLink>

        <!-- I due tasti rotondi: lingua e tema -->
        <div class="nav-actions">
          <!-- Lingua: mostra la lingua in cui si passa cliccando -->
          <button
            class="icon-btn lang-toggle"
            type="button"
            :aria-label="t('language.switchTo')"
            :title="t('language.switchTo')"
            @click="toggleLanguage"
          >
            {{ t('language.short') }}
          </button>

          <!-- Tema: di notte il sole (passa al giorno), di giorno la luna -->
          <button
            class="icon-btn"
            type="button"
            :aria-label="theme === 'dark' ? t('theme.toLight') : t('theme.toDark')"
            :title="theme === 'dark' ? t('theme.toLight') : t('theme.toDark')"
            @click="toggleTheme"
          >
            <svg v-if="theme === 'dark'" class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path
                d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
              />
            </svg>
            <svg v-else class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
          </button>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          :aria-label="t('nav.menu')"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link pill" to="/about" active-class="active">
                {{ t('nav.about') }}
              </RouterLink>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link pill dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ t('nav.examples') }}
              </a>
              <ul class="dropdown-menu glass-dropdown">
                <li>
                  <a class="dropdown-item" href="#">{{ t('nav.action') }}</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">{{ t('nav.anotherAction') }}</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">{{ t('nav.somethingElse') }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped src="./navigation.css"></style>
<style scoped src="./navigationresponsive.css"></style>
