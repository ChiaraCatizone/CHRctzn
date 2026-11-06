# CHRctzn

Il sito personale di Chiara, fatto con **Vue 3 + JavaScript**, **Vite**, **Vue Router** e **Bootstrap 5**.

## Comandi

```bash
npm install      # solo la prima volta (serve Node 22.18+)
npm run dev      # server di sviluppo → http://localhost:5173
npm run build    # build di produzione nella cartella dist/
npm run preview  # prova in locale la build di produzione
npm run lint     # controlla (e corregge) il codice
npm run format   # formatta il codice con Prettier
```

## Struttura

```
public/                 file copiati così come sono (favicon, _redirects per Cloudflare)
src/
  main.js               punto di partenza: crea l'app, aggiunge router, Bootstrap e stili globali
  App.vue               layout: navbar + pagina corrente (<RouterView />)
  router/index.js       elenco delle pagine (URL → componente)
  i18n/                 traduzioni: it.js, en.js e la logica della lingua (vue-i18n)
  composables/          logica riusabile (useTheme: modalità giorno/notte)
  assets/styles/        CSS globali
  components/           pezzi riusabili (AppNavigation, ImageCard)
  views/                le pagine (HomeView, AboutView)
```

Ogni file `.vue` ha tre parti: `<script setup>` (la logica), `<template>` (l'HTML) e
`<style scoped>` (il CSS, che vale solo per quel componente).

## Aggiungere una pagina

1. Crea `src/views/ProjectsView.vue`
2. Aggiungila in `src/router/index.js`:
   `{ path: '/projects', name: 'projects', component: () => import('@/views/ProjectsView.vue') }`
3. Aggiungi il link nella navbar (`src/components/AppNavigation.vue`):
   `<RouterLink class="nav-link pill" to="/projects" active-class="active">Projects</RouterLink>`

## Testi e traduzioni

Tutti i testi del sito stanno in `src/i18n/it.js` e `src/i18n/en.js`, con le stesse chiavi.
Nei componenti si usano così:

```vue
<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <h1>{{ t('home.subtitle') }}</h1>
</template>
```

Per aggiungere un testo: aggiungi la stessa chiave in **entrambi** i file, poi usala con `t('...')`.

## Sintassi di base nel template

| Cosa                  | Come                                  |
| --------------------- | ------------------------------------- |
| mostrare un valore    | `{{ nome }}`                          |
| attributo dinamico    | `:src="immagine"`                     |
| evento                | `@click="apri()"`                     |
| condizione            | `v-if="visibile"` / `v-else`          |
| lista                 | `v-for="item in lista" :key="item.id"`|
| input collegato       | `v-model="testo"`                     |
| stato reattivo        | `const n = ref(0)` → nello script `n.value`, nel template `n` |
| valore calcolato      | `const doppio = computed(() => n.value * 2)` |
| props                 | `defineProps({ titolo: String })`     |

## Deploy su Cloudflare Pages

Impostazioni del progetto Pages (**Settings → Build**):

| Impostazione     | Valore          |
| ---------------- | --------------- |
| Framework preset | Vue             |
| Root directory   | *(vuota)*       |
| Build command    | `npm run build` |
| Output directory | `dist`          |

Se il progetto è collegato a GitHub, ogni `git push` pubblica il sito da solo.
`public/_redirects` fa funzionare anche URL come `/about` quando ricarichi la pagina.

## Strumenti consigliati

VS Code con l'estensione **Vue - Official** (la trovi già suggerita in `.vscode/extensions.json`).
In sviluppo, in basso nella pagina c'è anche il pulsante di **Vue DevTools** per vedere componenti e stato.
