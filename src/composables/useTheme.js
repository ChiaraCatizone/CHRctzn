import { ref, watch } from 'vue'

// Un "composable" è una funzione che contiene logica riusabile (stato + funzioni).
// Per convenzione si chiama useQualcosa. Qualsiasi componente può fare:
//   const { theme, toggleTheme } = useTheme()
//
// Come funziona il tema:
// - AUTOMATICO: dalle 7:00 alle 19:00 (ora del browser) è giorno, altrimenti notte.
// - MANUALE: il tasto inverte il tema. La scelta vale fino al prossimo cambio
//   giorno/notte, poi si torna all'automatico.
// Nota: la stessa logica è copiata in piccolo in index.html, per evitare il "lampo"
// di colore sbagliato al caricamento. Se cambi gli orari, cambiali anche lì.

const DAY_START = 7 // ore 7:00
const NIGHT_START = 19 // ore 19:00
const STORAGE_KEY = 'theme-override'

// Tema automatico in base all'ora
function autoTheme(now = new Date()) {
  const h = now.getHours()
  return h >= DAY_START && h < NIGHT_START ? 'light' : 'dark'
}

// Il prossimo momento in cui il tema automatico cambia (le 7:00 o le 19:00)
function nextSwitch(now = new Date()) {
  const next = new Date(now)
  next.setMinutes(0, 0, 0)
  const h = now.getHours()
  if (h < DAY_START) next.setHours(DAY_START)
  else if (h < NIGHT_START) next.setHours(NIGHT_START)
  else {
    next.setDate(next.getDate() + 1)
    next.setHours(DAY_START)
  }
  return next.getTime()
}

// Legge la scelta manuale salvata, se è ancora valida
function readOverride() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (saved && Date.now() < saved.until) return saved.theme
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // localStorage non disponibile o dato non valido: si usa l'automatico
  }
  return null
}

function currentTheme() {
  return readOverride() ?? autoTheme()
}

// Lo stato sta FUORI dalla funzione, così è condiviso da tutti i componenti
const theme = ref(currentTheme())

// watch: ogni volta che `theme` cambia, aggiorna la pagina
watch(
  theme,
  (value) => {
    document.documentElement.dataset.theme = value
  },
  { immediate: true },
)

// Ogni minuto ricontrolla: se la pagina resta aperta, alle 7 e alle 19 il tema cambia da solo
setInterval(() => {
  theme.value = currentTheme()
}, 60 * 1000)

export function useTheme() {
  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    try {
      if (theme.value === autoTheme()) {
        // Sei tornata al tema automatico: niente da ricordare
        localStorage.removeItem(STORAGE_KEY)
      } else {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ theme: theme.value, until: nextSwitch() }),
        )
      }
    } catch {
      // ignora: il tema cambia lo stesso, solo non viene ricordato
    }
  }
  return { theme, toggleTheme }
}
