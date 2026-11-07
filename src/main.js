import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'

// Bootstrap da npm (prima era caricato da CDN in index.html).
// Il "bundle" include già Popper, che serve per i dropdown.
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Font dei titoli (alternativa gratuita a Founders Grotesk), servito dal sito stesso
import '@fontsource-variable/hanken-grotesk'
// Font monospazio per lo stile "codice" (pagina progetti)
import '@fontsource-variable/jetbrains-mono'

// Stili globali del sito
import './assets/styles/styles.css'
import './assets/styles/stylesresponsive.css'

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
