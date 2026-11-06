import { watch } from 'vue'
import { createI18n } from 'vue-i18n'
import it from './it'
import en from './en'

// Traduzioni con vue-i18n.
// Nei template si usa {{ t('home.subtitle') }}: la chiave punta a un testo in it.js / en.js.

const STORAGE_KEY = 'language'
const LANGUAGES = ['it', 'en']

// Lingua iniziale: quella scelta col tasto, altrimenti quella del browser
function initialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (LANGUAGES.includes(saved)) return saved
  } catch {
    // localStorage non disponibile
  }
  return navigator.language?.toLowerCase().startsWith('it') ? 'it' : 'en'
}

export const i18n = createI18n({
  legacy: false, // usa la Composition API (useI18n), come il resto del sito
  locale: initialLanguage(),
  fallbackLocale: 'it',
  messages: { it, en },
})

// Ogni volta che la lingua cambia: aggiorna <html lang> e ricorda la scelta
watch(
  i18n.global.locale,
  (lang) => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // ignora: la lingua cambia lo stesso, solo non viene ricordata
    }
  },
  { immediate: true },
)

// Composable per il tasto della lingua
export function useLanguage() {
  const locale = i18n.global.locale
  function toggleLanguage() {
    locale.value = locale.value === 'it' ? 'en' : 'it'
  }
  return { locale, toggleLanguage }
}
